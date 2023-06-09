<template>
    <el-form :inline="true" :model="commander" class="demo-form-inline">
        <el-form-item label="指挥官名称">
            <el-input v-model="commander.name" placeholder="whats name" />
        </el-form-item>
        <el-form-item label="描述">
            <el-input v-model="commander.description" placeholder="how many"></el-input>
        </el-form-item>
        <el-form-item label="头像">
            <el-upload
                v-model=commander.image
                class="upload-demo"
                action="#"
                :on-success="handleSuccess"
            >
                <el-button type="primary">Click to upload</el-button>
           
            </el-upload>
        </el-form-item>
           

        <el-form-item>
            <el-button type="primary" @click="">add</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';


const { mapActions }=createNamespacedHelpers("newGermanCommander");

export default{
    data(){
        return{
            commander:{
                name:'',
                description:'',
                image:''
            }

        }
    },
    methods:{
        handleSuccess(response,uploadFile,uploadFiles){
            console.log(response)
        }
    }
}
</script>