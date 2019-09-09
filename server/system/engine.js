// let tables =  require('./tables.js');

//引擎入口
function engineEntry(invigilateTable){
    
}

//请假情况筛选
function specialCaseScreen(teacherTable){
    let teacherScreen =  teacherTable.filter(function(teacherObject, index, array){
        if(teacherObject.teacher_leavestatus == 0){
            return true;
        }else{
            return false;
        }
    })
    return teacherScreen
}

//授课情况筛选
function courseClashScreen(teacherTable, sectionTable, invigilateObject){
    let teacherScreen = teacherTable.filter(function(teacherObject, index, array){
        let mark = true;
        teacherObject.isHaveCourse = '课程不相邻'
        sectionTable.forEach(sectionObject => {
           if(sectionObject.teacher_id.indexOf(teacherObject.teacher_id) > -1){
                if(sectionObject.course_weeks.charAt(invigilateObject.exam_weeks - 1)==='1'){
                    if(invigilateObject.exam_week == sectionObject.course_week){
                        if(invigilateObject.exam_number == sectionObject.course_number){
                            mark = mark && false
                        }else{
                            teacherObject.isHaveCourse = '课程相邻'
                        }
                    }
                }
           }
           mark = mark && true
       })
       
       return mark
    })
    return teacherScreen
}
//已安排监考筛选
function isHaveInvigilateScreen(teacherTable, invigilateObject, invigilateTable){
    let teacherScreen = teacherTable.filter(function(teacherObject, index, array){
        let mark = true
        invigilateTable.forEach(invigilateElement => {
            if([invigilateElement.invigilate_teacher_main,invigilateElement.invigilate_teacher_1, invigilateElement.invigilate_teacher_2, invigilateElement.search_teacher_1 ,invigilateElement.search_teacher_2].indexOf(teacherObject.teacher_id)>-1){
                if(invigilateElement.exam_weeks == invigilateObject.exam_weeks){
                    if(invigilateElement.exam_week == invigilateObject.exam_week){
                        if(invigilateElement.exam_number == invigilateObject.exam_number){
                          console.log(teacherObject.teacher_id, invigilateElement)
                            mark = mark && false
                        }
                    }
                }
            }
            mark = mark && true
       })
       return mark
    })
    return teacherScreen
}

function judgeTeacher(teacherTable, invigilateObject){
    console.log('invigilateObject:', invigilateObject)
    teacherTable.forEach((teacherObject)=>{
        //判断监考地点与偏好地点是否相同
        console.log('teacherObject:', teacherObject)
        if(teacherObject.teacher_prefer_address == invigilateObject.classroom_schoolhouse){
            teacherObject.distance = '近';
        }else{
            teacherObject.distance = '远';
        }
        console.log('teacherObject.teacher_prefer_address:', teacherObject.teacher_prefer_address)
        console.log('invigilateObject.classroom_schoolhouse:',invigilateObject.classroom_schoolhouse)
        //判断监考时间是否符合偏好时间
        let time = '';
        let num = 0;
        if(invigilateObject.exam_number == 1 || invigilateObject.exam_number == 2){
            time += '11'; 
        }else{
            time += '12';
        }
        if(invigilateObject.exam_weeks > 0 && invigilateObject.exam_weeks < 8){
            time += '21';
        }else{
            time += '22';
        }if(invigilateObject.exam_week > 0 && invigilateObject.exam_week < 6){
            time += '31';
        }else{
            time += '32';
        }
        if(time.substring(0,2) == teacherObject.teacher_prefer_time.substring(0,2)){
            num +=1;
        }
        if(time.substring(2,4) == teacherObject.teacher_prefer_time.substring(2,4)){
            num +=1;
        }if(time.substring(4,6) == teacherObject.teacher_prefer_time.substring(4,6)){
            num +=1;
        }
        console.log('time:' ,time);
        console.log('num:' ,num);
        if(num == 3){
            teacherObject.time = '非常合适';
        }else if (num == 0){
            teacherObject.time = '不合适';
        }else{
            teacherObject.time = '合适';
        }

    })
    return teacherTable;
}

// function judgeHistory(historyTables){
//     let sum = 0;
//     let num = 0;
//     let average = 0;
//     historyTables.forEach((historyObject)=>{
//         sum += historyObject.invigilate_sum_number;
//         num += 1;
//     })
//     average = parseInt(sum / num);
//     historyTables.forEach((historyObject)=>{
//         if(historyObject.invigilate_sum_number > average){
//             historyObject.count = '次数过多'
//         }else if(historyObject.invigilate_sum_number < average){
//             historyObject.count = '次数过少'
//         }else {
//             historyObject.count = '次数正常'
//         }
//     })
// }


//是否有相邻课

