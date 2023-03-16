const { Schema, model } = require('mongoose');

const ProductoSchema = Schema ({
    title: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    autor: {
        type: String,
        required: [true, 'El autor es obligatorio']
    },
    editorial: {
        type: String,
        default: 1,
        required: [true, 'La editorial es obligatorio']
    },
    codigoISBM: {
        type: Number,
        default: 1,
        required: [true, 'El codigo es obligatorio']
    },
    price: {
        type: Number,
        default: 0,
    },  
    state: {
        type: Boolean,
        default: true,
        required: true,
    },
    disponible: {
         type: Boolean, 
         default: true 
    },
    img: { 
        type: String 
    },
  
});

module.exports = model( 'Producto', ProductoSchema );