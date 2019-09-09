<template>
  <div class="course">
    <button @click="clearSection" style="float:left">清除课表</button>
    <el-table :data="tableData" border style="width: 100%" >
      <el-table-column prop="course_id" label="课程号" width="150"></el-table-column>
      <el-table-column prop="course_order" label="课序号" width="100"></el-table-column>
      <el-table-column prop="course_name" label="课程名" width="200"></el-table-column>
      <el-table-column prop="teacher_name" label="教师姓名" width="400"></el-table-column>
      <el-table-column prop="teacher_id" label="教师编号" width="400"></el-table-column>
      <el-table-column prop="course_weeks" label="上课周次" width="100"></el-table-column>
      <el-table-column prop="course_week" label="上课星期" width="100"></el-table-column>
      <el-table-column prop="course_number" label="上课节次" width="100"></el-table-column>
      <el-table-column prop="course_class" label="上课班级" width="300"></el-table-column>
      <el-table-column prop="course_address" label="上课地点" width="200"></el-table-column>
      <el-table-column prop="course_faulty" label="开课院系" width="200"></el-table-column>
      <el-table-column prop="course_capacity" label="课容量" width="100"></el-table-column>
      <el-table-column prop="course_student_number" label="选课人数" width="100"></el-table-column>
      <el-table-column prop="course_duration" label="学时" width="100"></el-table-column>
      <el-table-column prop="course_score" label="学分" width="100"></el-table-column>
      <el-table-column prop="course_sum_number" label="持续节次" width="100"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "../../api/index";
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getData() {
      axios("get", "home/teacherCourse/sectionTable", {})
        .then(res => {
          console.log(res.data);
          this.tableData = res.data      
        })
        .catch(err => {
          console.log(err);
        });
    },
    clearSection(){
      axios("post", "home/teacherCourse/sectionTable", {})
      .then(res => {
        console.log("清除完毕", res)
        this.getData()
      }).catch(err => {
        console.log(err);
      })
    }
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
