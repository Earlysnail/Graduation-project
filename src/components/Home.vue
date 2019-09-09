<template>
  <div class="home">
    <el-container>
      <el-aside width="250px" height="100%">
        <leftMenu></leftMenu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import leftMenu from './leftmenu';

export default {
  name: "leftmenu",
  data() {
    return {};
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  },
  components: {
    leftMenu
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
  height: 90%;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #f5f5f5;
}
</style>
