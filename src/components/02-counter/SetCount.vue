<template>
        <div>
            <button @click="$emit('increment')">+1</button>
            <input type="text" v-model="count" @change="$emit('inputCount',count)">
            <button @click='$emit("decrement")'>-1</button>
        </div>
</template>
<script>
export default {
    data(){
        return{
            count:""
        };
    }
};

</script>
