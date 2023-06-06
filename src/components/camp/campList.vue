<template>
    <div>
        <h1>camp list</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>camp</th>
                    <th>commander_count</th>
                    <th>created_at</th>
                    <th>OP</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in this.campList" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.camp }}</td>
                    <td>{{ item.commander_count }}</td>
                    <td>{{ item.create_at }}</td>
                    <!-- <th><button @click="$router.push('/site/updateCamp')">update</button></th> -->
                    <!-- <th><router-link :to="{path:'/site/updateCamp', params:{item:item}}">update</router-link></th> -->
                    <th><button><router-link :to="{path:'/site/updateCamp', query:item}">update</router-link></button></th>
                    <th><button @click="deleteCamp(item.id)">delete</button></th>
                </tr>
            </tbody>
        </table>
        <div>
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
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import {mapActions,mapState,mapMutations} from 'vuex';
export default {
    data(){
        return{
        //     page:{
        //         pageNum:1,
        //         pageSize:20
        //     },
        //     campList:[]
        }
    },
    computed:{
        ...mapState(['campList','pageNation'])
    },
    mounted(){
        this.getCoh2();
    },
    watch:{
        'pageNation.pageNum'(){
                console.log('监听到变化？')
                this.getCoh2();
        },
        
    },
    methods:{
        ...mapMutations(['changeCurrentPage']),
        ...mapActions(['getCoh2','previous','next']),
        // async getCoh2(){
        //     const {data}=await axios({
        //         url:`/CoH2/${this.page.pageNum}/${this.page.pageSize}/`,
        //         method:'get',
        //     });
        //     if(data.success){
        //         this.campList=data.data.list
        //     }
        // },
        
        async deleteCamp(id){
            if(confirm(`are u sure delete ${id}?`)){
                const {data}=await axios({
                url:`/CoH2/${id}`,
                method:'delete'
            });
            if(data.success){
                this.getCoh2();
            }
            }
            
        }

        
    }
    
}
</script>