const { Router } = require("express");
const { check } = require("express-validator");
const {
  getUser,
  geAlltUsers,
  postUser,
  updateUser,
  delteUser,
  updateImgUser,
  deleteImgUser,
} = require("../controllers/userContoller");
const { existsEmail, existsUserById } = require("../helpers/db-validators");
const { validatorMiddlewere } = require("../middlewares/validator-middleweres");

const router = Router();

router.get("/", getUser);
router.get("/allUsers", geAlltUsers);


router.post(
  "/",
  [
    check("name", "name required ").not().isEmpty(),
    check("password", "password min length are 6 characthers").isLength({
      min: 6,
    }),
    check("email", "email need format example@mail.com").isEmail(),
    check("email").custom(existsEmail),
    check("country", "country required").not().isEmpty(),
    validatorMiddlewere,
  ],
  postUser
);

router.put("/updateUser/:id", [
  check("id", "Is not ID valid").isMongoId(),
  check("id").custom(existsUserById),
  check("address", "address required ").not().isEmpty(),
  check("city", "city required ").not().isEmpty(),
  validatorMiddlewere,
], 
updateUser
);

router.delete(
  "/:id",
  [
    check("id", "Is not ID valid").isMongoId(),
    check("id").custom(existsUserById),
    validatorMiddlewere,
  ],
  delteUser
);

router.put(
  "/:id",
  [
    check("id", "Is not ID valid").isMongoId(),
    check("id").custom(existsUserById),
    validatorMiddlewere,
  ],
  updateImgUser
);

router.put(
  "/:id/:delete",
  [
    check("id", "Is not ID valid").isMongoId(),
    check("id").custom(existsUserById),
    validatorMiddlewere,
  ],
  deleteImgUser
);


module.exports = router;
