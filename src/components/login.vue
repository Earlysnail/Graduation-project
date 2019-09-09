<template>
  <div class="login">
    <el-row style="height:100%" class="row">
      <el-col :span="9" :offset="3">
        <img src="../assets/logo.png">
      </el-col>

      <el-col :span="6" :offset="3">
        <el-form
          :model="userinfo"
          :rules="rules"
          ref="userinfo"
          label-width="100px"
          class="ruleForm"
        >
          <el-form-item label="账户" prop="username">
            <el-input type="text" v-model="userinfo.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="userinfo.password" autocomplete="off" @keydown.enter="confirm(userinfo.username,userinfo.password)"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button style="float: right;width: 100%" type="primary"  @click="login1(userinfo.username,userinfo.password)">登录</el-button>
             <!-- <el-button type="primary" @click="register1(userinfo.username,userinfo.password)">注册</el-button> -->
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import store from '../store'
import vm from './event.js'
export default {
  name: "Login",
  data() {
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    return {
      userinfo: {
        username: "",
        password: ""
      },
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(['login','register']),
    ...mapMutations(['set_user']),
    login1(username,password) {
      this.login({ username: username, password: password }).then(
        (res) => {
          this.set_user(res.data);
          vm.$emit('userName', res.data.username);
          this.$router.push("/home");
        }
      ).catch((err)=>{
         this.$message.error('用户名或密码错误！');
        console.log(err)
      });
    },
    keydownLogin(){
      this.login1(this.userinfo.username, this.userinfo.password);
    },
    register1(username,password) {
      this.register({ username: username, password: password }).then(
        (res) => {
          this.set_user(res.data);    
        }
      ).catch((err)=>{
        console.log(err)
      });
    }
  },
  created: function(){
    let that = this
    document.onkeydown = function (e) {
      let key = window.event.keyCode;
      if(key === 13){
        that.keydownLogin()
      }
    }
  },
  components: {
  }
};
</script>

<style >
.row {
  padding-top: 100px;
}
</style>
