<template>
    <div>
        <label for="">query</label>
        <input type="text" v-model="searchData.value">
        <select v-model="searchData.type">
            <option value="name">by name</option>
            <option value="brand">by brand</option>
        </select>
        <button @click="$emit('searchByType',searchData)">search</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchData:{
                type:"",
                value:""

            }
        }
    }
}
</script>