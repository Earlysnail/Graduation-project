<template>
  <div class="showTeacherInfo">
    <el-table :data="tableData" border style="width: 100%" >
      <el-table-column prop="teacher_id" label="教师编号" width="100"></el-table-column>
      <el-table-column prop="teacher_name" label="教师姓名" width="100"></el-table-column>
      <el-table-column prop="teacher_sex" label="教师性别" width="100"></el-table-column>
      <el-table-column prop="teacher_age" label="教师年龄" width="100"></el-table-column>
      <el-table-column prop="teacher_faulty" label="所属院系" width="100"></el-table-column>
      <el-table-column prop="teacher_email" label="教师邮箱" width="100"></el-table-column>
      <el-table-column prop="teacher_telephone" label="教师电话" width="100"></el-table-column>
      <el-table-column prop="teacher_prefer_time" label="偏好时间" width="200"></el-table-column>
      <el-table-column prop="teacher_prefer_address" label="偏好地点" width="200"></el-table-column>
      <el-table-column prop="teacher_address" label="教师住址" width="200"></el-table-column>
      <el-table-column prop="teacher_leavestatus" label="假事" width="100"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="deleteData(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
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
      axios("get", "home/teacherInformation/showTeacherInfo", {})
        .then(res => {
          console.log(res.data);
          this.tableData = res.data      
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteData(row){
      console.log(row);
      axios("post", "home/teacherInformation/showTeacherInfo:delete", {teacher_id: JSON.stringify(row.teacher_id)})
        .then(res => {
          console.log(res); 
           this.$message({
            message: '删除成功',
            type: 'success'
          }); 
          location.reload()   
        })
        .catch(err => {
          console.log(err);
          this.$message.error('删除失败！');
        });
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
