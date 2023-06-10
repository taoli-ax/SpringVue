<template>
    <el-form :inline="true" :model="commander" class="demo-form-inline">
        <el-form-item label="指挥官名称">
            <el-input v-model="commander.name" placeholder="whats name" />
        </el-form-item>
        <el-form-item label="描述">
            <el-input v-model="commander.description" placeholder="how many"></el-input>
        </el-form-item>
        <el-form-item label="头像">
            <el-input v-model="commander.image" placeholder="image address"></el-input>
        </el-form-item>
           

        <el-form-item>
            <el-button type="primary" @click="addGermanCommander">add</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            commander:{
                name:'',
                description:'',
                image:'',
                camp_id:1
            }

        }
    },
    methods:{
        async addGermanCommander(){
            const {data}=await axios({
                url:'/germanCommander/add',
                method:'post',
                data:this.commander
            });
            if(data.success){
                this.$router.push('/site/germany')
            }
        }
    }
}
</script>