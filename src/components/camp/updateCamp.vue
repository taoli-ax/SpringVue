<template>
    <div>
        <h1>update</h1>
        <label for="">id <input type="text" name="" id="" v-model="item.id"/></label>
        <br>
        <label for="">camp <input type="text" name="" id="" v-model="item.camp"/></label>
        <br>
        <label for="">commander_count <input type="text" v-model="item.commander_count"/></label>
        <br>
        <label for="">create_at <input type="text" v-model="item.create_at"/></label>
        
        <button @click="updateCamp">submit update</button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            item:{}
        }
    },
    mounted(){
        this.item=this.$route.query
    },
    methods:{
        async updateCamp(){
            const {data}=await axios({
                url: `/CoH2`,
                method: 'put',
                data:{
                    id:this.item.id,
                    camp:this.item.camp,
                    commander_count:this.item.commander_count,
                    create_at: Date.now()
                }
            })

            console.log("update: "+data)
        },
    }



}
</script>