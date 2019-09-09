#mysql数据库表结构

DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户编号', 
  `user_name` char(50) NOT NULL DEFAULT '' COMMENT '用户帐号',
  `user_password` char(128) NOT NULL DEFAULT '' COMMENT '用户密码',
  `user_right` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '用户类型 0:未审核用户;1:超级管理员;2:普通管理员;3:VIP用户;4:普通用户',
  `user_email` char(128) NOT NULL DEFAULT '' COMMENT '邮箱地址',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户数据表';

DROP TABLE IF EXISTS `teacherTable`;
CREATE TABLE `teacherTable` (
  `teacher_id` char(10)  NOT NULL COMMENT '教师编号',
  `teacher_name` char(50) NOT NULL DEFAULT '' COMMENT '教师姓名',
  `teacher_email` char(128) NOT NULL DEFAULT '' COMMENT '邮箱地址',
  `teacher_sex` char(2) NOT NULL DEFAULT '' COMMENT '教师性别',
  `teacher_faulty` int(3) unsigned DEFAULT '0' COMMENT '所属系别',
  `teacher_age` int(3) unsigned DEFAULT '0' COMMENT '年龄',
  `teacher_prefer_time` varchar(8) unsigned DEFAULT '' COMMENT '偏好时间',
  `teacher_prefer_address` int(3) unsigned DEFAULT '0' COMMENT '偏好地点',
  `teacher_telephone` bigint(20) unsigned DEFAULT '0' COMMENT '联系电话',
  `teacher_leavestatus` int(1) unsigned DEFAULT '0' COMMENT '假事状态',
  `teacher_address` char(128) NOT NULL DEFAULT '' COMMENT '教师住址',
  PRIMARY KEY (`teacher_id`) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='教师数据表';


DROP TABLE IF EXISTS `sectionTable`;
CREATE TABLE `sectionTable` (
  `course_id` char(10)  NOT NULL  COMMENT '课程号',
  `course_order` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '课序号',
  `course_name` char(128) NOT NULL DEFAULT '0' COMMENT '课程名',
  `teacher_name` char(10) NOT NULL DEFAULT '0' COMMENT '教师性名',
  `teacher_id` varchar(50) NOT NULL  COMMENT '教师编号',
  `course_student_number` int(5) unsigned NOT NULL DEFAULT '0' COMMENT '选课人数',
  `course_weeks` varchar(30)  NOT NULL DEFAULT '0' COMMENT '上课周',
  `course_week` int(2) unsigned NOT NULL DEFAULT '0' COMMENT '上课星期',
  `course_number` int(2) unsigned NOT NULL DEFAULT '0' COMMENT '上课节次',
  `course_class` varchar(30) NOT NULL DEFAULT '0' COMMENT '上课班级',
  `course_address` varchar(30) NOT NULL DEFAULT '0' COMMENT '上课地点',
  `classroom_schoolhouse` int(3)  unsigned NOT NULL  COMMENT '所属校区',
  `classroom_building` int(3)  unsigned NOT NULL  COMMENT '教室楼号',
  `course_classroom` int(3) NOT NULL DEFAULT '0' COMMENT '教室号',
  `course_faulty` int(3)  unsigned NOT NULL  COMMENT '开课院系',
  `course_capacity` int(3)  unsigned NOT NULL  COMMENT '课容量',
  `course_duration` int(3)  unsigned NOT NULL  COMMENT '学时',
  `course_score` int(3) unsigned NOT NULL  COMMENT '学分',
  `course_sum_number` int(3)  unsigned NOT NULL  COMMENT '持续节次',
  PRIMARY KEY (`course_id`, `course_order`, `course_weeks`, `course_week`, `course_number`) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='课表数据表';

DROP TABLE IF EXISTS `invigilateTable`;
CREATE TABLE `invigilateTable` (
  `course_id` char(10)   NOT NULL COMMENT '课程号',
  `class_id` char(10)   NOT NULL COMMENT '班级编号',
  `course_name` text(10)  NOT NULL COMMENT '课程名',
  `teacher_id` char(10)  COMMENT '教师编号',
  `exam_address` text(10)  COMMENT '安排教室',
  `exam_content` text(20)    COMMENT '备注',
  `exam_again_number` int(5) unsigned NOT NULL DEFAULT '0' COMMENT '重修人数',
  `exam_student_number` int(5) unsigned NOT NULL DEFAULT '0' COMMENT '人数',
  `exam_weeks` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '安排周',
  `exam_week` int(2) unsigned NOT NULL DEFAULT '0' COMMENT '安排星期',
  `exam_number` int(2) unsigned NOT NULL DEFAULT '0' COMMENT '安排节次',
  `classroom_schoolhouse` int(3)  unsigned NOT NULL  COMMENT '所属校区',
  `exam_faulty` int(3)  unsigned NOT NULL  COMMENT '开课院系',
  `exam_begin_time` varchar(10)   NOT NULL  COMMENT '考试开始时间',
  `exam_end_time` varchar(10)   NOT NULL  COMMENT '考试结束时间',
  `invigilate_teacher_main`  char(10) DEFAULT '0' COMMENT '主监考教师编号',
  `invigilate_teacher_1`  char(10)  DEFAULT '0' COMMENT '监考教师1编号',
  `invigilate_teacher_2` char(10) DEFAULT '0' COMMENT '监考教师2编号',
  `search_teacher_1` char(10)  DEFAULT '0' COMMENT '巡考教师1编号',
  `search_teacher_2` char(10) DEFAULT '0' COMMENT '巡考教师2编号',
  `isHaveFile` int(1) unsigned DEFAULT '0' COMMENT '归档状态',
  `isHaveFinish` int(1) unsigned DEFAULT '0' COMMENT '完成状态',
  PRIMARY KEY (`course_id`,`class_id`) 

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='监考数据表';

DROP TABLE IF EXISTS `historyTable`;
CREATE TABLE `historyTable` (
  `teacher_id` varchar(10) NOT NULL  COMMENT '教师编号',
  `invigilate_sum_number` int(3) unsigned DEFAULT '0' COMMENT '总监考次数',
  `invigilate_number_main` int(3) unsigned DEFAULT '0' COMMENT '主监考次数',
  `invigilate_number_vice` int(3) unsigned DEFAULT '0' COMMENT '副监考次数',
  `searche_number` int(3)  unsigned DEFAULT '0' COMMENT '巡考次数',
  `invigilate_scale_big` int(3) unsigned DEFAULT '0' COMMENT '监考考场规模大次数',
  `invigilate_scale_middle` int(3) unsigned  DEFAULT '0' COMMENT '监考考场规模中巡考次数',
  `invigilate_scale_small` int(3) unsigned  DEFAULT '0' COMMENT '监考考场规模小巡考次数',
  `invigilate_address` text(3)  COMMENT '监考地点',
  `invigilate_ schoolhouse` int(3) unsigned DEFAULT '0' COMMENT '监考校区',
  `invigilate _ building` int(3)  unsigned DEFAULT '0' COMMENT '监考楼号',
  `invigilate _ classroom` int(3) unsigned DEFAULT '0' COMMENT '监考教室号',
  PRIMARY KEY (`teacher_id`) 

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='历史数据表';


DROP TABLE IF EXISTS `summaryTable`;
CREATE TABLE `summaryTable` (
  `course_id` char(10)   NOT NULL COMMENT '课程编号',
  `class_id` char(10)   NOT NULL COMMENT '班级编号',
  `teacher_id` char(10)   NOT NULL  COMMENT '教师编号',

  `teacher_name` char(50) NOT NULL DEFAULT '' COMMENT '教师姓名',
  `teacher_email` char(128) NOT NULL DEFAULT '' COMMENT '邮箱地址',
  `teacher_sex` char(2) NOT NULL DEFAULT '' COMMENT '教师性别',
  `teacher_faulty` int(3) unsigned NOT NULL DEFAULT '0' COMMENT '所属系别',
  `teacher_age` int(3) unsigned DEFAULT '0' COMMENT '年龄',
  `teacher_prefer_time` int(3) DEFAULT '0' COMMENT '偏好时间',
  `teacher_prefer_address` int(3) unsigned DEFAULT '0' COMMENT '偏好地点',
  `teacher_telephone` bigint(20) unsigned DEFAULT '0' COMMENT '联系电话',
  `teacher_leavestatus` int(1) unsigned DEFAULT '0' COMMENT '假事状态',
  `teacher_address` char(128) NOT NULL DEFAULT '' COMMENT '教师住址',

  `classroom_id` int(10)  unsigned NOT NULL  COMMENT '安排教室',
  `exam_student_number` int(5) unsigned NOT NULL DEFAULT '0' COMMENT '考试人数',
  `exam_weeks` int(2) unsigned NOT NULL DEFAULT '0' COMMENT '安排周',
  `exam_week` int(2) unsigned NOT NULL DEFAULT '0' COMMENT '安排星期',
  `exam_number` int(2) unsigned NOT NULL DEFAULT '0' COMMENT '安排节次',
  `invigilate_teacher_main`  char(10) DEFAULT '0' COMMENT '主监考教师编号',
  `invigilate_teacher_1`  char(10)  DEFAULT '0' COMMENT '监考教师1编号',
  `invigilate_teacher_2` char(10) DEFAULT '0' COMMENT '监考教师2编号',
  `search_teacher_1` char(10)  DEFAULT '0' COMMENT '巡考教师1编号',
  `search_teacher_2` char(10) DEFAULT '0' COMMENT '巡考教师2编号',
  `isHaveFile` int(1) unsigned DEFAULT '0' COMMENT '归档状态',
  `isHaveFinish` int(1) unsigned DEFAULT '0' COMMENT '完成状态',
  PRIMARY KEY (`course_id`,`class_id`, `teacher_id`) 

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='总数据表';

DROP TABLE IF EXISTS `historyInvigilateTable`;
CREATE TABLE `historyInvigilateTable` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '编号',
  `course_id` char(10)   NOT NULL COMMENT '课程号',
  `class_id` char(10)   NOT NULL COMMENT '班级编号',
  `course_name` text(10)  NOT NULL COMMENT '课程名',
  `teacher_id` char(10)  COMMENT '教师编号',
  `exam_address` text(10)  COMMENT '安排教室',
  `exam_content` text(20)    COMMENT '备注',
  `exam_again_number` int(5) unsigned NOT NULL DEFAULT '0' COMMENT '重修人数',
  `exam_student_number` int(5) unsigned NOT NULL DEFAULT '0' COMMENT '人数',
  `exam_weeks` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '安排周',
  `exam_week` int(2) unsigned NOT NULL DEFAULT '0' COMMENT '安排星期',
  `exam_number` int(2) unsigned NOT NULL DEFAULT '0' COMMENT '安排节次',
  `classroom_schoolhouse` int(3)  unsigned NOT NULL  COMMENT '所属校区',
  `exam_faulty` int(3)  unsigned NOT NULL  COMMENT '开课院系',
  `exam_begin_time` varchar(10)   NOT NULL  COMMENT '考试开始时间',
  `exam_end_time` varchar(10)   NOT NULL  COMMENT '考试结束时间',
  `invigilate_teacher_main`  char(10) DEFAULT '0' COMMENT '主监考教师编号',
  `invigilate_teacher_1`  char(10)  DEFAULT '0' COMMENT '监考教师1编号',
  `invigilate_teacher_2` char(10) DEFAULT '0' COMMENT '监考教师2编号',
  `search_teacher_1` char(10)  DEFAULT '0' COMMENT '巡考教师1编号',
  `search_teacher_2` char(10) DEFAULT '0' COMMENT '巡考教师2编号',
  `isHaveFile` int(1) unsigned DEFAULT '0' COMMENT '归档状态',
  `isHaveFinish` int(1) unsigned DEFAULT '0' COMMENT '完成状态',
  PRIMARY KEY (`id`,`course_id`,`class_id`) 

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='历史监考数据表';

