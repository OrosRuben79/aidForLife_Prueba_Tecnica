const { Router } = require('express');
// llamada de rutas

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const ordersRouter = require('./ordersRouter');
const paymentRouter= require('./paymentRouter');


const router = Router();

// declarocion de rutas

router.use('/api/V1/user', userRouter)
router.use('/api/V1/product', productRouter)
router.use('/api/V1/order', ordersRouter)
router.use('/payment', paymentRouter)
// router.use('/api/V1/miAgenda', miAgendaRouter)



module.exports = router;