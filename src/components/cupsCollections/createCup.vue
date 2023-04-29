<template>
    <div>
        <input type="text" v-model="cup.name">
        <input type="text" v-model="cup.brand">
        <button @click="$emit('create')">create</button>
    </div>
</template>
<script>
export default {
    props:{
        cup:{
            type:Object,
            default:()=>({})
        }
    }
}
</script>