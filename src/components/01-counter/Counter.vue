<template>
    <div>
        <h2>Counter:{{ $store.state.counter }}</h2>
        <button @click="$store.commit('increment')">+1</button>
        <input type="text" v-model="this.count" />
        <button @click="$store.commit('decrement')">-1</button>
    </div>
</template>


<script>
export default({
    data(){
        return {
            count: this.$store.state.counter
        }
    },
    methods:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }
    }
});

</script>
<style scoped>

</style>