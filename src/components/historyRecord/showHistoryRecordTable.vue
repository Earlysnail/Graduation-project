<template>
  <div class="showHistoryRecordTable">
    <el-table :data="tableData" border style="width: 100%" >
      <el-table-column prop="teacher_id" label="教师编号" width="150"></el-table-column>
      <el-table-column prop="invigilate_sum_number" label="监考总次数" width="100"></el-table-column>
      <el-table-column prop="invigilate_number_main" label="主监考次数" width="100"></el-table-column>
      <el-table-column prop="invigilate_number_vice" label="副监考次数" width="100"></el-table-column>
      <el-table-column prop="searche_number" label="寻考次数" width="100"></el-table-column>
      <el-table-column prop="invigilate_scale_big" label="监考考场规模(大)次数" width="100"></el-table-column>
      <el-table-column prop="invigilate_scale_middle" label="监考考场规模(中)次数" width="100"></el-table-column>
      <el-table-column prop="invigilate_scale_small" label="监考考场规模(小)次数" width="100"></el-table-column>
      <el-table-column prop="invigilate_address" label="监考地点" width="200"></el-table-column>
      <el-table-column prop="invigilate_schoolhouse" label="监考校区" width="100"></el-table-column>
      <el-table-column prop="invigilate_building" label="监考楼号" width="100"></el-table-column>
      <el-table-column prop="invigilate_classroom" label="监考教室号" width="100"></el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from "../../api/index";
export default {
  data() {
    return {
      tableData: [],
      teacherData: []
    };
  },
  methods: {
    getData() {
      axios("get", "home/teacherInformation/showTeacherInfo", {})
        .then(res => {
          console.log(res.data);
          this.teacherData = res.data  
          axios("get", "home/historyRecord/showHistoryRecord", {})
          .then(res => {
            console.log(res.data);
            res.data.forEach((historyObject)=>{
              this.teacherData.forEach((teacherObject)=>{
              if(teacherObject.teacher_id == historyObject.teacher_id){
                historyObject.teacher_id = teacherObject.teacher_name
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
      // axios("get", "home/historyRecord/showHistoryRecord", {})
      //   .then(res => {
      //     console.log(res.data);
      //     this.tableData = res.data      
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
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
