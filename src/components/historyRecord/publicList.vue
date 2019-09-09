<template>
  <div class="histroyRecord">
    <div>
      <component v-bind:is="currentView"></component>
    </div>
  </div>
</template>

<script>
import showHistoryRecordTable from './showHistoryRecordTable';
import historyInvigilateTable from './historyInvigilateTable';
export default {
  data() {
    return {
      currentView: this.$route.params.history,
      allType: ['showHistoryRecordTable', 'historyInvigilateTable']
    }
  },
  methods: {
    checkPath(){
        let path = this.$route.matched[this.$route.matched.length - 2].path + "/showHistoryRecordTable";
        let params = this.$route.params;
        if (this.allType.indexOf(params.history) == -1) {
            this.$router.push(path);
        } else {
            this.currentView = params.history;
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
    showHistoryRecordTable,
    historyInvigilateTable
  },
  mounted() {
     this.checkPath();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
