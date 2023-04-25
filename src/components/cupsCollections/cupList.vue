<template>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>brand</th>
            </tr>
        </thead>
        <tbody>
        
            <tr v-for="item in cupListData" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.brand }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props:{
        cupListData:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>