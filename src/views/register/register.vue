<template>
    <div>
    <h1>register</h1>
    <button @click="register">register submit</button>
    </div>
</template>

<script>

export default {

    methods:{
        register(){
            this.$router.push('/register_success');
        }
    }
}
</script>
