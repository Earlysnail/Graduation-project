<template>
  <div class="invigilateManage">
    <button @click="clearTable" style="float:left">清空监考表</button> 
    <button @click="commitTable" style="float:left">提交监考表</button>
    <!-- <el-table :data="tableData" border style="width: 100%" @cell-dblclick="handleDbClick"> -->
      <el-table :data="tableData" border style="width: 100%" @cell-dblclick="handle">
      <el-table-column prop="class_id" label="班级" width="100" fixed></el-table-column>
      <el-table-column prop="course_id" label="课程号" width="150" fixed></el-table-column>
      <el-table-column prop="classroom_schoolhouse" label="校区" width="100"></el-table-column>
      <el-table-column prop="course_name" label="课程名" width="200" fixed></el-table-column>
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
      <el-table-column label="主监考" width="150">
        <template slot-scope="scope" >
          <span v-if="!scope.row.editeFlag">{{ scope.row.invigilate_teacher_main }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].invigilate_teacher_main"   placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="监考1" width="150">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.invigilate_teacher_1 }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].invigilate_teacher_1" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="监考2" width="150">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.invigilate_teacher_2 }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].invigilate_teacher_2" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="巡考1" width="150">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.search_teacher_1 }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].search_teacher_1" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="巡考2" width="150">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.search_teacher_2 }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].search_teacher_2" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="exam_spare_teacher" label="备选教师" width="300"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleSave(scope.$index, scope.row)" type="text" size="small">保存</el-button>
          <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleRecommend(scope.$index, scope.row)" type="text" size="small">推荐监考</el-button>
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
      teacherTable: [],
      tableData: [],
      invigilate_teacher_main: '',
      invigilate_teacher_1: '',
      invigilate_teacher_2: '',
      search_teacher_1: '',
      search_teacher_2: ''
    };
  },
  methods: {
    getData() {
      axios("get", "home/invigilateExam/invigilateManage:unfinish", {})
        .then(res => {
          console.log(res.data);
          res.data.forEach(element => {
            element.editeFlag = false
            element.exam_spare_teacher = '待推荐'
          });
          this.tableData = res.data      
        })
        .catch(err => {
          console.log(err);
        });
        axios("get", "home/invigilateExam/invigilateManage/teacher", {})
        .then(res => {
          console.log(res.data);
          this.teacherTable = res.data      
        })
        .catch(err => {
          console.log(err);
        });
    },
    clearTable(){ 
      axios("post", "home/invigilateExam/invigilateManage", {})
      .then(res => {
        console.log("清除完毕", res)
        this.getData()
      }).catch(err => {
        console.log(err);
      })
    },
    commitTable(){
       let invigilateTable = this.tableData
       invigilateTable.forEach((invigilateObject)=>{ 
         this.teacherTable.forEach((teacherObject)=>{
           if(teacherObject.teacher_name == invigilateObject.invigilate_teacher_main){
             invigilateObject.invigilate_teacher_main = teacherObject.teacher_id
           }
           if(teacherObject.teacher_name == invigilateObject.invigilate_teacher_1){
             invigilateObject.invigilate_teacher_1 = teacherObject.teacher_id
           }
           if(teacherObject.teacher_name == invigilateObject.invigilate_teacher_2){
             invigilateObject.invigilate_teacher_2 = teacherObject.teacher_id
           }
           if(teacherObject.teacher_name == invigilateObject.search_teacher_1){
             invigilateObject.search_teacher_1 = teacherObject.teacher_id
           }
           if(teacherObject.teacher_name == invigilateObject.search_teacher_2){
             invigilateObject.search_teacher_2 = teacherObject.teacher_id
           }
         })
       })
     
       axios("post", "home/invigilateExam/invigilateManage:finish", {
         tableData: JSON.stringify(this.tableData)
       })
      .then(res => {
        this.$message({
            message: '提交成功',
            type: 'success'
          }); 
        console.log("提交完毕", res)
      }).catch(err => {
        this.$message.error('删除失败！');
        console.log(err);
      })
    },
    handle(row, column, cell){
        console.log(row, column, cell.getAttribute("class"));
    },
    handleSave(index, row) {
      console.log(row);
      row.editeFlag = false;
    },
    handleEdit(index, row) {
      console.log(row);
      row.editeFlag = true;
    },
    ClashScreen(teacherTable, invigilateTable, invigilateObject){
      console.log(teacherTable, invigilateTable, invigilateObject);
      let teacherScreen = teacherTable.filter(function(teacherObject, index, array){
        let mark = true;
        invigilateTable.forEach(e => {     
        if(e.exam_weeks == invigilateObject.exam_weeks){
          if(e.exam_week == invigilateObject.exam_week){
            if(e.exam_number == invigilateObject.exam_number){
              if(e.invigilate_teacher_main == teacherObject.teacher_name || e.invigilate_teacher_1 == teacherObject.teacher_name ||e.invigilate_teacher_2 == teacherObject.teacher_name ||e.search_teacher_1 == teacherObject.teacher_name ||e.search_teacher_2 == teacherObject.teacher_name){
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
    },
    handleRecommend(index, row){
      console.log(row);
      row.editeFlag = true;
      let recommendTeacher = [];    
      axios("post", "home/engine/section", {
        tableData: JSON.stringify(row)
      })
      .then(res => {    
        console.log("推荐结束", res.data)
        let recommendTeacher = res.data
        recommendTeacher = this.ClashScreen(recommendTeacher, this.tableData, row)
        this.tableData[index].invigilate_teacher_main = recommendTeacher[0]? recommendTeacher[0].teacher_name: ''
        this.tableData[index].invigilate_teacher_1 = recommendTeacher[1]? recommendTeacher[1].teacher_name: ''
        this.tableData[index].invigilate_teacher_2 = recommendTeacher[2]? recommendTeacher[2].teacher_name: ''
        this.tableData[index].search_teacher_1 = recommendTeacher[3]? recommendTeacher[3].teacher_name: ''
        this.tableData[index].search_teacher_2 = recommendTeacher[4]? recommendTeacher[4].teacher_name: ''
        let str = ''
        recommendTeacher.forEach(e => {
          str =  str + e.teacher_name + '|'
        })
        this.tableData[index].exam_spare_teacher = str;
      }).catch(err => {
        console.log(err);
      })
    },
    // handleDbClick(row, column, cell, event) {
    //   row.editeFlag = true;
    // },
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

