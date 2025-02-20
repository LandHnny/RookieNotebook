import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
//https://blog.csdn.net/lizhong2008/article/details/143111622
// https://vite.dev/config/
export default defineConfig({
  // 查看 插件 API 获取 Vite 插件的更多细节 https://www.vitejs.net/guide/api-plugin.html
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    // resolve.alias: 更轻松地为import或require某些模块创建别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // css预处理器
  css: {
    preprocessorOptions: {
      // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
      // 给导入的路径最后加上 ;
      scss: {
        additionalData: '@import "@/assets/styles/global.scss";',
      },
    },
  },
  server: {
    https: false, // 是否开启 https
    open: true, // 是否自动在浏览器中打开
    port: 8001, // 端口号
    host: "0.0.0.0",
    // 跨域代理
    // proxy: {
    //   '/api': {
    //     target: "http://localhost:3000",  // 后台接口
    //     changeOrigin: true,
    //     // secure: false, // 如果是https接口，需要配置这个参数
    //     // ws: true, //websocket支持
    //     // 截取api，并用api代替
    //     // rewrite: (path) => path.replace(/^\/api/, "/api"),
    //   }
    // },
    hmr: {
        overlay: false, // 屏蔽服务器报错
    },
  },
})