# 学习心得

### 安装vue的步骤

1. 安装npm >16的版本
2. 卸载旧版本脚手架 `npm uninstall @vue/cli`
3. 安装 脚手架 `npm install -g @vue/cli`
4. 启动新工程 ` npm install vue@3.0.0`
5. 按照指引
   1. `cd projectFolder`
   2. `npm install`
   3. `npm run dev`
      ps: 如果太慢，请设置淘宝镜像 `npm config get registry http://registry.npmmirror.com`

### 计数器

* `br`
* 父子组件传值,v-bind绑定 + props接收

  ```javascript
  <!--父组件-->
  <childComponent :count="count"></childComponent>
  ```
  ```javascript
  <!--子组件-->
  <p>{{count}}</p>


  export default{
     props:['count']
  }

  ```
* 父子组件传递方法：父组件定义方法并传递方法 `@fun`，子组件在执行时通过 `$emit()`调用父组件方法

  ```javascript
      <!--父组件-->
      <childComponent @fun1="fun1"></childComponent>

      data(){
         return{
            count:""
         }
      }
      method:{
         fun1(){},
         inputValue(Num){
            this.count=Num;
         }
      }
  ```
  ```javascript
      <!--子组件-->
      <button @click="$emit('fun1')"></button>
      <input type='text' v-model="count" @change="$emit('fun2')"/>


      data(){
         return{
            count:""
         }
      }


  ```


### Branch:Book Library

1. book父组件页面布局
   borrow list 和 book list为子组件
2.动态组件 keep-alive 
`keep-alive`的动态组件`component`很巧妙的绑定了`currentTab`,切换由点击事件的赋值操作`@click='currentTab="BookList"'`
而实现自由切换两个子组件
完整代码见 init_book_library分支


### Branch:BookLibrary-bookList
1. vue绑定样式 ，直接绑定一个对象到class属性，同时也是v-bind的用法
   ```javascript
   <tr :class='{myColor:true}'></tr>

   <style>
      .myColor{
         background-color:grey
      }
   </style>
   ```
2. 关于渲染，不是在上一级标签渲染下一级，而是在要被渲染的标签本身放入v-for
   ```javascript
      <tbody>
         <tr v-for="data in bookData" id="data._id">
            <td>{{data.name}}</td>
         </tr>
      </tbody>
   
   ```



### Branch:bookList_pass_variable_to_borrowList
##### 手动实现需求效果，bookList 点击借阅，borrowList中添加一条对应的数据，同时，bookList更改状态为已借出

- {...book} 继承并添加
- {...book,back:false}添加属性
- {...book,_id:this.borrow++}，模拟自增，如果book中也有_id,如果再在后面加上_id属性，则会覆盖之前的_id
- {...book,bookId:book._id} 模拟外键效果，引用book的属性为新对象的属性
  
**难点：向上传递事件,子组件向父组件传值**
- 以下的代码实现了父组件传方法到子组件以供子组件使用，子组件在执行@click时调用方法并传递参数item
   ```javascript
      <component @borrowBook="borrowBook"></component>

      borrowBook(book){
         this.borrowData.push({...book})
      }
   ```
   ```javascript
      <button @click="$emit('borrowBook',item)"></button>
   ```
- debugger放在代码中，然后浏览器在运行时会停在此处



### Branch: returnBook
**子组件用$emit()向父组件提出需求**
- {...borrow}如果想要删除属性，但是没有找到方法，其实可以用array.map()来循环和修改


### deleteBorrowData
删除借阅记录，修改status值
- 老朋友filter(item=>{})
- computed 计算属性，可以计算 props中的值
- 如果status=0或1，那么filter(item=>item.status) ，表示返回item.status==1的值


啰嗦一下，css
尽量别用scoped，有时候限制不住
尽量用单独文件引入，id，class命名 限制使用范围



---

## 服务器与前端

- 还记得如何启动express项目吗？ node ./app.js
- 还记得windows如何启动MongoDB吗？ 启动service里的服务
- 还记得如何修改端口号吗，app.listen(3000,)这里修改
  
axios get请求 用params 但后端要能接受才行
```javascript
   const response=await axios({
                url:`/cups/pageNation1`,
                method:'get',
                params:{
                  PageNum:1,
                  PageSize:5
                }
            });
         
```
发出的请求是 `localhost:3030/cups/pageNation1?PageNum=1&PageSize=5`

```java
    @GetMapping("/pageNation1/{PageNum}/{PageSize}")
    public Result PageNation1(@PathVariable("PageNum") Integer PageNum,@PathVariable("PageSize") Integer PageSize){}
```
后端会报错，不支持Get或Post请求，这就是axios的不对了，具体看情况，有空再说，先睡了



ES6 `axios().then(response=>{})`
ES7 `const response=await axios()`

**配置axios跨域**
- vite.config.js 不用加rewrite()就访问成功了
  ```javascript
    resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
   },
   server: {
      open: true,//启动项目自动弹出浏览器
      port: 3030,//启动端口
      proxy: {
         '/cups': {
         target: 'http://localhost:81',	//实际请求地址
         changeOrigin: true,
         
         },
      }
   }
  
  ```


**脑子里少根弦，传值一定要$('')吗，v-model别忘了**

---

**技能点：**
响应的结果自动获取 {data},不必再用`response.data`
```javascript
const {data}=axios({url:'...',method:'post'})
console.log(data)// 1
```

**技能点：**
删除请求之后，还有需要再刷新页面，这个需求怎么完成？
师：请求完成并成功删除之后，再次发送`getCups()`
学：妙！，我本以为要在后端delete接口添加代码。。。

```javascript
   const {data} = axios({url:'delete/id', method:'post'})
   if(data.success){
      this.getCups();
   }
```


=======
- **技能点** v-model双向绑定时，同时修改了Props传递过来的值，怎么解耦？
```javascript
   props:['cupForUpdate'],
   data(){
      return{
          cup:this.cupForUpdate
      }
   }
```
- **data只加载一次怎么办？用watch**
```javascript
   props:['cupForUpdate'],
   data(){
      return{
         cup:{}
      }
   },
   watch:{
      cupForUpdate(val){
         this.cup=val
      }
   }
```


## bug fix
当 axios发送delete请求时，后端崩溃` Request method 'DELETE' not supported`
前端代码是：`axios({url:'',method='post'})`
原因：`cups/delete/${id}`,不符合后端定义 `/{id}`
解决：请检查 Url是否匹配后端，尤其是RESTful风格的
---

**当心自动填充代码的({})** 