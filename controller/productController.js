const {products} = require('../models')

const {v4:uuidv4} = require('uuid')

exports.createProduct = async(req,res) => {
  try{
    const data = {
      id:uuidv4(),
      storeId:req.params.id,
      productName:req.body.productName,
      productQty:req.body.productQty,
      productAmount:req.body.productAmount
    };

    const newProduct = await products.create(data)
    res.status(201).json({message:`Product created successfully`,data:newProduct})
  }catch(err){
    res.status(500).json({error:err.message})
  }
}


exports.getAll = async(req, res) => {

  try{
    const getProduct = await products.findAll()

    res.status(200).json({message:`Product successfully retrieved`,data:getProduct})
  }catch(err){
    res.status(500).json({message:`Internal Server Error`,error:err.message})
  }
}


exports.getOne = async(req, res) => {

  try{
    const product = await products.findByPk(req.params.id)
    if(!product){
      return res.status(404).json('Products not found')
    }
    res.status(200).json({message:`Kindly find the product with the above id`,data:product})
  }catch(err){
    res.status(500).json({message:`Internal serval error`,error:err.message})
  }
}


exports.updateUser = async(req, res) => {

  try{
    const product = await products.findByPK(req.params.id)
    if(!product){
      return res.status(404).json('Product not found')
    }

    const newInfo = products.update({
      productName: req.body.productName,
      productQty: req.body.productQty,
      productAmount: req.body.productAmount,
    })
    res.status(200).json({message:`Product updated`, data:newInfo})

  }catch(err){
    res.status(500).json({message:`Internal serval error`,error:err.message})
  }
}


exports.deleteUser = async(req, res) => {

  try{
    const product = await products.findByPK(req.params.id)
    if(!product){
      return res.status(404).json('product not found')
    }
    product.destroy()
    res.status(200).json({message:'product deleted successfully',data:product})
  }catch(err){
    res.status(500).json('Internal Server Error',err.message)
  }
}