<template>
    <p>cup</p>
    <CupList :cupListData="cupListData"  @deleteCup="deleteCup"></CupList>
</template>

<script>
import axios from 'axios';
import CupList from './cupList.vue';
export default {
    data(){
        return{
            page:
                {
                PageNum:1,
                PageSize:35
            },
            cupListData:[]
        }
    },
    components:{
        CupList
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
            console.log("delete rows:",data);
            if(data.success){
                this.getCups();
            }
        }
    }
}
</script>