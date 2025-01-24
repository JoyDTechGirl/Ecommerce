const {createProduct,getAll,getOne,updateUser,deleteUser} = require('../controller/productController')

const productRouter = require('express').Router();

productRouter.post('/product',createProduct)
productRouter.get('/product',getAll)
productRouter.get('/product/:id',getOne)
productRouter.patch('/product/:id',updateUser)
productRouter.delete('/product/:id',deleteUser)

module.exports = productRouter;
