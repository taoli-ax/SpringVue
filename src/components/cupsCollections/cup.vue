<template>
    <p>cup</p>
    <Search @searchByType="searchByType" ></Search>
    <CreateCup @create="create" :cup="cup"></CreateCup>
    <CupObject :cupForUpdate="cupForUpdate" @getCups="getCups"></CupObject>
    <CupList :cupListData="cupListData"  @deleteCup="deleteCup" @getUpdateCup="getUpdateCup"></CupList>
</template>

<script>
import axios from 'axios';
import CupList from './cupList.vue';
import CreateCup from './createCup.vue';
import CupObject from './updateCup.vue';
import Search from './search.vue';
export default {
    data(){
        return{
            page:
                {
                PageNum:1,
                PageSize:15
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
    CupObject,
    Search
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
        },
        async searchByType(searchData){
            console.log(searchData);
            this.page={...this.page,searchData};
            console.log("search data",searchData);
            
            //等待后端接口建设，后端PageNation接口需要加searchData对象
            const {data}=await axios({
                url:`/cups/pageNation2/${this.page.PageNum}/${this.page.PageSize}?${searchData.type}=${searchData.value}`,
                method:'post'
            })
            if(data.success){
                console.log(data)
                this.cupListData=data.data.list;
            }
            
        }
    }
    }            
        
    

</script>