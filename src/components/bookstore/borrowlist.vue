<template>
    <div>
        <h3>borrow list</h3>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>author</th>
                    <th>price</th>
                    <th>publisher</th>
                    <th>back</th>
                    <th>OP</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in filterData" :key="data._id" :class="{bgGrey:data.back}">
                    <td>{{ data.name }}</td>
                    <td>{{ data.author }}</td>
                    <td>{{ data.price }}</td>
                    <td>{{ data.publisher }}</td>
                    <td>
                        <span v-if="data.back" >已归还</span>
                        <button v-else>未归还</button>
                    </td>
                    <td>
                        <button v-if="data.back" @click="$emit('deleteBorrowData',data._id)">delete</button>
                        <button v-else @click="$emit('returnBook',data)">归还</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props:{
        borrowData:{
            type:Array,
            default:()=>[]
        }
    },
    computed:{
        filterData(){
            return this.borrowData.filter(item=>item.status)
        }
    }
}
</script>

<style scoped>

</style>