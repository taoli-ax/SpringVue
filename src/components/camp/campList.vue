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
    </div>
</template>

<script>
import axios from 'axios';
import {mapActions,mapState} from 'vuex';
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
        ...mapState(['campList'])
    },
    mounted(){
        this.getCoh2();
    },
    methods:{
        ...mapActions(['getCoh2']),
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