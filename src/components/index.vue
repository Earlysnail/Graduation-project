<template>
  <div id="index">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./header";
export default {
  name: "Index",
  data() {
    return {
      clientHeight: 0,
    };
  },
  methods: {
    changeFixed(){
      document.getElementById('index').style.height = this.clientHeight - 70
      console.log(document.getElementById('index'))
    }
  },
  components: {
    Header
  },
  mounted(){
    this.clientHeight = document.documentElement.clientHeight

  },
  watch:{
    clientHeight:function(){
      this.changeFixed(this.clientHeight)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
#index{
  height: 100%
}
</style>