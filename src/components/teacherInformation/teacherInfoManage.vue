<template>
  <div class="teacherInfoManage">
    <el-container>
      <el-form ref="form" :model="teacherForm" label-width="80px">
        <el-form-item label="教师姓名">
          <el-input v-model="teacherForm.name"></el-input>
        </el-form-item>
        <el-form-item label="教师编号">
          <el-input v-model="teacherForm.num"></el-input>
        </el-form-item>
        <el-form-item label="教师年龄">
          <el-input v-model="teacherForm.age"></el-input>
        </el-form-item>
        <el-form-item label="教师邮箱">
          <el-input v-model="teacherForm.mail"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="teacherForm.tele"></el-input>
        </el-form-item>
        <el-form-item label="偏好时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="teacherForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="teacherForm.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="偏好时间">       
          <el-select v-model="teacherForm.date1" placeholder="请选择上下午">
          <el-option label="上午" value="11"></el-option>
            <el-option label="下午" value="12"></el-option>
          </el-select>
          <el-select v-model="teacherForm.date2" placeholder="请选择时间段">
          <el-option label="期中" value="21"></el-option>
            <el-option label="期末" value="22"></el-option>
          </el-select>
          <el-select v-model="teacherForm.date3" placeholder="请选择时间段">
          <el-option label="工作日" value="31"></el-option>
            <el-option label="周末" value="32"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教师住址">
          <el-select v-model="teacherForm.region" placeholder="请选择住址区域">
            <el-option label="河西" value=1></el-option>
            <el-option label="泰达" value=2></el-option>
            <el-option label="泰达西苑" value=3></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教师姓别">
          <el-radio-group v-model="teacherForm.sex" size="mini">
            <el-radio border label="男"></el-radio>
            <el-radio border label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="请假中">
          <el-switch v-model="teacherForm.leave" ></el-switch>
        </el-form-item>
        <el-form-item label="请假事项">
          <el-checkbox-group v-model="teacherForm.type">
            <el-checkbox label="病假" name="type"></el-checkbox>
            <el-checkbox label="事假" name="type"></el-checkbox>
            <el-checkbox label="出差" name="type"></el-checkbox>
            <el-checkbox label="其他" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        
        <el-form-item label="偏好地点">
          <el-radio-group v-model="teacherForm.address" size="small">
            <el-radio border label="河西校区"></el-radio>
            <el-radio border label="泰达中院"></el-radio>
            <el-radio border label="泰达西院"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="所属系别">
          <el-select v-model="teacherForm.faulty" placeholder="请选择学院">
            <el-option label="计算机" value="1"></el-option>
            <el-option label="文理" value="2"></el-option>
            <el-option label="电信" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-container>
  </div>
</template>

<script>
import axios from "../../api/index";
export default {
  name: "",
  data() {
    return {
      teacherForm: {
        name: "",
        num: "",
        age: "",
        sex: "",
        mail: "",
        tele: "",
        region: "",
        faulty: "",
        date1: "",
        date2: "",
        date3: "",
        leave: 0,
        type: [],
        address: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.teacherForm);
      switch(this.teacherForm.address){
        case '河西校区': this.teacherForm.address = 1; break;
        case '泰达中院': this.teacherForm.address = 2; break;
        case '泰达西院': this.teacherForm.address = 3; break;
      }
       
      let tableData = {};
      tableData = {
          teacher_id: this.teacherForm.num,
          teacher_name: this.teacherForm.name,
          teacher_email: this.teacherForm.mail,
          teacher_sex: this.teacherForm.sex,
          teacher_faulty: Number(this.teacherForm.faulty),
          teacher_telephone: Number(this.teacherForm.tele),
          teacher_leavestatus: this.teacherForm.leave? 1:0,
          teacher_age: Number(this.teacherForm.age),
          teacher_address: this.teacherForm.region,
          teacher_prefer_time: this.teacherForm.date1 + this.teacherForm.date2 + this.teacherForm.date3,
          teacher_prefer_address: this.teacherForm.address,
      }
      console.log("submit!", tableData);
      axios("post", "home/teacherInformation/teacherInfoManage", {tableData: JSON.stringify(tableData)})
        .then(res => {
            console.log("res!", res);
            alert("提交成功")
        })
        .catch(err => {
            console.log("err!", err);
        });
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #f5f5f5;
}
</style>
