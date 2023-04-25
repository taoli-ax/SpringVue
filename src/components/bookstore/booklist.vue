<template>
    <div>
        <h3>book list</h3>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>author</th>
                    <th>price</th>
                    <th>publisher</th>
                    <th>status</th>
                    <th>OP</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in bookData" :key="data._id" :class="{bgGrey:data.borrowed}">
                    <td>{{ data.name }}</td>
                    <td>{{ data.author }}</td>
                    <td>{{ data.price }}</td>
                    <td>{{ data.publisher }}</td>
                    <td>
                        <span v-if="data.borrowed" >已借出</span>
                        <button v-else @click="$emit('borrowBooks',data)">借阅</button>
                        
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script >
export default {
data(){
    return{
        
    }
},
props:{
    bookData:{
        type:Array,
        default:()=>[]
    }
    
}

}
</script>
<style scoped>

</style>