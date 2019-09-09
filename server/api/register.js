const express = require('express')
const router = express.Router()
const P = require('../mysql/index')


router.post('/register', (req, res) => {
  var data = req.body;
  const connection = P.mysql.createConnection(P.config.mysqldb)
  connection.connect()
  connection.query('SELECT * FROM `usertable` where `user_name`=?', [data.user_name], function (error, results) {
    if (error) {
      console.log(error);
    }
    if (results.length > 0) {
      console.log("user had existed");
    } else {
      data.user_password = P.bcrypt.hashSync(data.user_password, P.bcrypt.genSaltSync(10))
      console.log(data.user_password)
      connection.query('INSERT INTO usertable (user_name, user_password, user_email, user_right) VALUES (?,?,?,?)', [data.user_name, data.user_password, data.user_email, data.user_right], function (error, results) {
        if (error) {
          console.log(error.message);
          return
        } else {
          res.send({
              status:'success',
              id:results.insertId,
              username:data.user_name
          })
        }
        connection.end()
      });
    }
  });

})

module.exports = router;
