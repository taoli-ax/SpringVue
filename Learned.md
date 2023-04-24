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
