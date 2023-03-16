const { Router } = require("express");
const { check } = require("express-validator");
const {
  getProducto,
  postProducto,
  putProducto,
  deleteProducto
} = require("../controllers/productsController");
const { validatorMiddlewere } = require("../middlewares/validator-middleweres");
const { existsUserById } = require("../helpers/db-validators");


const router = Router();

router.get("/", getProducto);

router.post("/",
  [
    check("title", "title required ").not().isEmpty(),
    check("codigoISBM", "codigoISBM min length are 15 characthers").isLength({
      min: 15,
    }),
    check("autor", "autor required ").not().isEmpty(),
    validatorMiddlewere,
  ],
  postProducto
);

router.put("/:id",
  [
    check("id", "Is not ID valid").isMongoId(),
    check("id").custom(existsUserById),
    validatorMiddlewere,
  ],
  putProducto
);

router.delete("/:id",
  [
    check("id", "Is not ID valid").isMongoId(),
    check("id").custom(existsUserById),
    validatorMiddlewere,
  ],
  deleteProducto
);
        
module.exports = router;