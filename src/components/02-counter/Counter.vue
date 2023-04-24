<template>
    <div>
        
        <showCounter :count="count"/>
        <setCounter @increment="increment" @decrement="decrement" @inputCount="inputCount"/>
        
    </div>
</template>

<script>
import setCounter from './SetCount.vue'
import showCounter from './ShowCounter.vue';
export default {
    data(){
        return {
            count:0
        }
    },
    components:{
        setCounter,
        showCounter
    },
    methods: {
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        },
        inputCount(Num){
            this.count=Num;
        }
       
    }
    
}
</script>
