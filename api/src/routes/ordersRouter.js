const { Router } = require('express');
const { 
    getOrder, 
    postOrder, 
    deleteOrder, 
    putOrder, 
    // getOrderUserid 
} = require('../controllers/ordersController');

const router = Router();

router.get("/", getOrder)
// router.get('/:id', getOrderUserid)
router.post('/', postOrder)
router.put('/:id', putOrder)
router.delete('/:id', deleteOrder)

module.exports = router