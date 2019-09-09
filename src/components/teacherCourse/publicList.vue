<template>
  <div class="teacherCourse">
  <div>
        <component v-bind:is="currentView"></component>
    </div>
  </div>
</template>

<script>
import sectionTable from './sectionTable'
import sectionOperator from './sectionOperator'
export default {
  data() {
    return {
        currentView: this.$route.params.teacher,
        allType: ['sectionTable', 'sectionOperator']
    };
  },
  methods: {
      checkPath(){
        let path = this.$route.matched[this.$route.matched.length - 2].path + "/sectionTable";
        let params = this.$route.params;
        if (this.allType.indexOf(params.teacher) == -1) {
            this.$router.push(path);
        } else {
            this.currentView = params.teacher;
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
      sectionTable,
      sectionOperator
  },
  mounted() {
     this.checkPath();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
