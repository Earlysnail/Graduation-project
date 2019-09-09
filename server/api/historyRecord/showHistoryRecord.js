const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')


router.get('/home/historyRecord/showHistoryRecord',(req,res)=>{
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()

    connection.query('SELECT * from historytable ', function (error, result) {
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
    

module.exports = router

