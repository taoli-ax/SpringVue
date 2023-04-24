<template>
    <div id="app">
        <!-- <Counter2/> -->
        <book></book>
    </div>
</template>

<script>

import Counter2 from './components/02-counter/Counter.vue'
import book from './components/bookstore/book.vue'
export default ({
    name:"App",
    components:{
        Counter2,
        book
    }
})
</script>
