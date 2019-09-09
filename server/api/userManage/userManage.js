const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')




router.post('/home/userManage/userManage', (req, res) => {
  var data = JSON.parse(req.body.tableData);
  console.log(data);
  const connection = P.mysql.createConnection(P.config.mysqldb)
  connection.connect()
  connection.query('INSERT INTO usertable(user_name, user_email, user_password, user_right) VALUES(?, ?, ?, ?)', [data.user_name, data.user_email, data.user_password, data.user_right], function (error, result) {
    if (error) {
      console.log(error);
      return
    }
    console.log('--------------------------INSERT----------------------------');
    console.log('INSERT ID:', result);
    console.log('-----------------------------------------------------------------\n\n');


  });
  connection.end()
})

router.get('/home/userManage/userManage', (req, res) => {
  const connection = P.mysql.createConnection(P.config.mysqldb)
  connection.connect()

  connection.query('SELECT * from usertable ', function (error, result) {
    if (error) {
      console.log(error);
      return
    }
    res.send(result)
  });
  connection.end();
});


module.exports = router
