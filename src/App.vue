<template>
    <div id="app">
        <!-- <Counter2/> -->
        <!-- <book></book> -->
        <!-- <Cup></Cup> -->
        <header class="color">Company Of Hero 2 Display</header>
        <main>
            <router-view></router-view>
        </main>
        <footer class="color">footer</footer>
    </div>
</template>



<script>
//  import Counter2 from './components/02-counter/Counter.vue'
// import book from './components/bookstore/book.vue'
// import Cup from './components/cupsCollections/cup.vue'
// export default ({
//     name:"App",
//     components:{
//         // Counter2,
//         book,
//         // Cup
//     }
// })
</script>

<style>
header{
    text-align: center;
    font-size: 40px ;;
}
main{
    display: flex;
    flex-grow: 1;
    
}
#app{
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.color{
    background-color: gray;
    height: 80px;
    text-align: center;
}
</style>
