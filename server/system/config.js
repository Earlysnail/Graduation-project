//监考信息  
var invigilateObject = {
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
}

//	教务人员信息
var userObject = {          
    id: 0,                  //序号
    user_id: 0,             //管理员编号【主键】
    user_account: 0,        //管理员邮箱账号
    user_password: 0,       //密码
    user_name: '0',          //管理员姓名
    user_right: 0           //管理员权限
}

//  教师信息
var teacherObject = {                
    id: 0,                          //序号
    teacher_id: '0',                  //教师编号【主键】
    teacher_name: '0',               //教师姓名
    teacher_mail: '0',               //教师邮箱账号
    teacher_sex: '0',                //性别
    teacher_faulty: 0,              //所属系别
    teacher_telephone: 0,           //联系电话
    teacher_leavestatus:0,         //假事情况
    teacher_address: '0',            //教师住址
    teacher_age: 0,                 //年龄
    teacher_perfer_time: '0',        //偏好时间(上午11，下午12，期中21，期末22，周末31，工作日32)
    teacher_perfer_address: 0       //偏好地点
}

//	教室信息
var classroomObject = {              
    id:0,                           //序号
    classroom_id: 0,                //教室编号
    classroom_schoolhouse: 0,       //所属校区
    classroom_capacity: 0           //教室容量
}

//班级信息
var classObject = {
    id: 0,                          //序号
    class_id: 0,                    //班级编号
    class_name: '',                 //班级名称
    class_student_number: 0         //学生数
}

//课程信息
var courseObject = {
    id: 0,                          //序号
    course_id: 0,                   //课程编号
    course_name: '0',                //课程名称
    course_time: '0'                 //课程开课时间段
}

//课表信息
var sectionObject = {
    id: 0,                          //序号
    course_id: 0,                   //课程编号
    course_order: 0,                //课序号
    course_name: '0',               //课程名称
    teacher_name: '0|1',                //教师姓名
    teacher_id: '0|1',                  //教师编号

    course_weeks: '0123',                //上课周次
    course_week: 0,                 //上课星期
    course_number: 0,               //上课节次

    course_class: '0|1',            //上课班级
    corse_classrom: 0,              //上课教室
    course_faulty: 0,               //开课院系
    course_capacity: 0,             //课容量
    course_student_number: 0,               //选课人数
    course_duration: 0,             //学时
    course_score: 0,                //学分
    course_sum_number: 0            //持续节次
}

//历史记录信息
var historyObject = {
    teacher_id: 0,                  //教师编号
    invigilate_sun_number: 0,       //监考总次数
    invigilate_number_main: 0,      //主监考次数
    invigilate_number_vice: 0,      //副监考次数
    search_number: 0,               //巡考次数
    invigilate_scale_big: 0,        //监考考场规模大
    invigilate_scale_middle: 0,     //监考考场规模中
    invigilate_scale_small: 0,      //监考考场规模小
    invigitale_address: 0,           //监考地点
    invigilate_schoolhouse: 0,      //监考校区
    invigilate_building: 0,        //监考楼号
    invigilate_classroom: 0         //监考教室号
}

//总表
var summaryObject = {
    id:0,                          //序号

    course_id: 0,                   //课程编号
    course_name: '0',                //课程名称
    course_time: '0',                 //课程开课时间段

    class_id: 0,                    //班级编号
    class_name: '0',                 //班级名称
    class_student_number: 0,        //学生数

    teacher_id: 0,                  //教师编号
    teacher_name: '0',               //教师姓名
    teacher_mail: '0',               //教师邮箱账号
    teacher_sex: '0',                //性别
    teacher_faulty: 0,              //所属系别
    teacher_telephone: 0,           //联系电话
    teacher_leavestatus:[],         //假事情况
    teacher_address: '0',            //教师住址
    teacher_age: 0,                 //年龄
    teacher_perfer_time: '0',        //偏好时间
    teacher_perfer_address: 0,       //偏好地点

    classroom_id: 0,                    //安排教室
    exam_student_number: 0,             //考试人数
    exam_weeks: 0,                      //安排周
    exam_week: 0,                       //安排星期
    exam_number: 0,                     //安排节次
    exam_begin_time: '0',               //考试开始时间
    exam_end_time: '0',                 //考试结束时
    invigilate_teacher_main: 0,         //主监考教师编号
    invigilate_teacher_1: 0,            //监考教师1编号
    invigilate_teacher_2: 0,            //监考教师2编号
    search_teacher_1: 0,                //巡考教师1编号
    search_teacher_2: 0                 //巡考教师2编号
}

