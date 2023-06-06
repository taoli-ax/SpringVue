<template>
    <div>
        <h1></h1>
        <div>
            <p>welcome, {{name}}</p>
        </div>
        <div id="content">
            <aside>
                <dl>
                    <dt>阵营</dt>
                    
                    <dd><router-link active-class="active" to="/site/campList">阵营列表</router-link></dd>
                    <dd><router-link active-class="active" to="/site/newCamp">新增阵营</router-link></dd>
                </dl>

                <dl>
                    <dt>指挥官</dt>
                    <dd>防御学说</dd>
                    <dd>装甲突击学说</dd>
                </dl>

                <dl>
                    <dt>地图</dt>
                    <dd><router-link to="/site/counter">Counter</router-link></dd>
                    <dd>库尔斯克会战</dd>
                  
                </dl>
            </aside>
            <section>
                <router-view></router-view>
            </section>
        </div>
        
    </div>
</template>

<script>
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
</style>