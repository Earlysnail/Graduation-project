const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')




router.post('/home/teacherCourse/sectionOperator',(req,res)=>{
    var data = JSON.parse(req.body.tableData);
    console.log(data);
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    data.forEach(element => {
        connection.query('INSERT INTO sectionTable(course_id, course_order, course_name, teacher_name, teacher_id, course_weeks, course_week, course_number, course_class, course_address, classroom_schoolhouse, classroom_building, course_classroom, course_faulty, course_capacity, course_student_number,course_duration, course_score, course_sum_number) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.course_id, element.course_order, element.course_name, element.teacher_name, element.teacher_id, element.course_weeks, element.course_week, element.course_number, element.course_class, element.course_address, element.classroom_schoolhouse, element.classroom_building, element.course_classroom, element.course_faulty, element.course_capacity, element.course_student_number, element.course_duration, element.course_score, element.course_sum_number], function (error, result) {
            if (error) {
              console.log(error);
              return
            }
            console.log('--------------------------INSERT----------------------------');      
            console.log('INSERT ID:',result);        
            console.log('-----------------------------------------------------------------\n\n'); 
      
        
          });
    });
    connection.end()
})

router.get('/home/teacherCourse/sectionOperator',(req,res)=>{
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()

    connection.query('SELECT * from sectionTable ', function (error, result) {
        if (error) {
            console.log(error);
            return
        }
        console.log('--------------------------select----------------------------');      
        console.log('select :',result);        
        console.log('-----------------------------------------------------------------\n\n'); 
    });
    connection.end();
});
    

module.exports = router

