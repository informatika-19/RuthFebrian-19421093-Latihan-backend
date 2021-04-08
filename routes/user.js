const router = require('express').Router()
const userContrroller = require('../controller/user')
router.post('/register', (req,res)=>{
    userContrroller.register(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
})

        
module.exports=router