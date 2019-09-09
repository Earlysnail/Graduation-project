<template>
  <div class="course">
      <button @click="clearTable" style="float:left">清空</button> 
      <el-table :data="tableData" border style="width: 100%" >
      <el-table-column fixed="left" prop="class_id" label="班级" width="100"></el-table-column>
      <el-table-column fixed="left" prop="course_id" label="课程号" width="150"></el-table-column>
      <el-table-column prop="classroom_schoolhouse" label="校区" width="100"></el-table-column>
      <el-table-column fixed="left" prop="course_name" label="课程名" width="200"></el-table-column>
      <el-table-column prop="exam_faulty" label="开课系号码" width="100"></el-table-column>
      <el-table-column prop="exam_weeks" label="安排周" width="100"></el-table-column>
      <el-table-column prop="exam_week" label="安排星期" width="100"></el-table-column>
      <el-table-column prop="exam_number" label="安排节次" width="100"></el-table-column>
      <el-table-column prop="exam_begin_time" label="考试开始时间" width="150"></el-table-column>
      <el-table-column prop="exam_end_time" label="考试结束时间" width="150"></el-table-column>
      <el-table-column prop="exam_address" label="安排教室" width="200"></el-table-column>
      <el-table-column prop="exam_again_number" label="重修人数" width="100"></el-table-column>
      <el-table-column prop="exam_student_number" label="人数" width="100"></el-table-column>
      <el-table-column prop="exam_content" label="备注" width="300"></el-table-column>
      <el-table-column prop="invigilate_teacher_main" label="主监考" width="150"></el-table-column>
      <el-table-column prop="invigilate_teacher_1" label="监考1" width="150"></el-table-column>
      <el-table-column prop="invigilate_teacher_2" label="监考2" width="150"></el-table-column>
      <el-table-column prop="search_teacher_1" label="巡考1" width="150"></el-table-column>
      <el-table-column prop="search_teacher_2" label="巡考2" width="150"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "../../api/index";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getData() {
      axios("get", "home/teacherInformation/showTeacherInfo", {})
        .then(res => {
          console.log(res.data);
          this.teacherData = res.data  
          axios("get", "home/historyRecord/historyInvigilateTable", {})
          .then(res => {
            console.log(res.data);
            res.data.forEach(element => {
              element.editeFlag = false
            });

            res.data.forEach((invigilateObject)=>{
              this.teacherData.forEach((teacherObject)=>{
              if(teacherObject.teacher_id == invigilateObject.invigilate_teacher_main){
                invigilateObject.invigilate_teacher_main = teacherObject.teacher_name
              }
              if(teacherObject.teacher_id == invigilateObject.invigilate_teacher_1){
                invigilateObject.invigilate_teacher_1 = teacherObject.teacher_name
              }
              if(teacherObject.teacher_id == invigilateObject.invigilate_teacher_2){
                invigilateObject.invigilate_teacher_2 = teacherObject.teacher_name
              }
              if(teacherObject.teacher_id == invigilateObject.search_teacher_1){
                invigilateObject.search_teacher_1 = teacherObject.teacher_name
              }
              if(teacherObject.teacher_id == invigilateObject.search_teacher_2){
                invigilateObject.search_teacher_2 = teacherObject.teacher_name
           }
         })
            })
            this.tableData = res.data      

          })
          .catch(err => {
            console.log(err);
          });    
        })
        .catch(err => {
          console.log(err);
        });
    },
    clearTable(){ 
      axios("post", "home/historyRecord/historyInvigilateTable/clear", {})
      .then(res => {
        console.log("清除完毕", res)
        this.getData()
      }).catch(err => {
        console.log(err);
      })
    },
  },
  created() {
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cell-edit-input .el-input,
.el-input__inner {
  width: 100px;
}
.cell-icon {
  cursor: pointer;
  color: #fff;
}
</style>

