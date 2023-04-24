<template>
    <div>
        <h2>Counter:{{ count }}</h2>
        <button @click="increment">+1</button>
        <input type="text" v-model.lazy="count" />
        <button @click="decrement">-1</button>
    </div>
</template>


<script>
export default({
    data(){
        return {
            count:0
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