
<template>
    <div class="common-layout">
        <el-container class="big-container">
            <el-header>Header</el-header>

            <el-container>
                <el-aside>
                    <sitebar></sitebar>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
                
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<script>
import sitebar from '../site/sideBar.vue';
export default {
    components:{
        sitebar
    }
}


</script>
<style>
    .big-container{
    /* display: inline-flex; */
    /* direction:vertical; */
    height: 100vh;
    text-align: center;
    }
    .el-main{
    line-height: 160px;
    background-color: lightcyan;
    }
    .el-header , .el-footer{
    line-height: 80px;
    background-color: lightskyblue;
    color: bisque;
    }

    .el-aside{
    line-height: 200px;
    background-color: lightblue;
    }
</style>

<!-- <script>
export default {
    // data(){
    //     return{
    //         name:"",
    //     }
    // },
    props:['name'],//简化写法
    // created(){
    //     this.name=this.$route.params.name;
    // }
}
</script>
<style>
#content{
    display: flex;  /* 使用flexbox布局 */
    flex-wrap: nowrap; /* 禁止元素换行 */
    justify-content: space-between; /* 侧边栏和主要内容之间留有空隙 */
}
.active{
    background-color: pink;
    font-weight: bold;
}
</style> -->