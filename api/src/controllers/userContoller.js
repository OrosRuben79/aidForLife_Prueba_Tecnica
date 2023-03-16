const bcryptjs = require("bcryptjs");
const { mailActivateAccount, mailToRecoveryPassword } = require("../helpers/nodemailer");
const { generateJWT } = require("../helpers/generate-jwt");
const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);
const User = require("../models/users");




// consulta get con filtro pot borrador lògico
const getUser = async (req, res) => {
  try {
    const myuser = await User.find() 
    console.log(myuser)
    res.status(200).send({msg:'Estas consultando los usuarios activos', myuser});
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const geAlltUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({msg:'Estas consultando todos los usuarios ', myuser});
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const postUser = async (req, res) => {
  try {
    const { name, email, password, country,  registerDate, img} = req.body;

    const findUser = await User.findOne({ email });
    if (findUser && findUser.state){
      return res.status(400).json("Usuario ya existe " + findUser._id);
    }
    const salt = bcryptjs.genSaltSync();
    const cripPasworrd = bcryptjs.hashSync(password, salt);
    
    if(findUser){
      const reactivate = await User.findByIdAndUpdate(findUser._id,{
        state: true,
        name,
        country,
        password: cripPasworrd,
      
      })
      const token = await generateJWT(reactivate._id, reactivate.state);
      return res.status(201).json(token)
    }

    const user = await User.create({
      name,
      email,
      password: cripPasworrd,
      img: "",
      rol: "USER_ROLE",
      country,
      state: false,
      registerDate
    });

    const token = await generateJWT(user._id, user.state);

    mailActivateAccount(name, email,  token);

    return res.status(200).json({msg:'Estas creando un usuatio', token});
  } catch (error) {
    return res.status(404).json({msg:'que le pasa a esto',error});
  }
};

const updateUser = async (req, res) => {
  const { name, password, country, city, address, registerDate, img } = req.body;
  const id = req.params;
  try {
    const findUser = await User.findById({ _id: id.id });
    if (!findUser) return res.status(400).json("Usuario no encontrado");

    if (findUser) {
      const user = await User.findOneAndUpdate(
        { _id: id.id },
        { name, country, city, address, registerDate, img },
        { returnOriginal: false }
      );
      return res.json(user);
    } else {
      const validatePassword = await bcryptjs.compareSync(
        password,
        findUser.password
      );
      if (!validatePassword) return res.status(404).json("password invalid");
      const user = await User.findOneAndUpdate(
        { _id: id.id },
        { fullName, country, city, address, registerDate, img },
        { returnOriginal: false }
      );

      return res.status(200).json({msg:'Estas actualizando los datos de el usuario',user});
    }
  } catch (error) {
    console.log("Error on trying update user", error);
    return res.status(500).json({msg:'Los datos no se actualizaron correctamente',error});
  }
};


const delteUser = async (req, res) => {
  try {
    const { id } = req.params;
    //const user = await User.findByIdAndDelete(id);   //Fisicamente lo borramos
    // Borrador logico
    const user = await User.findByIdAndUpdate(id, {state: false})

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
};


const updateImgUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    // si el usuaio ya tiene imagen guardada en cloudinary borrar la anterior para guardar la nueva
    const validate = user.img.split("/")[2];
    if (validate === "res.cloudinary.com") {
      const nameArr = user.img.split("/");
      const name = nameArr[nameArr.length - 1];
      const [public_id] = name.split(".");
      await cloudinary.uploader.destroy(public_id);
    }
    
    // extraemos los archivo y los mandamos a cloudinary
   
    const { tempFilePath } = req.files.file;
    
    const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
    
	// actulizamos la imagen del usuario en la base de datos con la url de cloudinary
    const userUpdate = await User.findByIdAndUpdate(id, { img: secure_url });

    res.status(200).json(userUpdate);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const deleteImgUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

      const nameArr = user.img.split("/");
      const name = nameArr[nameArr.length - 1];
      const [public_id] = name.split(".");
      await cloudinary.uploader.destroy(public_id);
    
	
	// actulizamos la imagen del usuario en la base de datos con la url de cloudinary
    const userUpdate = await User.findByIdAndUpdate(id, { img: "" });

    res.status(200).json(userUpdate);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};




module.exports = {
  getUser,
  geAlltUsers,
  postUser,
  updateUser,
  delteUser,
  updateImgUser, 
  deleteImgUser
};
