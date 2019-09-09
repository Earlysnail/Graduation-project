<template>
  <div class="course">
    <div style="float:left">
      导入表格
      <input
        id="upload"
        type="file"
        @change="inputFile(this)"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      >
      <el-button type="primary" @click="uploadFile(tableData)">上传
        <i class="el-icon-upload el-icon--right"></i>
      </el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%" @cell-dblclick="handleDbClick">
      <el-table-column label="班级" width="150">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.class_id }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].class_id" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="课程号" width="150">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_id }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_id" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="校区" width="150">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.classroom_schoolhouse }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].classroom_schoolhouse" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="开课系号码" width="150">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.exam_faulty }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].exam_faulty" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      
      <el-table-column label="课程名" width="200">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_name }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_name" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="人数" width="200">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.exam_student_number }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].exam_student_number" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="安排周" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.exam_weeks }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_weeks" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="安排星期" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.exam_week }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_week" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="安排节次" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.exam_number }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_number" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="考试开始时间" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.exam_begin_time }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].exam_begin_time" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="考试结束时间" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.exam_end_time }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].exam_end_time" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="安排教室" width="200">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.exam_address }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].exam_address" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="重修人数" width="200">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.exam_again_number }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].exam_again_number" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="备注" width="200">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.exam_content }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].exam_content" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleSave(scope.row)" type="text" size="small">保存</el-button>
          <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
var XLSX = require("xlsx");
import axios from "../../api/index";
export default {
  data() {
    return {
      tableData: [],
      inputColumn1: "",
      fileList: []
    };
  },
  methods: {
    handleSave(row) {
      row.editeFlag = false;
    },
    handleEdit(row) {
      row.editeFlag = true;
    },
    handleDbClick(row, column, cell, event) {
      row.editeFlag = true;
    },
    uploadFile(tableData) {
      console.log("tableData:", tableData);
      axios("post", "home/invigilateExam/intoInvigilateTable", {
        tableData: JSON.stringify(tableData)
      })
        .then(res => {
          this.$message({
              message: '上传成功',
              type: 'success'
            });
          console.log(res);
        })
        .catch(err => {
          this.$message.error('上传失败！');
          console.log(err);
        });
    },
    inputFile(obj) {
      var data = [];
      var newTableData = this.tableData;
      var rABS = false; //是否将文件读取为二进制字符串
      var file = event.currentTarget.files[0];
      var reader = new FileReader();
      FileReader.prototype.readAsBinaryString = function(file) {
        var binary = "";
        var wb; //读取完成的数据
        var outdata;
        reader.onload = function(e) {
          var bytes = new Uint8Array(reader.result);
          var length = bytes.byteLength;
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          wb = XLSX.read(binary, {
            type: "binary"
          });
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); //outdata就是你想要的东西
          console.log("outdata:", outdata);
          outdata.forEach(element => {
            var obj = {};
            var newelement = {};
            for (var x in element) {
              if (typeof element[x] == "string") {
                element[x] = element[x].trim();
              }
              newelement[x.trim()] = element[x];
            }
            obj.course_id = newelement["课程号"];
            obj.class_id = newelement["班级"],
            // obj.teacher_id = newelement["教师编号"],
            obj.exam_address = newelement["安排教室"],
            obj.course_name = (newelement["课程名"] || newelement["课程"]),
            obj.exam_content = newelement["备注"],
            obj.exam_again_number = newelement["重修人数"],
            obj.exam_weeks = newelement["安排周"],
            obj.exam_week = newelement["安排星期"],
            obj.exam_number = newelement["安排节次"],
            obj.classroom_schoolhouse = newelement["校区"],
            obj.exam_faulty = newelement["开课系号码"],
            obj.exam_begin_time = newelement["考试开始时间"],
            obj.exam_end_time = newelement["考试结束时间"],                             
            obj.exam_student_number = newelement["人数"],      
            // obj.invigilate_teacher_main = newelement["主监考教师编号"];
            // obj.invigilate_teacher_1 = newelement["监考教师1编号"];
            // obj.invigilate_teacher_2 = newelement["监考教师2编号"];
            // obj.search_teacher_1 = newelement["巡考教师1编号"];
            // obj.search_teacher_2 = newelement["巡考教师2编号"];
            obj.editeFlag = false;
            if (obj.class_id && obj.course_id) {
              data.push(obj);
            }
          });
          data.forEach((element) => { 
              var obj2 = {};
              var str = "";       
              str =(element.classroom_schoolhouse || ' ');
              if(str.indexOf('泰达西院', 0) != -1){
                obj2.classroom_schoolhouse = 3;
              }else if(str.indexOf('泰达', 0) != -1){
                obj2.classroom_schoolhouse = 2;
              }else if(str.indexOf('河西', 0) != -1){
                obj2.classroom_schoolhouse = 1;
              }
            obj2.course_id = element.course_id,
            obj2.class_id = element.class_id,
            // obj.teacher_id = newelement["教师编号"],
            obj2.exam_address = element.exam_address,
            obj2.course_name = element.course_name,
            obj2.exam_content = element.exam_content,
            obj2.exam_again_number = element.exam_again_number,
            obj2.exam_weeks = element.exam_weeks,
            obj2.exam_week = element.exam_week,
            obj2.exam_number = element.exam_number,
            obj2.exam_faulty = element.exam_faulty,
            obj2.exam_begin_time =  element.exam_begin_time,
            obj2.exam_end_time = element.exam_end_time,                             
            obj2.exam_student_number = element.exam_student_number,      
            // obj2.invigilate_teacher_main =element.invigilate_teacher_main;
            // obj2.invigilate_teacher_1 = element.invigilate_teacher_1 ;
            // obj2.invigilate_teacher_2 = element.invigilate_teacher_2 ;
            // obj2.search_teacher_1 = element.search_teacher_1;
            // obj2.search_teacher_2 = element.search_teacher_2;
            obj2.editeFlag = false;
              newTableData.push(obj2);
          })
        };
        reader.readAsArrayBuffer(file);
      };
      reader.readAsBinaryString(file);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cell-edit-input .el-input,
.el-input__inner {
  width: 100%;
}
.cell-icon {
  cursor: pointer;
  color: #fff;
}
.file {
  float: left;
}
</style>
