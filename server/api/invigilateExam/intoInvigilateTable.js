const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')


router.post('/home/invigilateExam/intoInvigilateTable',(req,res)=>{
    var data = JSON.parse(req.body.tableData);
    console.log(data);
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    data.forEach(element => {
        connection.query('INSERT INTO invigilatetable(course_id, class_id, course_name,  teacher_id, exam_address, exam_content, exam_student_number, exam_again_number, classroom_schoolhouse, exam_faulty,  exam_weeks, exam_week, exam_number, exam_begin_time, exam_end_time,  invigilate_teacher_main, invigilate_teacher_1, invigilate_teacher_2, search_teacher_1, search_teacher_2) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',[element.course_id,element.class_id, element.course_name, element.teacher_id, element.exam_address, element.exam_content, element.exam_student_number, element.exam_again_number, element.classroom_schoolhouse, element.exam_faulty, element.exam_weeks, element.exam_week, element.exam_number, element.exam_begin_time, element.exam_end_time, element.invigilate_teacher_main, element.invigilate_teacher_1, element.invigilate_teacher_2, element.search_teacher_1, element.search_teacher_2] ,function (error, result) {
            if (error) {
              console.log(error);
              return
            }
            console.log('--------------------------INSERT----------------------------');
            //console.log('INSERT ID:',result.insertId);        
            console.log('INSERT ID:',result);        
            console.log('-----------------------------------------------------------------\n\n'); 
      
        
          });
    });
    connection.end()
})

router.get('/home/invigilateExam/intoInvigilateTable',(req,res)=>{
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()

    connection.query('SELECT * from invigilatetable ', function (error, result) {
        if (error) {
            console.log(error);
            return
        }
        console.log('--------------------------select----------------------------');
        //console.log('select :',result.insertId);        
        console.log('select :',result);        
        console.log('-----------------------------------------------------------------\n\n'); 
    });
    connection.end();
});
    

module.exports = router

