const {createStore,getAll,getOne,UpdateUser,deleteStore} = require('../controller/storeController')

const router = require('express').Router();

router.post('/store',createStore)
router.get('/store',getAll)
router.get('/store/:id',getOne)
router.put('/store/:id',UpdateUser)
router.delete('/store/:id',deleteStore)

module.exports = router