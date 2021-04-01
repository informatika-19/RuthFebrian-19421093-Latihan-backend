const express = require('express')
const app = express()
const bodyParser = require('body-parser')
 
app.use(bodyParser.json({
    extends: true, 
    limit: '20mb'
}))
app.use(bodyParser.urlencoded({
    extends: true, 
    limit: '20mb'
}))

app.get('/profile/:username/:id', (req, res) => {
    console.log(req.params)
  res.send('Username Anda' + req.params.username)
})
app.get('/', (req, res) => {
  res.send('Hello Word')
})
app.get('/daerah/:namadaerah/:id', (req, res) => {
    console.log(req.params)
    const namaDaerah = reg.params.namadaerah
    const idDaerah = reg.params.id
  res.send('Anda Di ' + namadaerah + ' ID Daerah = ' + idDaerah)
})
app.post ('/register',(req, res) =>{
    console.log(req.body)
    res.json(req.body)
})

 
app.listen(4000,(req,res) => {
    console.log('Server Started')
})
