const express = require('express')
const router = express.Router()
const P = require('../mysql/index')


router.post('/course', (req, res) => {
  var data = req.body;
  const connection = P.mysql.createConnection(P.config.mysqldb)
  connection.connect()
  connection.query('SELECT * FROM `course` where `user_name`=?', [data.username], function (error, results) {
    if (error) {
      console.log(error);
    }
    if (results.length > 0) {
      console.log("user had existed");
    } else {
      data.password = P.bcrypt.hashSync(data.password, P.bcrypt.genSaltSync(10))
      console.log(data.password)
      connection.query('INSERT INTO user (user_name, pass_word) VALUES (?,?)', [data.username, data.password], function (error, results) {
        if (error) {
          console.log(error.message);
          return
        } else {
          console.log(results)
          res.send({
              status:'success',
              id:results.insertId,
              username:data.username
          })
        }
        connection.end()
      });
    }
  });

})

module.exports = router;