// function isHaveCourse(invigilateObject, sectionTable, teacherId){
//     let mark = true;
//     sectionTable.forEach((teacherObject) => {
//         if(teacherObject.teacherId.indexOf(teacherId) > -1){
//             if(sectionObject.course_weeks.charAt(invigilateObject.exam_weeks - 1)==='1'){
//                 if(invigilateObject.exam_week == sectionObject.course_week){
//                     mark = true;
//                 }
//             }
//         }
//     })
//     return mark
// }
//计算优先级hash值
//hash计算过程：(isHaveCourse:课程相邻|100) * weight(isHaveCourse|0.3) + (distance:远|10) * weight(distance|0.1) + (time:合适|50) * weight(time|0.1) + (count|2) * weight(count|0.5) = 52
function hash(hashObject, objectValue, weight){
    let sumValue = 0;
    let str = 'hash计算过程：';
    console.log('hashObject:', hashObject)
    console.log('objectValue:', objectValue)
    console.log('weight:', weight)
    for (var i in hashObject){ 
        if(i == 'count'){
            sumValue += weight[i] * hashObject[i]; 
            str = str + '(' + i + '|' + hashObject[i] + ') * weight(' + i + '|'  + weight[i] + ') = ';
        }else{
            sumValue += weight[i] * objectValue[hashObject[i]]; 
            str = str + '(' + i +':'+ hashObject[i] + '|' + objectValue[hashObject[i]] + ') * weight(' + i + '|'  + weight[i] + ') + ';
        }
    }
    str = str + sumValue
    console.log('hash:', sumValue)
    console.log(str)
    return sumValue
}
//公平系统平衡
function fairBalanceScreen(teacherTable, historyTable){
    let weight = {
        count: 0.5,
        isHaveCourse: 0.3,
        distance: 0.1,
        time: 0.1
    }
    let objectValue = {
        课程相邻: 100,
        课程不相邻: 10,
        远: 10,
        近: 100,
        非常合适: 100,
        合适: 50,
        不合适: 10,
    }
    teacherTable.forEach(teacherObject => {
        let hashObject = {
            //isHaveCourse: teacherObject.isHaveCourse,
            isHaveCourse: '课程相邻',
            distance: teacherObject.distance,
            time:teacherObject.time,
        }
        historyTable.forEach((historyObject) => {
            if(historyObject.teacher_id == teacherObject.teacher_id){     
                hashObject.count = historyObject.invigilate_sum_number * 200; 
            }
        })
        teacherObject.hash = hash(hashObject, objectValue, weight);
    })
    teacherTable.sort((a, b)=>{
        return a.hash>b.hash
    })
    console.log()
    return teacherTable
}





//便捷优化筛选器
function convenienceBalanceScreen(){

}



// courseClashScreen(tables.teacherTable, tables.sectionTable, tables.invigilateTable[0]).forEach((e) => {
//     console.log(e)
// })

// let object = {
//     distant: '远',
//     time: '合适'
// }

// let objectValue = {
//         远: 10,
//         近: 100,
//         非常合适: 100,
//         合适: 50,
//         不合适: 10,
// }
// let teacherTable = [
//     {
//         teacher_id: '0',
//         teacher_prefer_address: 0,
//         teacher_prefer_time: '112132'
//     },
//     {
//         teacher_id: '1',
//         teacher_prefer_address: 1,
//         teacher_prefer_time: '122232'
//     },
//     {
//         teacher_id: '2',
//         teacher_prefer_address: 2,
//         teacher_prefer_time: '122231'
//     }
// ]
// let invigilateTable = [
//     {
//         exam_weeks: 4,                      //安排周
//         exam_week: 6,                       //安排星期
//         exam_number: 1,                     //安排节次
//         classroom_schoolhouse: 0,          //所属校区
//     }
//     ,{
//         exam_weeks: 7,                      //安排周
//         exam_week: 4,                       //安排星期
//         exam_number: 4,                     //安排节次
//         classroom_schoolhouse: 0,          //所属校区
//     },{
//         exam_weeks: 2,                      //安排周
//         exam_week: 6,                       //安排星期
//         exam_number: 4,                     //安排节次
//         classroom_schoolhouse: 0,          //所属校区
//     },
// ]
// let historyTable = [
//     {
//         teacher_id: '0',
//         invigilate_sum_number: 3,
//     },{
//         teacher_id: '1',
//         invigilate_sum_number: 2,
//     },{
//         teacher_id: '2',
//         invigilate_sum_number: 4,
//     }
// ]

// invigilateTable.forEach((invigilateObject)=>{
//     console.log('-----------------------------------------------------------')
//     console.log(specialCaseScreen(teacherTable))
//     console.log(courseClashScreen(teacherTable, sectionTable, invigilateObject))
//     console.log(judgeTeacher(teacherTable, invigilateObject))
//     console.log(fairBalanceScreen(teacherTable, historyTable))
// })

exports.algorithm = function(teacherTable, sectionTable, historyTable, invigilateObject, invigilateTable){
    console.log('-----------------------------------------------------------')
    let recommendTeacher = specialCaseScreen(teacherTable);
    console.log('1',recommendTeacher);
    recommendTeacher = courseClashScreen(recommendTeacher, sectionTable, invigilateObject)
    console.log('2',recommendTeacher);
    console.log('-------------------------------3--------------------------')
    // console.log('invigilateTable:',invigilateTable)
    // console.log('invigilateObject:',invigilateObject)
    recommendTeacher = isHaveInvigilateScreen(recommendTeacher, invigilateObject, invigilateTable)
    
    console.log('3',recommendTeacher)
    recommendTeacher = judgeTeacher(recommendTeacher, invigilateObject)
    console.log('4',recommendTeacher)
    recommendTeacher = fairBalanceScreen(recommendTeacher, historyTable)
    console.log('5',recommendTeacher)
    return recommendTeacher
}
