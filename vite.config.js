import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
      '/CoH2':{
        target: 'http://localhost:81',	//实际请求地址
        changeOrigin: true,
      },
      '/germanCommander':{
        target: 'http://localhost:81',	//实际请求地址
        changeOrigin: true,
      },
      '/americanCommander':{
        target:'http://localhost:81',
        changeOrigin:true,
      },
      '/britishCommander':{
        target:'http://localhost:81',
        changeOrigin:true,
      },
      '/sovietCommander':{
        target:'http://localhost:81',
        changeOrigin:true,
      },
      '/User':{
        target:'http://localhost:81',
        changeOrigin:true,
      },
      
    }
  },
  script:{
    build:'vite build',
    preview:'vite preview'
  }


})
