<template>
  <div class="sendMessage">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="name"
      label="教师姓名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="email"
      label="教师邮箱"
      width="200">
    </el-table-column>
    <el-table-column
      prop="content"
      label="所有监考安排"
      width="500">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="sendEmail(scope.row)" type="text" size="small">发邮件</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
import axios from "../../api/index";
export default {
  name: "",
  data() {
    return {
       tableData: [{
          name: '王小虎',
          email: 'mwt_luoyang@126.com',
          content: '什么时间，什么地点，监考情况（作为邮件内容)'
        }, {
          name: '王小虎',
          email: 'mwt_luoyang@126.com',
          content: '什么时间，什么地点，监考情况 （作为邮件内容)'
        }]
    };
  },
  methods: {
    getData() {
      axios("get", "home/sendNodeManage/sendMessage", {})
        .then(res => {
          console.log(" res",res.data)
          this.tableData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendEmail(row) {
        let html = '<b>' + row.content + '</b>'
        axios("post", "home/sendNodeManage/sendMessage", {
          tableData:
          JSON.stringify({
            to: row.email,
            subject: '监考通知',
            html: html
          }) 
        })
        .then(res => {
          alert('发送成功')
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {},
  created() {
    this.getData();
    console.log(" this.getData")
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
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #f5f5f5;
}
</style>
