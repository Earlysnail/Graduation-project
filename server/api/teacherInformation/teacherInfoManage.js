const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')




router.post('/home/teacherInformation/teacherInfoManage',(req, res)=>{
    var data = JSON.parse(req.body.tableData);
    console.log(data);
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    connection.query('INSERT INTO teachertable(teacher_id, teacher_name, teacher_email, teacher_sex, teacher_faulty, teacher_telephone, teacher_leavestatus, teacher_address, teacher_age, teacher_prefer_time, teacher_prefer_address) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [data.teacher_id, data.teacher_name, data.teacher_email, data.teacher_sex, data.teacher_faulty, data.teacher_telephone, data.teacher_leavestatus, data.teacher_address, data.teacher_age, data.teacher_prefer_time, data.teacher_prefer_address], function (error, result) {
        if (error) {
            console.log(error);
            return
        }
        console.log('--------------------------INSERT----------------------------');      
        console.log('INSERT ID:',result);        
        console.log('-----------------------------------------------------------------\n\n'); 
          });
    connection.query('INSERT INTO historytable(teacher_id, invigilate_sum_number, invigilate_number_main, invigilate_number_vice, searche_number, invigilate_scale_big, invigilate_scale_middle, invigilate_scale_small ) VALUES(?, ?, ?, ?, ?, ?, ?, ?) ', [data.teacher_id, 0, 0, 0, 0, 0, 0, 0], function (error, result) {
    if (error) {
        console.log(error);
        return
    }
    console.log('--------------------------INSERT----------------------------');      
    console.log('INSERT ID:',result);        
    console.log('-----------------------------------------------------------------\n\n'); 
    res.send('ok')
        });
    connection.end()
})
    

module.exports = router

