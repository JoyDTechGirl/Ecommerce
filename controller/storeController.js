const {stores} = require('../models')

const {v4:uuidv4} = require('uuid')

exports.createStore = async(req,res) => {
  try{
    const data = {
      id:uuidv4(),
      storeName:req.body.storeName,
      email:req.body.email,
      location:req.body.location
    };

    const newStore = await stores.create(data)
    res.status(201).json({message:`Store created successfully`,data:newStore})
  }catch(err){
    res.status(500).json({message:err.message});
  }
}


exports.getAll = async(req,res) => {
  try{
    const allUser = await stores.findAll()

    res.status(200).json({message:`Kindly find below all stores`,"total number of stores":allUser.length,data:allUser})

  }catch(err){
    res.status(500).json({error:err.message})
  }
}


exports.getOne = async(req,res) => {
  try{
    const store = await stores.findByPK(req.params.id)
    if(!store){
      return res.status(404).json('store not found')
    }
    res.status(200).json({message:`Kindly find below user with the above id`,data:store})
  }catch(err){
    res.status(500).json({error:err.message})
  }
}


exports.UpdateUser = async(req,res) => {

  try{
    const store = await stores.findByPK(req.params.id)
    if(!store){
      return res.status(404).json('store not found')
    }

    const newInfo = await store.update({
      storeName:req.body.storeName,
      location:req.body.location,
    })

    res.status(200).json({message:`store updated successfully`,data:newInfo})
  }catch(err){
    res.status(500).json({error:err.message})
  }
}


exports.deleteStore = async(req,res) =>{

  try{
    const store = await stores.findByPK(req.params.id)

    if(!store){
      return res.status(404).json('store not found')
    }

    store.destory()
    res.status(200).json('store deleted')
  }catch(err){
    res.status(500).json({error: err.message})
  }
}