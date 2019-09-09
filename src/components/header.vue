<template>
  <div class="header">
    <el-header style="height:100%"> 
      <el-row :gutter="20">
        <el-col :span="4">
          <img src="../assets/logo.png">
        </el-col>
        <el-col :span="20">
          <div class="logout" v-if="this.userName" @click="logout">注销</div>
          <div class="user">{{this.userName}}</div>
          
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import router from '../router';
import vm from './event.js'
export default {
  name: "Header",
  data() {
    return {
      userName: ''
    };
  },
  methods: {
    ...mapMutations(['unset_user']),
    logout(){
      this.unset_user();
      this.userName = '';
      this.$router.push("/login");
    }
  },
  created(){
    vm.$on('userName', (userName) => {
        this.userName = userName;
      })
      this.userName = window.localStorage.getItem("userName")
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
img {
  width: 30px;
  height: 30px;
}
.user {
  float: right;
  margin-right: 20px;
}
.logout{
  float: right;
  cursor: pointer;
  margin-right: 20px;
}
.el-header{
  background-image: url("../assets/topbg.png")
}
.header{
  height: 10%;
}
</style>
