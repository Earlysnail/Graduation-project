const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const P = require('../mysql/index')


const creatToken = (id, username) => {
  return jwt.sign({
      id: id,
      username: username
    },
    P.config.JWTs.secret,{
      expiresIn: P.config.JWTs.expiresIn
    }
  )
}


router
  .get('/login', (req, res) => {
    res.send('hello world!')
  })
  .post('/login', (req, res) => {
    console.log(P.config.mysqldb)
    var data = req.body; 
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    connection.query('SELECT * FROM `usertable` where `user_name`=?', [data.username], function (error, results) {
      if (error) {
        console.log(error);
        return
      }
      if (results.length === 0) {
        console.log("no user")
        return
      }
      if (P.bcrypt.compareSync(data.password, results[0].user_password)) {
        console.log('login success')
        console.log(results)
        var token = creatToken(results.id,results.user_name)
        res.send({
          id:results[0].id,
          username:results[0].user_name,
          token:token
        })
      } else {
        console.log("password fault")
        res.status(401).send("login fail")
      }
  
    });

    connection.end()
  })

module.exports = router
