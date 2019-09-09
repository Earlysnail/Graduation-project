<template>
 <div class="footer">
  <div>
      <el-row>
        <el-col>
        <component 
          v-bind:is="currentView">
        </component>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
import teacherCourse from './teacherCourse'
import historyRecord from './historyRecord'
import sendNodeManage from './sendNodeManage'
import invigilateExam from './invigilateExam'
import teacherInformation from './teacherInformation'
export default {
  data() {
    return {
        currentView: this.$route.params.type,
        allType: ['teacherCourse', 'historyRecord', 'invigilateExam', 'sendNodeManage','teacherInformation']
    };
  },
  methods: {
    checkPath(){ 
            let params = this.$route.params;
            let path = this.$route.matched[this.$route.matched.length - 2].path + "/teacherCourse";   
            if (this.allType.indexOf(params.type) == -1) {
                this.$router.push(path);
            } else {
              this.currentView = params.type;
            }                 
    }
  },
  watch: {
    $route(to, from) {
        // 对路由变化作出响应     
        this.checkPath();  
        console.log("publicList","from:"+from.path,"to:"+to.path)     
    }
  },
  mounted() {
     this.checkPath();
  },
  components: {
    teacherCourse,
    historyRecord,
    sendNodeManage,
    invigilateExam,
    teacherInformation
  }
};
</script>

<style>

</style>
