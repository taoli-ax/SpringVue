<template>
    <div>
        <h2>Counter:{{ counter }}</h2>
        <h3>newCounter:{{ newCounter }}</h3>
        <button class="add" @click="increment">+1</button>
        <input type="text" v-model="counter" />
        <button class="minus" @click="decrement">-1</button>
    </div>
</template>


<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState,mapGetters,mapMutations }=createNamespacedHelpers("counter");
// import {mapState,mapMutations,mapGetters} from 'vuex';
export default({
    computed:{
        ...mapState(['counter','a','b']),
        ...mapGetters(['newCounter'])
    },
    methods:{
       ...mapMutations(['increment','decrement']),
    
    }
});

</script>
<style scoped>

</style>