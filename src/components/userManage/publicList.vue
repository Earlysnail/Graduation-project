<template>
  <div class="userManage">
  <div>
        <component v-bind:is="currentView"></component>
    </div>
  </div>
</template>

<script>
import userManage from './userManage'
export default {
  data() {
    return {
        currentView: this.$route.params.user,
        allType: ['userManage']
    };
  },
  methods: {
      checkPath(){
        let path = this.$route.matched[this.$route.matched.length - 2].path + "/userManage";
        let params = this.$route.params;
        if (this.allType.indexOf(params.user) == -1) {
            this.$router.push(path);
        } else {
            this.currentView = params.user;
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
      userManage
  },
  mounted() {
     this.checkPath();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
