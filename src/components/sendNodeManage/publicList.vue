<template>
  <div class="sendMessage">
  <div>
        <component v-bind:is="currentView"></component>
    </div>
  </div>
</template>

<script>
import sendMessage from './sendMessage'

export default {
  data() {
    return {
        currentView: this.$route.params.sendNode,
        allType: ['sendMessage']
    };
  },
  methods: {
      checkPath(){
        let path = this.$route.matched[this.$route.matched.length - 2].path + "/sendMessage";
        let params = this.$route.params;
        if (this.allType.indexOf(params.sendNode) == -1) {
            this.$router.push(path);
        } else {
            this.currentView = params.sendNode;
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
    sendMessage
  },
  mounted() {
     this.checkPath();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
