
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