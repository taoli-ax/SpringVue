<template>
    <p>cup</p>
    <CupList :cupListData="cupListData"></CupList>
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
                PageSize:5
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
                method:'get',
                
            });
            this.cupListData=response.data.data.list;
            console.log(response);
        }
    }
}
</script>