const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')


router.get('/home/invigilateExam/showInvigilateExamTable:finish',(req,res)=>{
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()

    connection.query('SELECT * from invigilatetable WHERE isHaveFinish = ?', [1], function (error, result) {
        if (error) {
            console.log(error);
            return
        }
        console.log('--------------------------select----------------------------');       
        console.log('select :',result);        
        console.log('-----------------------------------------------------------------\n\n'); 
        res.send(result)
    });
    connection.end();
});
    
router.post('/home/invigilateExam/showInvigilateExamTable',(req,res)=>{
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    connection.query(' DELETE from invigilatetable ', function (error, result) {
    if (error) {
        console.log(error);
        return
    }
    res.send(result)
    });
    connection.end()
})

router.post('/home/invigilateExam/showInvigilateExamTable:file',(req,res)=>{
    var data = JSON.parse(req.body.invigilateObject);
    console.log('file',data);
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    
    // connection.query('UPDATE invigilatetable SET isHaveFile = ? WHERE course_id = ? and class_id = ?',[1, data.course_id, data.class_id], function (error, result) {
    // if (error) {
    //     console.log(error);
    //     return
    // }
    
    // res.send(result)
    // });
    connection.query(' DELETE from invigilatetable WHERE course_id = ? and class_id = ?',[ data.course_id, data.class_id], function (error, result) {
        if (error) {
            console.log(error);
            return
        }
        connection.query('INSERT INTO historyInvigilatetable(course_id, class_id, course_name,  teacher_id, exam_address, exam_content, exam_student_number, exam_again_number, classroom_schoolhouse, exam_faulty,  exam_weeks, exam_week, exam_number, exam_begin_time, exam_end_time,  invigilate_teacher_main, invigilate_teacher_1, invigilate_teacher_2, search_teacher_1, search_teacher_2, isHaveFinish , isHaveFile) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)',[data.course_id,data.class_id, data.course_name, data.teacher_id, data.exam_address, data.exam_content, data.exam_student_number, data.exam_again_number, data.classroom_schoolhouse, data.exam_faulty, data.exam_weeks, data.exam_week, data.exam_number, data.exam_begin_time, data.exam_end_time, data.invigilate_teacher_main, data.invigilate_teacher_1, data.invigilate_teacher_2, data.search_teacher_1, data.search_teacher_2, data.isHaveFinish, data.isHaveFile] , function (error, result1) {
            if (error) {
                console.log(error);
                return
            }
            
            res.send(result1)
            connection.end()
            });
        });
})


router.post('/home/invigilateExam/showInvigilateExamTable/toUnfinish',(req,res)=>{
    var data = JSON.parse(req.body.invigilateObject);
    console.log('toUnfinish',data);
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    
    connection.query('UPDATE invigilatetable SET isHaveFinish = ? WHERE course_id = ? and class_id = ?',[0, data.course_id, data.class_id], function (error, result) {
    if (error) {
        console.log(error);
        return
    }
    
    res.send(result)
    });

    connection.end()
})


module.exports = router

