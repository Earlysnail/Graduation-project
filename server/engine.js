const express = require('express')
const P = require('./mysql/index')
const algorithm = require('./system/engine.js')
var teacherTable = [];
var sectionTable = [];
var historyTable = [];
var invigilateTable = [];



exports.engine = function(invigilateObject){
    let recommendTeacher = []
    const connection = P.mysql.createConnection(P.config.mysqldb)
connection.connect()
connection.query('SELECT * from teachertable ', function (error, result) {
    if (error) {
        console.log(error);
        return
    }
    console.log("-------------------------teacherTable--------------------------------------")
    console.log("teacherTable:", result)
    console.log("-------------------------teacherTable--------------------------------------")
    teacherTable = result
    connection.query(' SELECT * from sectiontable ', function (error, result1) {
        if (error) {
            console.log(error);
            return
        }
        console.log("-------------------------sectionTable--------------------------------------")
        console.log("sectionTable:", result1)
        console.log("-------------------------sectionTable--------------------------------------")
        sectionTable = result1
        connection.query(' SELECT * from historytable ', function (error, result2) {
            if (error) {
                console.log(error);
                return
            }
            console.log("-------------------------historyTable--------------------------------------")
            console.log("historyTable:", result2)
            console.log("-------------------------historyTable--------------------------------------")
            historyTable = result2
            connection.query(' SELECT * from invigilatetable WHERE isHaveFile = ? and isHaveFinish = ?', [0,1] , function (error, result3) {
                if (error) {
                    console.log(error);
                    return
                }
                console.log("-------------------------invigilateTable--------------------------------------")
                console.log("invigilateTable:", result3)
                console.log("-------------------------invigilateTable--------------------------------------")
                invigilateTable = result3
            });
            
        });
    });
});
    recommendTeacher = algorithm.algorithm(teacherTable, sectionTable, historyTable, invigilateObject, invigilateTable);
    return recommendTeacher
}




