<template>
    <div>
        <h1>germany commander</h1>
        <el-table :data=this.commanders_list style="width: 100%">
            <el-table-column prop="name" label="name" width="180px" />
            <el-table-column prop="description" label="description" width="580px" />
            <el-table-column prop="image" label="image"></el-table-column>
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default>
                    <el-button link type="primary" size="small" @click="">Detail</el-button>
                    <el-button link type="primary" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>
       
   
        <!-- <div>
            当前第{{ pageNation.pageNum }}页， 共{{ pageNation.pages }}页
        </div>
        <div>
            
            <select name="" id="" v-model="pageNation">
                <caption>选择每页条数</caption>
                <option value="">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
       
    
            
        </div>
        <div>
            <button @click="changeCurrentPage(1)">index page</button>
            <button @click="changeCurrentPage(pageNation.pageNum-1)">previous</button>

            <button @click="changeCurrentPage(pageNation.pageNum+1)">next</button>
            <button @click="changeCurrentPage(pageNation.pages)">end page</button>
        </div> -->
    </div>

</template>
<script>
    import { createNamespacedHelpers } from 'vuex';
    const {mapState,mapMutations,mapActions}=createNamespacedHelpers('germany');
    export default{
        computed:{
            ...mapState(['commanders_list'])
        },
        methods:{
            ...mapMutations(['responseData']),
            ...mapActions(['getGermanCommanders'])
        },
        mounted(){
            this.getGermanCommanders();
        }
    }
</script>
