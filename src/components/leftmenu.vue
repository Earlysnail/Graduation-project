<template>
  <div class="leftmenu">
    <div>
      <el-menu
        default-active="2"
        class = "el-menu-vertical-demo"
        background-color = "#f5f5f5"
        :router = "true"
      >
        <el-submenu index="/home/teacherCourse">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>课表管理</span>
          </template>
          <el-menu-item-group
          >
            <el-menu-item index="/home/teacherCourse/sectionTable">显示课表</el-menu-item>
            <el-menu-item index="/home/teacherCourse/sectionOperator">导入课表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/home/invigilateExam">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>监考管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/invigilateExam/intoInvigilateTable">导入监考</el-menu-item>
            <el-menu-item index="/home/invigilateExam/invigilateManage">监考安排</el-menu-item>
            <el-menu-item index="/home/invigilateExam/showInvigilateExamTable">查看监考表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/home/sendNodeManage">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>邮件通知</span>
          </template>
          <el-menu-item-group>
            <!-- <el-menu-item index="/home/sendNodeManage">人员信息</el-menu-item> -->
            <el-menu-item index="/home/sendNodeManage/sendMessage">发送通知</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/home/historyRecord">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>历史查询</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/historyRecord/showHistoryRecordTable">历史记录</el-menu-item>
            <el-menu-item index="/home/historyRecord/historyInvigilateTable">历史监考表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/home/teacherInformation">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>教师信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/teacherInformation/teacherInfoManage">信息添加</el-menu-item>
            <el-menu-item index="/home/teacherInformation/showTeacherInfo">教师详情</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/home/userManage">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/userManage/userManage">用户信息</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftmenu",
  data() {
    return {};
  },
  methods: {

  },
  watch: {
    '$route' (to, from) {
    // 对路由变化作出响应...
    }
  },
  components: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
