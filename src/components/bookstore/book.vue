<template>
    <div id="container">
        <header></header>
            <main >
                <aside>
                    <ul>
                        <li><a href="#" @click.prevent="currentTab='bookList'">Book Shelf</a> </li>
                        <li><a href="#" @click.prevent="currentTab='borrowList'">Borrow/Return</a> </li>
                    </ul>
                </aside>
                <section>
                        <keep-alive>
                            <component :is="currentTab"  :bookData="bookData" 
                            :borrowData="borrowData" @borrowBooks="borrowBooks" @returnBook="returnBook">
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
            currentTab:'',
            bookData:[{
            _id:1,
            name:'hello world',
            author:'tx',
            price:99,
            publisher:'xxx.pou',
            borrowed:false
        },
        {
            _id:2,
            name:'vue practice',
            author:'ijs',
            price:38,
            publisher:'abc',
            borrowed:false
        },{
            _id:3,
            name:"上帝",
            author:"djj",
            price:99,
            publisher:'ddf',
            borrowed:true,
        },{
            _id:4,
            name:"安达曼人",
            author:"33e",
            price:99,
            publisher:'eed',
            borrowed:true,
        }
    ],
        borrowData:[{
            _id:1,
            bookId:3,
            name:"上帝",
            author:"djj",
            price:99,
            publisher:'ddf',
            borrowed:true,
            back:false,
            status:1
        },{
            _id:2,
            bookId:4,
            name:"安达曼人",
            author:"33e",
            price:99,
            publisher:'eed',
            borrowed:true,
            back:false,
            status:1
        }],
        borrowId:2
        }
    },
    components:{
        bookList,
        borrowList
    },
    methods:{
        borrowBooks(book){
            // debugger
            this.borrowData.push({
                ...book,
                bookId:book._id,
                _id:this.borrowId++,
                borrowed:true,
                back:false,
                status:1
            });
            book.borrowed=true;
        },
        returnBook(borrow){
            borrow.back=true;
            this.bookData=this.bookData.map(item=>{
                if(item._id==borrow.bookId){
                    item.borrowed=false;
                }
                return item;
            })
        }
    }


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
th,td{
    padding: 10px 30px;

}
.bgGrey{
    background-color: grey;
}
</style>
