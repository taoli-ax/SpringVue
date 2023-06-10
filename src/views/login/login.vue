<template>
     <el-form
    :model="user"
    status-icon
    label-width="80px"
  >
  <el-form-item label="username" prop="username">
      <el-input v-model="user.username" />
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input v-model="user.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">Login</el-button>
      <!-- <router-link to="/register"><el-button @click=""> Sign Up</el-button></router-link> -->
    </el-form-item>

  </el-form>
    <!-- <router-link to="/register">sign up</router-link> -->
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            user:{
                username:'',
                password:''
            },
           
        }
    }, 
    methods: {
                async login(){
                    console.log('login')
                    const {data}=await axios({
                        url:'/User/login',
                        method:'post',
                        data:this.user
                    });
                    if(data.success){
                        this.$message({
                            message:'登录成功',
                            type:"success"
                        })
                        this.$router.push('/site')
                    }else{
                        this.$message.error("登录失败，请重试")
                    }
                }
            },
}
</script>
<style>
.el-form{
    width: 400px;
    margin: 200px auto;
}
</style>