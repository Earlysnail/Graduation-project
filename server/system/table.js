//教务人员信息表
var userTable = [
    
]
// let teacherTable = [
//     {
//         teacher_id: '0',
//         teacher_perfer_address: 0,
//         teacher_perfer_time: '112132'
//     },
//     {
//         teacher_id: '1',
//         teacher_perfer_address: 1,
//         teacher_perfer_time: '122232'
//     },
//     {
//         teacher_id: '2',
//         teacher_perfer_address: 2,
//         teacher_perfer_time: '122231'
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
//教师信息表
var teacherTable = [{                
        id: 0,                          //序号
        teacher_id: '00',                  //教师编号【主键】
        teacher_name: '0',               //教师姓名
        teacher_mail: '0',               //教师邮箱账号
        teacher_sex: '0',                //性别
        teacher_faulty: 0,              //所属系别
        teacher_telephone: 0,           //联系电话
        teacher_leavestatus:0,         //假事情况
        teacher_address: '0',            //教师住址
        teacher_age: 0,                 //年龄
        teacher_perfer_time: '122231',        //偏好时间
        teacher_perfer_address: 0       //偏好地点
    },{                
        id: 1,                          //序号
        teacher_id: '11',                  //教师编号【主键】
        teacher_name: '1',               //教师姓名
        teacher_mail: '1',               //教师邮箱账号
        teacher_sex: '1',                //性别
        teacher_faulty: 1,              //所属系别
        teacher_telephone: 1,           //联系电话
        teacher_leavestatus: 1,         //假事情况
        teacher_address: '1',            //教师住址
        teacher_age: 1,                 //年龄
        teacher_perfer_time: '122132',        //偏好时间
        teacher_perfer_address: 1       //偏好地点
    },{                
        id: 2,                          //序号
        teacher_id: '21',                  //教师编号【主键】
        teacher_name: '2',               //教师姓名
        teacher_mail: '2',               //教师邮箱账号
        teacher_sex: '2',                //性别
        teacher_faulty: 2,              //所属系别
        teacher_telephone: 2,           //联系电话
        teacher_leavestatus: 2,         //假事情况
        teacher_address: '2',            //教师住址
        teacher_age: 2,                 //年龄
        teacher_perfer_time: '112231',        //偏好时间
        teacher_perfer_address: 2       //偏好地点
    },
]

//班级信息表
var classTable = [

]

//教室信息表
var classroomTable = [

]   

//课程信息表
var courseTable = [

]    

//课表信息表
var sectionTable = [
    {
        course_id: 0,                   //课程编号
        course_order: 0,                //课序号
        course_name: '0',               //课程名称
        teacher_name: '00|01|02|03',                //教师姓名
        teacher_id: '00|01|02|03',                  //教师编号
    
        course_weeks: '00010000',                //上课周次
        course_week: 1,                 //上课星期
        course_number: 1,               //上课节次
    
        course_class: '00|01|02|03',            //上课班级
        corse_classrom: 0,              //上课教室
        course_faulty: 0,               //开课院系
        course_capacity: 0,             //课容量
        course_student_number: 0,               //选课人数
        course_duration: 0,             //学时
        course_score: 0,                //学分
        course_sum_number: 0            //持续节次
    },{
        course_id: 1,                   //课程编号
        course_order: 1,                //课序号
        course_name: '1',               //课程名称
        teacher_name: '10|11|12|13',                //教师姓名
        teacher_id: '10|11|12|13',                  //教师编号
    
        course_weeks: '0010',                //上课周次
        course_week: 1,                 //上课星期
        course_number: 1,               //上课节次
    
        course_class: '10|11|12|13',            //上课班级
        corse_classrom: 1,              //上课教室
        course_faulty: 1,               //开课院系
        course_capacity: 1,             //课容量
        course_number: 1,               //选课人数
        course_duration: 1,             //学时
        course_score: 1,                //学分
        course_sum_number: 1            //持续节次
    },{
        course_id: 2,                   //课程编号
        course_order: 2,                //课序号
        course_name: '2',               //课程名称
        teacher_name: '20|21|22|23',                //教师姓名
        teacher_id: '20|21|22|23',                  //教师编号
    
        course_weeks: '0010',                //上课周次
        course_week: 2,                 //上课星期
        course_number: 2,               //上课节次
    
        course_class: '20|21|22|23',            //上课班级
        corse_classrom: 2,              //上课教室
        course_faulty: 2,               //开课院系
        course_capacity: 2,             //课容量
        course_number: 2,               //选课人数
        course_duration: 2,             //学时
        course_score: 2,                //学分
        course_sum_number: 2            //持续节次
    }
]   

