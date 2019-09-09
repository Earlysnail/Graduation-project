const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')


// router.get('/home/historyRecord/historyInvigilateTable',(req,res)=>{
//     const connection = P.mysql.createConnection(P.config.mysqldb)
//     connection.connect()

//     connection.query('SELECT * from invigilatetable WHERE isHaveFile = ?', [1], function (error, result) {
//         if (error) {
//             console.log(error);
//             return
//         }
//         console.log('--------------------------select----------------------------');       
//         console.log('select :',result);        
//         console.log('-----------------------------------------------------------------\n\n'); 
//         res.send(result)
//     });
//     connection.end();
// });


router.get('/home/historyRecord/historyInvigilateTable',(req,res)=>{
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()

    connection.query('SELECT * from HistoryInvigilatetable', function (error, result) {
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

// router.post('/home/historyRecord/historyInvigilateTable/clear',(req,res)=>{
//     const connection = P.mysql.createConnection(P.config.mysqldb)
//     connection.connect()
    
//     connection.query('UPDATE invigilatetable SET isHaveFile = ? ',[0], function (error, result) {
//     if (error) {
//         console.log(error);
//         return
//     }
    
//     res.send(result)
//     });

//     connection.end()
// })
router.post('/home/historyRecord/historyInvigilateTable/clear',(req,res)=>{
    const connection = P.mysql.createConnection(P.config.mysqldb)
    connection.connect()
    
    connection.query('DELETE from historyInvigilatetable ', function (error, result) {
    if (error) {
        console.log(error);
        return
    }
    
    res.send(result)
    });

    connection.end()
})
module.exports = router

