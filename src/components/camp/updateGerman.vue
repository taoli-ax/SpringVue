<template>
    <el-form
    ref="ruleFormRef"
    :model="item"
    status-icon
    label-width="120px"
    class="demo-ruleForm"
  >
  <el-form-item label="id" prop="">
      <el-input v-model="item.id" type="" autocomplete="off" />
    </el-form-item>
    <el-form-item label="name" prop="">
      <el-input v-model="item.name" type="" autocomplete="off" />
    </el-form-item>
    <el-form-item label="description" prop="">
      <el-input
        v-model="item.description"
        type=""
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="image" prop="age">
      <el-input v-model="item.image" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="update()"
        >Submit</el-button
      >
      <el-button @click="">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            item:{}
        }
    },
    mounted(){
            this.item=this.$route.query;
    
    },
    methods:{
        async update(){
        const {data}=await axios({
            url:'/germanCommander/update',
            method:'put',
            data:this.item,
        })
        console.log(data);
        if(data.success){
            this.$router.push('/site/germany')
        }
    }
    }


}
</script>