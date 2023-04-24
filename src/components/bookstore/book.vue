<template>
    <div id="container">
        <header></header>
            <main >
                <aside>
                    <ul>
                        <li><a href="#" @click.prevent="currentTab='borrowList'">Book Shelf</a> </li>
                        <li><a href="#" @click.prevent="currentTab='bookList'">Borrow/Return</a> </li>
                    </ul>
                </aside>
                <section>
                        <keep-alive>
                            <component :is="currentTab">
                            </component>
                        </keep-alive>
                </section>
            </main>
        <footer></footer>
    </div>
</template>

<script>
import bookList from './booklist.vue';
import borrowList from './borrowlist.vue';
export default {
    data(){
        return{
            currentTab:'bookList',
           
        }
    },
    components:{
        bookList,
        borrowList
    },


}
</script>
<style>
main{
    display: flex;
    background-color: bisque;
    flex-grow: 1
}
#container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
};

header,footer{
    height: 80px;
    background-color: #eeeeee;
    
};

aside{
width: 200px;
text-align: center;
}

</style>
