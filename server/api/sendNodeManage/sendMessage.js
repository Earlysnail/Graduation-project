const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')
const email = require('../../email.js')

const weeks = [
  '0','周一','周二','周三','周四','周五','周六','周日',
]

router.post('/home/sendNodeManage/sendMessage', (req, res) => {
  var data = JSON.parse(req.body.tableData);
  console.log(data);
  email.sendEmail(data.to, data.subject, data.html, (res) => {
      console.log(res);
  })


})

router.get('/home/sendNodeManage/sendMessage', (req, res) => {
  let showTeacherTable = []
  const connection = P.mysql.createConnection(P.config.mysqldb)
  connection.connect()
  connection.query('SELECT * from teachertable',function (error, teacherTable) {
    if (error) {
      console.log(error);      
      return
    }
    console.log("teacherTable000:", teacherTable)
    connection.query('SELECT * from invigilatetable WHERE isHaveFinish = ? and isHaveFile = ?',[1, 0] ,function (error, invigilateTable) {
      if (error) {
        console.log(error);
        return
      }
      console.log("invigilateTable000:", invigilateTable)
      invigilateTable.forEach((invigilateObject)=> {
        teacherTable.forEach((teacherObject)=>{
          if(teacherObject.teacher_id == invigilateObject.invigilate_teacher_main){
            console.log("invigilate_teacher_main:",invigilateObject.invigilate_teacher_main)
            let message = {
              name: '',
              email: '',
              content: ''
            }
            message.name = teacherObject.teacher_name;
            message.email = teacherObject.teacher_email;
            message.content = '时间：' +'第' + invigilateObject.exam_weeks +'周-' + weeks[invigilateObject.exam_week] +'-第' + invigilateObject.exam_number + '节;地点：' + invigilateObject.exam_address + ';任主监考.';
            console.log("message:",message)
            showTeacherTable.push(message);
            console.log("showTeacherTable:",showTeacherTable)
          }
          if(teacherObject.teacher_id == invigilateObject.invigilate_teacher_1 || teacherObject == invigilateObject.invigilate_teacher_2){
            let message = {
              name: '',
              email: '',
              content: ''
            }
            message.name = teacherObject.teacher_name;
            message.email = teacherObject.teacher_email;
            message.content = '时间：' +'第' + invigilateObject.exam_weeks +'周-' + weeks[invigilateObject.exam_week] +'-第' + invigilateObject.exam_number + '节;地点：' + invigilateObject.exam_address + ';任副监考.';
            showTeacherTable.push(message);
          }
           if(teacherObject.teacher_id == invigilateObject.search_teacher_1 || teacherObject == invigilateObject.search_teacher_2){
            let message = {
              name: '',
              email: '',
              content: ''
            }
            message.name = teacherObject.teacher_name;
            message.email = teacherObject.teacher_email;
            message.content = '时间：' +'第' + invigilateObject.exam_weeks +'周-' + weeks[invigilateObject.exam_week] +'-第' + invigilateObject.exam_number + '节;地点：' + invigilateObject.exam_address + ';任巡考.';
            console.log("message:",message)
            showTeacherTable.push(message);
            console.log("showTeacherTable:",showTeacherTable)
          }
        })
      })
      console.log("showTeacherTable:",showTeacherTable)
      res.send(showTeacherTable)
      connection.end();
    });
  });
 
 
});


module.exports = router
