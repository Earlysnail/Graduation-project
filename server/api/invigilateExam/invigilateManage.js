const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')
const engine = require('../../engine.js')


router.get('/home/invigilateExam/invigilateManage:unfinish',(req,res)=>{
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    connection.query('SELECT * from invigilatetable WHERE isHaveFinish = ?',[0], function (error, result) {
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
router.get('/home/invigilateExam/invigilateManage/teacher',(req,res)=>{
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    connection.query('SELECT * from teachertable', function (error, result) {
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

router.post('/home/invigilateExam/invigilateManage',(req,res)=>{
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

router.post('/home/invigilateExam/invigilateManage:finish',(req,res)=>{
    let data = JSON.parse(req.body.tableData);
    console.log(data);
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    data.forEach(element => {
        connection.query('UPDATE invigilatetable SET isHaveFinish = ?, invigilate_teacher_main = ?, invigilate_teacher_1 = ?, invigilate_teacher_2 = ?, search_teacher_1 = ?, search_teacher_2 = ? WHERE course_id = ? and class_id = ?',[1, element.invigilate_teacher_main, element.invigilate_teacher_1, element.invigilate_teacher_2, element.search_teacher_1, element.search_teacher_2, element.course_id, element.class_id],function (error, result) {
            if (error) {
              console.log(error);
              return
            }       
          });
    });
    console.log("222222222222222222222222222222222222222222222222222")
    
    data.forEach(element => {
        connection.query(
            'UPDATE historytable SET invigilate_sum_number = invigilate_sum_number + 1, invigilate_number_main = invigilate_number_main + 1 WHERE teacher_id = ?;',      [element.invigilate_teacher_main],function (error, result) {
            if (error) {
              console.log(error);
              return
            }       
          });
          connection.query(
            'UPDATE historytable SET invigilate_sum_number = invigilate_sum_number + 1, invigilate_number_vice = invigilate_number_vice + 1 WHERE teacher_id = ?',[element.invigilate_teacher_1],function (error, result) {
            if (error) {
              console.log(error);
              return
            }       
          });
          connection.query(
            'UPDATE historytable SET invigilate_sum_number = invigilate_sum_number + 1, invigilate_number_vice = invigilate_number_vice + 1 WHERE teacher_id = ?',      [element.invigilate_teacher_2],function (error, result) {
            if (error) {
              console.log(error);
              return
            }       
          });
          connection.query(
            'UPDATE historytable SET invigilate_sum_number = invigilate_sum_number + 1,         searche_number = searche_number + 1 WHERE teacher_id = ?',
            [element.search_teacher_1],function (error, result) {
            if (error) {
              console.log(error);
              return
            }       
          });
          connection.query(
            'UPDATE historytable SET invigilate_sum_number = invigilate_sum_number + 1,         searche_number = searche_number + 1 WHERE teacher_id = ?', 
            [element.search_teacher_2],function (error, result) {
            if (error) {
              console.log(error);
              return
            }       
          });
    });
    console.log("222222222222222222222222222222222222222222222222222")
    connection.end()
})

router.post('/home/engine/section',(req,res)=>{
    let data = JSON.parse(req.body.tableData);
    console.log('ssssss',data);
    let recommendTeacher = engine.engine(data);
    console.log('recommendTeacher1223221',engine.engine(data));
    res.send(engine.engine(data))
})
module.exports = router