//历史记录信息表
var historyTable = [

] 

//监考信息表
var invigilateTable = [{
        course_id: '0',                       //课程编号
        class_id: '0',                        //班级编号
        teacher_id: '0',                      //任课教师编号
        course_name: '0',                      //课程名
        exam_student_number: 0,             //考试人数
        exam_address: '0',                  //安排教室
        exam_content: '0',                  //备注
        exam_again_number: 0,               //重修人数
        exam_weeks: 0,                      //安排周
        exam_week: 0,                       //安排星期
        exam_number: 0,                     //安排节次
        classroom_schoolhouse: 0,          //所属校区
        exam_faulty: 0,                    //开课院系
        exam_begin_time: '0',               //考试开始时间
        exam_end_time: '0',                 //考试结束时
        invigilate_teacher_main: 0,         //主监考教师编号
        invigilate_teacher_1: 0,            //监考教师1编号
        invigilate_teacher_2: 0,            //监考教师2编号
        search_teacher_1: 0,                //巡考教师1编号
        search_teacher_2: 0                 //巡考教师2编号
    },{
        course_id: '1',                       //课程编号
        class_id: '1',                        //班级编号
        teacher_id: '1',                      //任课教师编号
        course_name: '1',                      //课程名
        exam_student_number: 1,             //考试人数
        exam_address: '1',                  //安排教室
        exam_content: '1',                  //备注
        exam_again_number: 1,               //重修人数
        exam_weeks: 1,                      //安排周
        exam_week: 1,                       //安排星期
        exam_number: 1,                     //安排节次
        classroom_schoolhouse: 1,          //所属校区
        exam_faulty: 1,                    //开课院系
        exam_begin_time: '1',               //考试开始时间
        exam_end_time: '1',                 //考试结束时
        invigilate_teacher_main: 1,         //主监考教师编号
        invigilate_teacher_1: 1,            //监考教师1编号
        invigilate_teacher_2: 1,            //监考教师2编号
        search_teacher_1: 1,                //巡考教师1编号
        search_teacher_2: 1                 //巡考教师2编号
    },{
        course_id: '2',                       //课程编号
        class_id: '2',                        //班级编号
        teacher_id: '2',                      //任课教师编号
        course_name: '2',                      //课程名
        exam_student_number: 2,             //考试人数
        exam_address: '2',                  //安排教室
        exam_content: '2',                  //备注
        exam_again_number: 2,               //重修人数
        exam_weeks: 2,                      //安排周
        exam_week: 2,                       //安排星期
        exam_number: 2,                     //安排节次
        classroom_schoolhouse: 2,          //所属校区
        exam_faulty: 2,                    //开课院系
        exam_begin_time: '2',               //考试开始时间
        exam_end_time: '2',                 //考试结束时
        invigilate_teacher_main: 2,         //主监考教师编号
        invigilate_teacher_1: 2,            //监考教师1编号
        invigilate_teacher_2: 2,            //监考教师2编号
        search_teacher_1: 2,                //巡考教师1编号
        search_teacher_2: 2                 //巡考教师2编号
    },
]       

//总表
var summaryTable  = [

]

module.exports = {
    userTable,              //教务人员信息
    teacherTable,           //教师信息
    classTable,             //班级信息
    classroomTable,         //教室信息
    courseTable,            //课程信息
    sectionTable,           //课表信息
    historyTable,           //历史记录信息
    invigilateTable,        //监考信息
    summaryTable           //总表
}