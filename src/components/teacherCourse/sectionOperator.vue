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
      <el-table-column label="课程号" width="150">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_id }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_id" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="课序号" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_order }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_order" placeholder="请输入内容"></el-input>
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
      <el-table-column label="教师姓名" width="200">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.teacher_name }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].teacher_name" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="教师编号" width="200">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.teacher_id }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].teacher_id" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="上课周次" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_weeks }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_weeks" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="上课星期" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_week }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_week" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="上课节次" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_number }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_number" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="上课班级" width="300">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_class }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_class" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="上课地点" width="200">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_address }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_address" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="开课院系" width="200">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_faulty }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_faulty" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="课容量" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_capacity }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_capacity" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="选课人数" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_student_number }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_student_number" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="学时" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_duration }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_duration" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
        <el-table-column label="学分" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_score }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_score" placeholder="请输入内容"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="持续节次" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.editeFlag">{{ scope.row.course_sum_number }}</span>
          <span v-if="scope.row.editeFlag" class="cell-edit-input">
            <el-input v-model="tableData[scope.$index].course_sum_number" placeholder="请输入内容"></el-input>
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

      // function postFun(index){
      //   if(index >= tableData.length) return;
      //   var currParam = tableData[index];
      //   axios('post', 'home/teacherCourse/sectionOperator', {tableData : JSON.stringify(currParam), abc : 'abc'}).then((res)=>{
      //       console.log(res)
      //       postFun(index+1)
      //   }).catch((err) => {
      //     console.log(err)
      //   })
      // }
      // postFun(0);
      axios("post", "home/teacherCourse/sectionOperator", {
        tableData: JSON.stringify(tableData)
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
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
          console.log("outdata", outdata);
          outdata.forEach(element => {
            var obj = {};
            var newelement = {};
            for (var x in element) {
              if (typeof element[x] == "string") {
                element[x] = element[x].trim();
              }
              newelement[x.trim()] = element[x];
            }
            obj.id = newelement["序号"];
            obj.course_id = newelement["课程号"];
            obj.course_order = newelement["课序号"];
            obj.course_name = newelement["课程名"],
            obj.teacher_name = newelement["教师名"],
            obj.course_weeks = newelement["上课周次"],
            obj.course_week = newelement["上课星期"],
            obj.course_number = newelement["上课节次"],
            obj.course_class = newelement["上课班级"],
            obj.course_address = newelement["上课地点"],
            obj.course_faulty = newelement["开课院系"],
            obj.course_capacity = newelement["课容量"],
            obj.course_student_number = newelement["选课人数"],
            obj.course_duration = newelement["学时"],
            obj.course_score = newelement["学分"],
            obj.course_sum_number = newelement["持续节次"];
            obj.editeFlag = false;
            if (obj.id && obj.course_id && obj.course_order) {
              data.push(obj);
            }
          });
          data.forEach((element) => {
              var obj2 = {};
              var array = [];
              var str = "";
              //格式化课程号
              obj2.course_order = Number(element.course_order);
              //格式化上课班级
              array =( element.course_class.split(' ') || []);
              array.forEach((e, key)=>{
                array[key] = e.replace(/[^0-9]/ig,"");
              })
              obj2.course_class = array.join('|');
              //格式化教师名
              array =(element.teacher_name.split(',') || []);
              array.forEach((e, key)=>{
                array[key] = e.replace(/[^0-9]/ig,"");
              })
              obj2.teacher_id = array.join('|');
              //格式化教师编号
              array = (element.teacher_name.split(',') || []);
              array.forEach((e, key)=>{
                  var reg = /[\u4e00-\u9fa5]/g;
                  array[key] = e.match(reg).join("");
              })
              obj2.teacher_name = array.join('|');
              //格式化上课地点
            
              str = (element.course_address || ' ');
              if(str.indexOf('泰达西院', 0) != -1){
                obj2.classroom_schoolhouse = 3;
              }else if(str.indexOf('泰达', 0) != -1){
                obj2.classroom_schoolhouse = 2;
              }else if(str.indexOf('河西', 0) != -1){
                obj2.classroom_schoolhouse = 1;
              }else{
                obj2.classroom_schoolhouse = 0;
              }

              obj2.classroom_building = (Number(str.match(/(\w+)/g)[0]) || 0);
              obj2.course_classroom = (Number(str.match(/(\w+)/g)[1]) || 0);

              //格式化上课周
              str = ( element.course_weeks || ' ');
              var weeks = '00000000000000000000000000';
              array = weeks.split('');
              var beginNum = (Number(str.match(/(\w+)/g)[0]) || 0);
              var endNum = ( Number(str.match(/(\w+)/g)[1]) || 0);
              for(var i = beginNum; i <= endNum; i++){
                if(str.indexOf('双') != -1){
                  if(i % 2 == 0){array[i] = '1';};
                }else if(str.indexOf('单') != -1){
                  if(i % 2 == 1){array[i] = '1'};
                }else{
                  array[i] = '1';
                }
              };
              obj2.course_weeks = array.join('');

              //格式化学院
              obj2.course_faulty = 1;

              obj2.course_id = element.course_id;
              obj2.course_name = element.course_name;
              obj2.course_week = element.course_week;
              obj2.course_number = element.course_number;
              obj2.course_address = element.course_address;            
              obj2.course_capacity = element.course_capacity;
              obj2.course_student_number = element.course_student_number;
              obj2.course_duration = element.course_duration;
              obj2.course_score = element.course_score;
              obj2.course_sum_number = element.course_sum_number;
              obj2.editeFlag = element.editeFlag;
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
