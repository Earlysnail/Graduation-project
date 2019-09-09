<template>
  <div class="userManage">
    <button @click="addUser">添加用户</button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="user_name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="user_right" label="权限" width="100"></el-table-column>
      <el-table-column prop="user_email" label="邮箱" width="200"></el-table-column>
      <el-table-column prop="user_password" label="密码" width="300"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope" > 
          <el-button @click="alterUser(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="deleteUser1(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

   <el-dialog title="修改信息" :visible.sync="isShowForm2">
    <el-form :model="form">
        <el-form-item label="姓名" >
        <el-input v-model="form.user_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限" >
        <el-input v-model="form.user_right" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" >
        <el-input v-model="form.user_email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" >
        <el-input v-model="form.user_password" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="isShowForm = false">取 消</el-button>
        <el-button type="primary" @click="confirmAlter">确 定</el-button>
    </div>
    </el-dialog>
       <el-dialog title="添加用户" :visible.sync="isShowForm">
    <el-form :model="form">
        <el-form-item label="姓名" >
        <el-input v-model="form.user_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限" >
        <el-input v-model="form.user_right" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" >
        <el-input v-model="form.user_email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" >
        <el-input v-model="form.user_password" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="isShowForm = false">取 消</el-button>
        <el-button type="primary" @click="confirmAdd">确 定</el-button>
    </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "../../api/index";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      tableData: [],
      form: {
          user_id: '',
          user_name: '',
          user_password: '',
          user_email: '',
          user_right: ''
      },
      isShowForm: false,
      isShowForm2: false
    };
  },
  methods: {
    ...mapActions(['register', 'deleteUser']),
    getData() {
      axios("get", "home/userManage/userManage", {})
        .then(res => {
          this.tableData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addUser(){
        this.isShowForm = true   
    },
    confirmAdd(){
        this.register({ user_name: this.form.user_name, user_password: this.form.user_password, user_email: this.form.user_email,user_right: this.form.user_right}).then(
            (res) => {
                this.$message({
                  message: '添加成功',
                  type: 'success'
                });
                this.getData();
            }
        ).catch((err)=>{
            console.log(err)
            this.$message.error('添加失败')
        });
        this.isShowForm = false
    },
    alterUser(row){
        this.form = row;
        this.deleteUser({ user_name: this.form.user_name, user_password: this.form.user_password, user_email: this.form.user_email,user_right: this.form.user_right}).then((res) => {
            this.getData();
        })
        this.isShowForm2 = true
    },
    confirmAlter(){
        
        this.register({ user_name: this.form.user_name, user_password: this.form.user_password, user_email: this.form.user_email,user_right: this.form.user_right}).then(
         (res) => {
            this.$message({
              message: '修改成功',
              type: 'success'
            });
              this.getData();
            }
         ).catch((err)=>{
           console.log(err)
           this.$message.error('修改失败！');
         });
        this.isShowForm2 = false
    },
    deleteUser1(row){
         if(row.user_name == 'admin'){
            alert("管理员账户，不可删除");
            return 
        }
        this.deleteUser({ user_name: row.user_name, user_password: row.user_password, user_email: row.user_email,user_right: row.user_right}).then(
            (res) => {
          this.$message({
            message: '删除成功',
            type: 'success'
          }); 
          location.reload() 
        }).catch((err) => {
           this.$message.error('删除失败！');
            console.log(err)
        })
        
    },
  },
  created() {
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cell-edit-input .el-input,
.el-input__inner {
  width: 100px;
}
.cell-icon {
  cursor: pointer;
  color: #fff;
}
</style>
