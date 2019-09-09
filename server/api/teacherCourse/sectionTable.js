const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')


router.get('/home/teacherCourse/sectionTable',(req,res)=>{
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()

    connection.query('SELECT * from sectiontable ', function (error, result) {
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
router.post('/home/teacherCourse/sectionTable',(req,res)=>{
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    connection.query(' DELETE from sectiontable ', function (error, result) {
    if (error) {
        console.log(error);
        return
    }
    res.send(result)
    });
    connection.end()
})
module.exports = router

