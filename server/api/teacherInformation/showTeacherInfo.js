const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')


router.get('/home/teacherInformation/showTeacherInfo',(req, res) => {
  const connection = P.mysql.createConnection(P.config.mysqldb)
  connection.connect()

  connection.query('SELECT * from teachertable ', function (error, result) {
      if (error) {
          console.log(error);
          return
      }
      console.log(result)
      res.send(result)
  });
  connection.end();
});

router.post('/home/teacherInformation/showTeacherInfo:delete',(req, res) => {
  var teacher_id = JSON.parse(req.body.teacher_id);
    console.log(teacher_id);
  const connection = P.mysql.createConnection(P.config.mysqldb)
  connection.connect()

  connection.query('DELETE  from teachertable WHERE teacher_id = ?',teacher_id, function (error, result) {
      if (error) {
          console.log(error);
          return
      }
      console.log(result)
      res.send(result)
  });
  connection.end();
});

module.exports = router