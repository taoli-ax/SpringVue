<template>
    <h1>american</h1>
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
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';
    const {mapState,mapMutations,mapActions}=createNamespacedHelpers('american');
    export default{
        computed:{
            ...mapState(['commanders_list'])
        },
        methods:{
            ...mapMutations(['responseData']),
            ...mapActions(['getAmericanCommanders'])
        },
        mounted(){
            this.getAmericanCommanders();
        }
    }
</script>
