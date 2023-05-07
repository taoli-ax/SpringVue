
### 重大更新  路由系统改变了原来的引入子组件方式
**更改前：**
```javascript
// App.vue
<template>
    <Cup></Cup>
</template>
<script>
    import Cup from './components/cupsCollections/cup.vue'
    export default ({
        name:"App",
        components:{
            Cup
        }
    })
</script>
```
**更改后：**
```javascript
// App.vue
<template>
    <router-view></router-view>
</template>
```
### router初始化结构

- `router.index.js`导入child component和path
- `main.js`导入 `App.vue`
- `App.vue`加入vue组件  `router-view`

- 总结：`router-view`--> `App.vue`-->`main.js`

**知识点：lazy loading**
提前加载使用场景：需要提前加载，不让用户等待，一打开页面就加载了  
懒加载：触发的时候才加载，否则不会主动加载  
`component: ()=>import('../views/login/login.vue')`


**知识点 vue-router的组件**
- router-link to='/path' 或 router-link :to="{path:'/path'}" 或 router-link :to="{name:'pathName'}"
- router-link tag='button' 解析为button
- router-link active-class='cssClass' 点击激活指定样式
- $router.push('/path') 或 $router.push({name:'pathName'})
- $router.go(1) 偏僻的用法
- $router.replace 没有历史记录，替换为当前页面


**知识点：动态路由**
-  `path: '/site/:name'` :name可以传递任何值,name本身是自定义的
- 很有用哦，可以获取url传递的值


**小技巧：如果要简化显示,就用data自定义变量**
例如：
```javascript
    data(){
        return{
            name:""
        }
    },
    created(){
        this.name=this.$route.params.name;
    }
```

简化写法用`props`
在`router.index.js`中添加`props:true`,然后在子组件site中接收`props:['name']`  
```javascript

    {
    path: '/site/:name',
    name:'site',
    props:true,
    component:()=>import('../views/site/site.vue')
  }
```

```javascript
    props:['name']

```


**收获：一个页面的写作套路**  
main下包含aside和section
aside作为侧栏
section作为正文


**知识点：嵌套路由**
```javascript
    //router.index.js
    {
        path:'',
        component:,
        children:[
            {
                path:'xxx',
                component:()=>import('xxx')
            }
        ]
    }
```

**技巧：确保代码一致，否则会浪费时间**


**技巧：hashHistory VS History**
hash是纯前端，不会发送请求给后端
历史模式，有时候会发送请求给后端


**bug fix**
vite.config.js中的跨域转发要写springBoot的路径
例如 后端定义了
```java
@RequestMapping("/CoH2")
```
那么在vite.config.js中配置
```javascript
proxy:{
    '/CoH2':{
        target: 'http://localhost:81',	//实际请求地址
        changeOrigin: true,
      }
}
```

**独立完成的经验**
路由跳转页面：  
方法一：`$router.push('/site/updateCamp')`  
方法二：`<router-link :to="{path:'/site/updateCamp', query:item}">update</router-link>`

目标页面引用：  
`this.$route.query`  

**注意**
传递的如果是对象，query后面直接写item,不需要再`query:{item:item}`,会出现无法引用的情况

如果需要传递路径参数
可以在router.index.js中定义`path: /updateCamp/:id`,那么在组件中需要传递`params:{id:item.id}`