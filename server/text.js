var tableData = [{
    id: 46,
    course_id: '1003100810',
    course_order: '01',
    course_name: '嵌入式系统',
    teacher_name: '97030648【马永军 *】,97721319【张中伟 】',
    course_weeks: '3-16周',
    course_week: 3,
    course_number: 117,
    course_class: '151013 151014 151011 151012',
    course_address: '泰达西院8-311(d)',
    course_faulty: '计算机学院',
    course_capacity: 117,
    course_duration: 40,
    course_score: 2.5,
    course_sum_number: 2,
    editeFlag: false
  },
  {
    id: 47,
    course_id: '1003150410',
    course_order: '01',
    course_name: '数据库原理',
    teacher_name: '96410778【宋志卿 *】,97310940【王希雷 】',
    course_weeks: '1-16周',
    course_week: 3,
    course_number: 112,
    course_class: '161024 161021 161022 161023',
    course_address: '泰达西院8-5阶梯(d)',
    course_faulty: '计算机学院',
    course_capacity: 255,
    course_duration: 64,
    course_score: 4,
    course_sum_number: 2,
    editeFlag: false
  },
  {
    id: 48,
    course_id: '1003150410',
    course_order: '01',
    course_name: '数据库原理',
    teacher_name: '96410778【宋志卿 *】,97310940【王希雷 】',
    course_weeks: '1-16周',
    course_week: 1,
    course_number: 112,
    course_class: '161024 161021 161022 161023',
    course_address: '泰达西院8-5阶梯(d)',
    course_faulty: '计算机学院',
    course_capacity: 255,
    course_duration: 64,
    course_score: 4,
    course_sum_number: 2,
    editeFlag: false
  },
  {
    id: 237,
    course_id: 'Y100600310',
    course_order: '02',
    course_name: '大学生学习规划',
    teacher_name: '98222281【陈亚瑞 *】',
    course_weeks: '6-9周',
    course_week: 4,
    course_number: 30,
    course_class: '181043',
    course_address: '泰达西院11-302(d)',
    course_faulty: '计算机学院',
    course_capacity: 35,
    course_duration: 16,
    course_score: 1,
    course_sum_number: 2,
    editeFlag: false
  },
  {
    id: 238,
    course_id: 'Y100600310',
    course_order: '02',
    course_name: '大学生学习规划',
    teacher_name: '【陈亚瑞 *】',
    course_weeks: '6-9周',
    course_week: 2,
    course_number: 30,
    course_class: '181043',
    course_address: '泰达西院11-302(d)',
    course_faulty: '计算机学院',
    course_capacity: 35,
    course_duration: 16,
    course_score: 1,
    course_sum_number: 2,
    editeFlag: false
  },
  {
    id: 239,
    course_id: 'Y100600410',
    course_order: '01',
    course_name: '物联网应用及其发展趋势',
    teacher_name: '98413435【胡志强 *】',
    course_weeks: '6-9周单',
    course_week: 3,
    course_number: 27,
    course_class: '181044',
    course_address: '泰达11-306(d)',
    course_faulty: '计算机学院',
    course_capacity: 35,
    course_duration: 16,
    course_score: 1,
    course_sum_number: 2,
    editeFlag: false
  },
  {
    id: 240,
    course_id: 'Y100600410',
    course_order: '01',
    course_name: '物联网应用及其发展趋势',
    teacher_name: '98413435【胡志强 *】,98413435【胡志强 *】',
    course_weeks: '6-9周双',
    course_week: 1,
    course_number: 27,
    course_class: '181044',
    course_address: '泰达西院11-210(d)',
    course_faulty: '计算机学院',
    course_capacity: 35,
    course_duration: 16,
    course_score: 1,
    course_sum_number: 2,
    editeFlag: false
  },
]

