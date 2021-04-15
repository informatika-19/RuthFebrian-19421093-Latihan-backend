const router = require('express').Router()
const userContrroller = require('../controller/user')
router.post('/register', (req,res)=>{
    userContrroller.register(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
})
router.post('/register', (req,res)=>{
    userContrroller.register(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
})
router.post('/login', (req,res)=>{
    let username = req.body.username
    let password = req.body.password
    userContrroller.login(username, password)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
})

        
module.exports=router