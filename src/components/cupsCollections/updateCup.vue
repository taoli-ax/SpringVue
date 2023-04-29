<template>
    <div>
        <label>cup name</label>
        <input type="text" v-model="cup.name">
        <label>cup brand</label>
        <input type="text" v-model="cup.brand">
        <button @click="updateCup">update</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props:{
        cupForUpdate:{
            type:Object,
            default:()=>({})
        }
    },
    data(){
        return{
            cup:{},
        }
    },
    watch:{
        cupForUpdate(val){
            this.cup={...val};
        }
    },
    methods:{
        async updateCup(){
            const {data}=await axios({
                url:'/cups',
                method:'put',
                data:this.cup
            });
            console.log("更新结果"+data);
            if(data.success){
                this.$emit('getCups');
            }
            console.log(data);
        }
    }
}
</script>