var newTableData = [];
tableData.forEach((element) => {
    var obj = {};
    var array = [];
    var str = "";
    //格式化课程号
    obj.course_order = Number(element.course_order);
    //格式化上课班级
    array = element.course_class.split(' ');
    array.forEach((e, key)=>{
      array[key] = e.replace(/[^0-9]/ig,"");
    })
    obj.course_class = array.join('|');
    //格式化教师名
    array = element.teacher_name.split(',');
    array.forEach((e, key)=>{
      array[key] = e.replace(/[^0-9]/ig,"");
    })
    obj.teacher_id = array.join('|');
    //格式化教师编号
    array = element.teacher_name.split(',');
    array.forEach((e, key)=>{
        var reg = /[\u4e00-\u9fa5]/g;
        array[key] = e.match(reg).join("");
    })
    obj.teacher_name = array.join('|');
    //格式化上课地点
   
    str = element.course_address;
     if(str.indexOf('泰达西院', 0) != -1){
      obj.classroom_schoolhouse = 3;
    }else if(str.indexOf('泰达', 0) != -1){
      obj.classroom_schoolhouse = 2;
    }else if(str.indexOf('河西', 0) != -1){
      obj.classroom_schoolhouse = 1;
    }

    obj.course_building = Number(str.match(/(\w+)/g)[0]);
    obj.course_classroom = Number(str.match(/(\w+)/g)[1]);

    //格式化上课周
    str = element.course_weeks
    var weeks = '00000000000000000000000000';
    array = weeks.split('');
    var beginNum = Number(str.match(/(\w+)/g)[0]);
    var endNum = Number(str.match(/(\w+)/g)[1]);
    for(var i = beginNum; i <= endNum; i++){
      if(str.indexOf('双') != -1){
        if(i % 2 == 0){array[i] = '1';};
      }else if(str.indexOf('单') != -1){
        if(i % 2 == 1){array[i] = '1'};
      }else{
        array[i] = '1';
      }
    };
    obj.course_weeks = array.join('');

    obj.course_id = element.course_id;
    obj.course_name = element.course_name;
    obj.course_week = element.course_week;
    obj.course_number = element.course_number;
    obj.course_address = element.course_address;
    obj.course_faulty = element.course_faulty;
    obj.course_capacity = element.course_capacity;
    obj.course_student_number = element.course_student_number;
    obj.course_duration = element.course_duration;
    obj.course_score = element.course_score;
    obj.course_sum_number = element.course_sum_number;


    newTableData.push(obj);
})
//console.log(newTableData);




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
let teacherTable = [
  {
    teacher_id : '0',
  },{
    teacher_id : '1',
  },{
    teacher_id : '2',
  },{
    teacher_id : '3',
  },{
    teacher_id : '4',
  },{
    teacher_id : '5',
  },{
    teacher_id : '6',
  },{
    teacher_id : '7',
  }

]
let invigilateObject = {
  exam_weeks: 10,
  exam_week: 2,
  exam_number: 1 
}
let invigilateTable = [
  {
    exam_weeks: 10,
    exam_week: 2,
    exam_number: 1,
    invigilate_teacher_main: '0',
    invigilate_teacher_1: '1', 
    invigilate_teacher_2:'3', 
    search_teacher_1: '1', 
    search_teacher_2: '4',
  },
  {
    exam_weeks: 11,
    exam_week: 3,
    exam_number: 3,
    invigilate_teacher_main: '2',
    invigilate_teacher_1: '3', 
    invigilate_teacher_2:'1', 
    search_teacher_1: '4', 
    search_teacher_2: '5',
  },
  {
    exam_weeks: 4,
    exam_week: 1,
    exam_number: 2,
    invigilate_teacher_main: '5',
    invigilate_teacher_1: '3', 
    invigilate_teacher_2:'3', 
    search_teacher_1: '2', 
    search_teacher_2: '5',
  },
  {
    exam_weeks: 5,
    exam_week: 3,
    exam_number: 3,
    invigilate_teacher_main: '1',
    invigilate_teacher_1: '2', 
    invigilate_teacher_2:'3', 
    search_teacher_1: '5', 
    search_teacher_2: '6',
  }
]
console.log(isHaveInvigilateScreen(teacherTable, invigilateObject, invigilateTable));
