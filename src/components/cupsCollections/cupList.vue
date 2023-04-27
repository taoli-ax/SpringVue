<template>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>brand</th>
                <th>avatar</th>
                <th>OP</th>
            </tr>
        </thead>
        <tbody>
        
            <tr v-for="item in cupListData" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.brand }}</td>
                <!-- 动态绑定头像 :src -->
                <td><img :src="'http://localhost:81/img/avatar/'+item.avatar"></td>
                <td><button @click="$emit('deleteCup',item.id)">delete</button></td>
   
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