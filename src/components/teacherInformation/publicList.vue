<template>
  <div class="teacherInformation">
  <div>
        <component v-bind:is="currentView"></component>
    </div>
  </div>
</template>

<script>
import teacherInfoManage from './teacherInfoManage'
import showTeacherInfo from './showTeacherInfo'
export default {
  data() {
    return {
        currentView: this.$route.params.teacherInfo,
        allType: ['teacherInfoManage','showTeacherInfo']
    };
  },
  methods: {
      checkPath(){
        let path = this.$route.matched[this.$route.matched.length - 2].path + "/teacherInfoManage";
        let params = this.$route.params;
        if (this.allType.indexOf(params.teacherInfo) == -1) {
            this.$router.push(path);
        } else {
            this.currentView = params.teacherInfo;
        }
    }
  },
  watch: {
    $route(to, from) {
        // 对路由变化作出响应
        this.checkPath();
    }
  },
  components: {
      teacherInfoManage,
      showTeacherInfo
  },
  mounted() {
     this.checkPath();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
