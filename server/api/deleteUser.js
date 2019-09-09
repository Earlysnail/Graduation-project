const express = require('express')
const router = express.Router()
const P = require('../mysql/index')



router
  .post('/delete', (req, res) => {
    console.log(P.config.mysqldb)
    var data = req.body;
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    connection.query('DELETE FROM `usertable` where `user_name`=?', [data.user_name], function(error, results) {
        if(error){
            console.log(error);
            res.send("delete fail!")
        } else if (results.length === 0) {
            console.log("no user")
            res.send("no user!")
            return
        }else{
           res.send("delete success!")
        }
    })
    connection.end()
  })

module.exports = router
