const User = require('../models/users')
const Food = require('../models/products')

const existsEmail = async( email = '') => {
    // check if email exists
    const existsEmail = await User.findOne({ email, state: true});
    if ( existsEmail ){
        throw new Error(`Email are registred!! are need unique`)
    }
}

const userIDValidator = async( userId = '') => {
    const user = await User.findById(userId)
    if (!user ){
        throw new Error(`El usuario no existe`)
    }
}


const existsUserById = async( id ) => {
   // check if id exists
    const existsUserByrId = await User.findById(id);
    if ( !existsUserByrId ){
        throw new Error(`id dont exist: ${ id }`)
    }
}

module.exports = {
    existsEmail,
    existsUserById,
    userIDValidator,
}