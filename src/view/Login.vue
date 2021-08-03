<template>
<div class="login-form">
<el-form :model="loginForm">
  <el-form-item label="用户名">
    <el-input v-model="loginForm.userName"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password" v-model="loginForm.password"></el-input>
  </el-form-item>
</el-form>
  <el-button @click="login">确认</el-button>
</div>

</template>

<script>
import axios from "axios";

export default {
  name: "Login.vue",
  data()
  {
    return{
      loginForm:{
        userName:'',
        password:'',
      }
    }
  },
  methods:{
    // 愚蠢的方式
    login()
    {
      axios({
        method:'post',
        // 除了直接写到url里，我拿axios一点办法也没有
        url:'/validateUser?userName='+this.loginForm.userName+'&password='+this.loginForm.password,
      }).then((resp)=>{
        this.$alert(resp.data)
      })
    }
  }

}
</script>

<style scoped>
.login-form{
  text-align: center;
}
</style>