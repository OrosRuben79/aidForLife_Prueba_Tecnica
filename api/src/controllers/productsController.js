const Producto = require('../models/products')

const getProducto = async (req, res) => {
  try {
    const myProducto = await Producto.find({ state: true });
    console.log(myProducto)
    res.status(200).send(myProducto);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const postProducto = async (req, res) => {
  try {

    const { title, autor, editorial, codigoISBM, price, img } = req.body;

    const myProducto = await Producto.create({
      title,
      autor,
      editorial,
      codigoISBM,
      price,
      img: "",                                                      

    });

    res.status(200).json(myProducto);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const putProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { state, ...resto } = req.body;

    const myProducto = await Producto.findByIdAndUpdate(id, resto);

    res.status(200).json(myProducto);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const deleteProducto = async (req, res) => {
	try {
		const { id } = req.params;
		const myProducto = await Producto.findByIdAndUpdate(id, { state: false });
		return res.json(myProducto);
	} catch (error) {
		res.status(400).json({ msg: error });
	}
};

module.exports = {
  getProducto,
  postProducto,
  putProducto,
  deleteProducto
};