<template>
  <div class="userManage">
    <el-container>
        <router-view></router-view>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "",
  data() {
    return {};
  },
  methods: {
 
  },
  components: {
  }
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
