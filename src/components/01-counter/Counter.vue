<template>
    <div>
        <h2>Counter:{{ counter }}</h2>
        <button @click="increment">+1</button>
        <input type="text" v-model="counter" />
        <button @click="$store.commit('decrement')">-1</button>
    </div>
</template>


<script>
import {mapState,mapMutations} from 'vuex';
export default({
    computed:{
        ...mapState(['counter','a','b'])
    },
    methods:{
       ...mapMutations(['increment','decrement']),
    
    }
});

</script>
<style scoped>

</style>