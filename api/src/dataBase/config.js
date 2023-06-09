const mongoose = require('mongoose');

const dbConnection = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_CNN)
        console.log("Data Base Conneted");
    } catch (error) {
        console.log(error);
        throw new Error("Can't connect to Data Base")
    }
}
module.exports = {
    dbConnection
}













// require('dotenv').config()
// const { Sequelize } = require('sequelize');
// const fs = require('fs');
// const path = require('path');
// // variable que almacena la conexion
// const {
//   PGUSER, 
//   PGPASSWORD, 
//   PGHOST,
//   PGPORT,
//   PGDATABASE,
// } = process.env;

// // postgresql://postgres:1w7mVEs8nqgqNf8GAS9R@containers-us-west-159.railway.app:6246/railway
// const sequelize = new Sequelize(`postgresql://${ PGUSER }:${ PGPASSWORD }@${ PGHOST }:${ PGPORT }/${ PGDATABASE }`, {
//    logging: false, // set to console.log to see the raw SQL queries
//    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });


// const basename = path.basename(__filename);
// const modelDefiners = [];

// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });

// // Injectamos la conexion (sequelize) a todos los modelos

// modelDefiners.forEach(model => model(sequelize));

// // Capitalizamos los nombres de los modelos ie: product => Product

// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);

// // En sequelize.models están todos los modelos importados como propiedades
// // Para relacionarlos hacemos un destructuring
// const { Country, Activity  } = sequelize.models;

// // Aca vendrian las relaciones
// // Product.hasMany(Reviews);
// //conexion de la relacion entre las tablas
// Country.belongsToMany(Activity, { through: "country_activity" });
// Activity.belongsToMany(Country, { through: "country_activity" });

// module.exports = {
//   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
//   conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
// };