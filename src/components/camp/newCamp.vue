<template>
    <div>
        <h1>new Camp</h1>
        <label for="">camp : </label>
        <input type="text" v-model="coh2camp.camp">
        <label for="">commander_count</label>
        <input type="text" v-model="coh2camp.commander_count">
        <button @click="addOne(coh2camp)">add</button>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';


const { mapActions }=createNamespacedHelpers("addcamp");
// import {mapActions} from 'vuex';

export default {
    data(){
        return{
            coh2camp:{
                camp:'',
                commander_count:0
            }
        }
    },
    methods:{
        ...mapActions(['addOne']),
        
    }
}
</script>