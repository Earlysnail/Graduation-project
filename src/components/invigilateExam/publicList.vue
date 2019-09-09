<template>
  <div class="invigilateExam">
  <div>
        <component v-bind:is="currentView"></component>
    </div>
  </div>
</template>

<script>
import invigilateManage from './invigilateManage'
import intoInvigilateTable from './intoInvigilateTable'
import showInvigilateExamTable from './showInvigilateExamTable'
export default {
  data() {
    return {
        currentView: this.$route.params.invigilate,
        allType: ['invigilateManage', 'intoInvigilateTable' ,'showInvigilateExamTable']
    };
  },
  methods: {
      checkPath(){
        let path = this.$route.matched[this.$route.matched.length - 2].path + "/showInvigilateExamTable";
        let params = this.$route.params;
        if (this.allType.indexOf(params.invigilate) == -1) {
            this.$router.push(path);
        } else {
            this.currentView = params.invigilate;
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
      invigilateManage,
      intoInvigilateTable,
      showInvigilateExamTable
  },
  mounted() {
     this.checkPath();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

