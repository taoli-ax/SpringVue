<template>
    <p>cup</p>
    <CreateCup @create="create" :cup="cup"></CreateCup>
    <CupObject :cupForUpdate="cupForUpdate" @getCups="getCups"></CupObject>
    <CupList :cupListData="cupListData"  @deleteCup="deleteCup" @getUpdateCup="getUpdateCup"></CupList>
</template>

<script>
import axios from 'axios';
import CupList from './cupList.vue';
import CreateCup from './createCup.vue';
import CupObject from './updateCup.vue';
export default {
    data(){
        return{
            page:
                {
                PageNum:1,
                PageSize:35
            },
            cupListData:[],
            cup:{
                name:"",
                brand:""
            },
            cupForUpdate:{
                name:"",
                brand:""
            }
        }
    },
    components:{
    CupList,
    CreateCup,
    CupObject
},
    mounted(){
        this.getCups();
    },
    methods:{
        async getCups(){
            const response=await axios({
                url:`/cups/pageNation1/${this.page.PageNum}/${this.page.PageSize}`,
                method:'get'
            });
            this.cupListData=response.data.data.list;
            console.log("首页：",response);
        },
        async deleteCup(id){
            console.log(id);
            const {data}=await axios({
                url:`/cups/${id}`,
                method:"delete"
            });

            console.log("delete rows:",n.data);
        },
        async create(){
            console.log("像后端传递："+this.cup);
            const {data}=await axios({
                url: '/cups',
                method: 'post',
                data:this.cup
            });
            if(data.success){
                this.getCups();
            }
            console.log(data);

        },
        getUpdateCup(Object){
            console.log(Object);
            this.cupForUpdate=Object;
        }
    }
    }            
        
    

</script>