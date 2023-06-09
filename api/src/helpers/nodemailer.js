const nodemailer = require("nodemailer");



const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.GOOGLE_MAIL_USER,
		pass: process.env.GOOGLE_MAIL_PASS,
	},

});


console.log("Message sent: %s", transporter.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// Preview only available when sending through an Ethereal account
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(transporter));
// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

transporter.verify().then(() => {
	console.log("Lista la configuracion para enviar correos");
});

const redirect = 'https://myporfolio-vert.vercel.app/'
 
const mailActivateAccount = async (name, email, token) => {
	try {
		await transporter.sendMail({
			from: "RO-PruebaTécnica <desarrolladororos@gmail.com>",
			to: email,
			subject: "Activa tu cuenta para comprar productos!!!",
			html: `
				<h2>Hola ${name}</h2>
				<h4>Gracias por registrarte en nuestra pagina</h4>
				<hr />
				<div>
				<p>Para activar tu cuenta haz clic en el boton 👇</p>
				<div style="display: flex; justify-content: center;">
					<a href="${redirect}""${token}" target="_blank" rel="noopener noreferrer" style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">
						Activacion de cuenta 
					</a>
				</div>
				<p>Atentamente</p>
				<p>Gracias por activar tu cuenta</p>
				</div> 
			`,
		});
		
	} catch (error) {
		console.log("Error en nodemailer activate account", error);
		return error
	}
};

// const mailConfirmShopping = async (name, email, address, valuePaid) => {
// 	try {
// 		await transporter.sendMail({
// 			from: "PF-Henry <devapps2211@gmail.com>",
// 			to: email,
// 			subject: "Confirmacion compra exitosa Henry foods!!! ✅",
// 			html: `
// 				<h2>Hola ${name}</h2>
// 				<h3>Tu compra se ha realizado correctamente </h3>
// 				<hr />
// 				<div>
// 				<h4>Gracias por comprar en nuestra pagina 🤗 ❤️ 🙂 </h4>
// 				<p>Muy pronto en tu direccion registrada ${address} estara llegando tu pedido hecho por un valor de $ ${valuePaid}</p>
// 				<hr />			
// 				<p>Atentamente</p>
// 				<p>Tus amigos de Henry foods</p>
// 				</div> 
// 			`,
// 		});
// 	} catch (error) {
// 		console.log("Error en nodemailer confirmar compra", error);
// 		return error
// 	}
// };

// const mailOrderAtTable = async (name, email, table) => {
// 	try {
// 		await transporter.sendMail({
// 			from: "PF-Henry <devapps2211@gmail.com>",
// 			to: email,
// 			subject: "Se ha creado tu orden!!! ✅",
// 			html: `
// 				<h2>Hola ${name}</h2>
// 				<h3>Hemos recibido tu orden</h3>
// 				<hr />
// 				<div>
// 				<h4>Gracias por comprar en nuestro restaurante 🤗 ❤️ 🙂 </h4>
// 				<p>Tu pedido estara en pocos minutos en tu mesa No ${table}, si tienes alguna inquietud, no dudes consultar con alguna de la personas de nuestro Staff</p>
// 				<hr />			
// 				<p>Atentamente</p>
// 				<p>Tus amigos de Henry foods</p>
// 				</div> 
// 			`,
// 		});
// 	} catch (error) {
// 		console.log("Error en nodemailer orden a la mesa", error);
// 		return error
// 	}
	
// }

// const mailConfirmReservation = async (name, email, date) => {
// 	try {
// 		await transporter.sendMail({
// 			from: "PF-Henry <devapps2211@gmail.com>",
// 			to: email,
// 			subject: "Hemos recibido una reservacion de tu parte!!! ✅",
// 			html: `
// 				<h2>Hola ${name}</h2>
// 				<h3>Hemos recibido una solicitud de reserva</h3>
// 				<hr />
// 				<div>
// 				<h4>Gracias por reservar en nuestro restaurante 🤗 ❤️ 🙂 </h4>
// 				<p>Hemos recibido una solicitud de reserva para que disfrutes de nuestros exquisitos platos el dia ${date}.</p>
// 				<p>Ese dia nos puedes confirmar tu llegada al restaurante con nuestro staff para poner en marcha tu pedido y ser atendido en menos de 20 minutos</p>
// 				<p>Sera un placer para nosotros poder atenderte el ${date}</p>
// 				<hr />			
// 				<p>Atentamente</p>
// 				<p>Tus amigos de Henry foods</p>
// 				</div> 
// 			`,
// 		});	
// 	} catch (error) {
// 		console.log("Error en nodemailer confirmar reservacion", error);
// 		return error
// 	}
	
// }

// const mailToRecoveryPassword = async (email, name, urlClient) => {
// 	try {
// 		await transporter.sendMail({
// 			from: "PF-Henry <devapps2211@gmail.com>",
// 			to: email,
// 			subject: "Recuperar contraseña en Henry Foods",
// 			html: `
// 				<h2>Hola usuario ${name}</h2>
// 				<h4>Has olvidado tu contraseña??</h4>
// 				<hr />
// 				<div>
// 				<p>Parece que has olvidado tu contraseña, pero no importa, para recuperar tu cuenta haz clic en el siguiente boton 👇</p>
// 				<div style="display: flex; justify-content: center;">
// 					<a 
// 						href="${urlClient}recoveryPassword" 
// 						style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;"
// 						target="_blank" 
// 						rel="noopener noreferrer">
// 					Recupera tu cuenta aqui!!!
// 					</a>			
// 				</div>
// 				<p>Tienes 10 minutos para completar el proceso</p>
// 				<hr />
// 				<h3>Atentamente</h3>
// 				<p>Tus amigos de HenryFoods!!!</p>
// 				</div>        
// 			`,
// 		});	
// 	} catch (error) {
// 		console.log("Error en nodemailer recover password", error);
// 		return error
// 	}
	
// };

module.exports = {
	transporter,
	mailActivateAccount,
	// mailConfirmShopping,
	// mailOrderAtTable,
	// mailConfirmReservation,
	// mailToRecoveryPassword,

}