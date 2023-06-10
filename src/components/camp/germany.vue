<template>
    <div>
        <h1>germany commander</h1>
        <el-table :data=this.commanders_list style="width: 100%">
            <el-table-column prop="name" label="name" width="180px" />
            <el-table-column prop="description" label="description" width="580px" />
            <el-table-column prop="image" label="image"></el-table-column>
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <router-link :to="{path:'/site/updateGerman',query: scope.row }">
                        <el-button size="small" >Edit</el-button>
                    </router-link>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
      v-model:current-page="pageNation.pageNum"
      v-model:page-size="pageNation.pageSize"
      :page-sizes="[3, 5, 10, 15]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageNation.total"
      @size-change=""
      @current-change="changeCurrent"
    />
    </div> 

</template>
<script>
    import { createNamespacedHelpers } from 'vuex';
    const {mapState,mapMutations,mapActions}=createNamespacedHelpers('germany');
    export default{
        computed:{
            ...mapState(['commanders_list','pageNation'])
        },
        watch:{
            'pageNation.pageNum'(){
                this.getGermanCommanders();
        },
        },
        methods:{
            ...mapMutations(['responseData','changeCurrent']),
            ...mapActions(['getGermanCommanders'])
        },
        mounted(){
            this.getGermanCommanders();
        }
    }
</script>
