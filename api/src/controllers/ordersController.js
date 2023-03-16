const { mailConfirmShopping, mailOrderAtTable, mailConfirmReservation } = require("../helpers/nodemailer");
const Order = require("../models/order");
const User = require("../models/users");
// const { calculateOrderAmount } = require('./paymentsController')

const getOrder = async (req, res) => {
	try {
		const myorder = await Order.find()
		.populate('order', ['title', "autor", "price", "img"])
		res.status(200).json({ msg: 'Estas haciendo consulta de la ordenes ', myorder});
	} catch (error) {
		res.status(400).json({ msg:'Este es el error de getorder', error });
	}
};


// const getOrderUserid = async (req, res) => {
// 	try {
// 		const { id } = req.params

// 		const order = await Order.find({ 'userid': id , state: true}).populate('order');
// 		return res.status(200).json(order);

// 	} catch (error) {
// 		res.status(400).json({ msg: error });
// 	}

// }

const postOrder = async (req, res) => {
	// console.log("llega por body...", req.body);
	try {
		const { userid, order, typeOrder, table, address, date } = req.body;

		const user = await User.findById(userid)
		// pendiente guardar la cantidad de unidades que pide el cliente
		// const newOrder = order.map(el => {
		// 	return { _id: el.id, img: el.img, price: el.price, cant: el.cant } //
		// })

		// let valuePaid = 0
		// if(typeOrder === "DELIVERY"){
		// 	valuePaid = calculateOrderAmount(order) / 100
		// }
		// console.log(valuePaid)
			
			const myorder = await Order.create({
				userid,
				order,
				typeOrder,
				table,
				address,
				// valuePaid,
				date
			});
		
		if(typeOrder === "DELIVERY"){
			mailConfirmShopping(user.name, user.email, address, valuePaid )//
		}

		if(typeOrder === "LOCAL"){
			mailOrderAtTable(user.name, user.email, table)			
		}
		
		if(typeOrder === "RESERVATION"){
			mailConfirmReservation(user.name, user.email, date)			
		}

		res.status(200).json( myorder);
	} catch (error) {
		// console.log("Error controller post order", error);
		res.status(400).json({ msg: 'Estas en el error de postOrder',error });
	}

};


const putOrder = async (req, res) => {
	try {
		const { id } = req.params;
		const { state, ...resto } = req.body;

		const orders = await Order.findByIdAndUpdate(id, resto);

		res.status(200).json(orders);
	} catch (error) {
		res.status(400).json({ msg: 'Estas en el error de putOrder',error });
	}

};

const deleteOrder = async (req, res) => {
	try {
		const { id } = req.params;
		const orders = await Order.findByIdAndUpdate(id, { state: false });
		return res.json(orders);
	} catch (error) {
		res.status(400).json({ msg: error });
	}
};

module.exports = {
	getOrder,
	postOrder,
	putOrder,
	deleteOrder,
	// getOrderUserid

};
