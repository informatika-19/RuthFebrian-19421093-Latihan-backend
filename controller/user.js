const userModel = require('../model/user')
const bcrypt=require('bcrypt')
exports.register = (data) =>
new Promise((resolve, reject) =>{
    userModel.findOne({
        username: data.username
    }).then((user) =>{
        if(user){
            resolve({
                status :false,
                pesan:'username telah terdaftar'
            })
        }else{
            bcrypt.hash(data.password, 10, (err, hash) => {
            data.password = hash
                userModel.create(data).then(() =>{
                    //console.log ('berhasil insert')
                    resolve({
                        status: true,
                        pesan:'berhasil insert data user'
                    })
                    
                    }).catch((e)=>{
                        reject({
                            status: false,
                            pesan:'gagal insert data user'
                    
                        //console.log(e)
                        //console.log('gagal insert')
                    }) 
                    })
            })
        }
    })


})