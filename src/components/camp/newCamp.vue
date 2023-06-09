<template>
    <!-- <div>
        <h1>new Camp</h1>
        <label for="">camp : </label>
        <input type="text" v-model="coh2camp.camp">
        <label for="">commander_count</label>
        <input type="text" v-model="coh2camp.commander_count">
        <button @click="addOne(coh2camp)">add</button>
    </div> -->
    <el-form :inline="true" :model="coh2camp" class="demo-form-inline">
        <el-form-item label="阵营">
            <el-input v-model="coh2camp.camp" placeholder="what camp" />
        </el-form-item>
        <el-form-item label="指挥官数量">
            <el-input v-model="coh2camp.commander_count" placeholder="how many"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="addOne(coh2camp)">add</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';


const { mapActions }=createNamespacedHelpers("addcamp");
// import {mapActions} from 'vuex';

export default {
    data(){
        return{
            coh2camp:{
                camp:'',
                commander_count:0
            }
        }
    },
    methods:{
        ...mapActions(['addOne']),
        
    }
}
</script>