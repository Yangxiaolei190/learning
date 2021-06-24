/*
 * @Description: 路由管理
 * @Author: m.justin.yang@lookout.com
 * @Date: 2021-06-22 11:35:46
 * @LastEditors: m.justin.yang@lookout.com
 * @LastEditTime: 2021-06-24 11:15:08
 * @FilePath: \vue-deep\src\router\index.js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import home from './home'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home/homePage'
  },
  ...home
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


/**
 * vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
 * 如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面
 * 例如：
    histroy:
      localhost:8080/user/list
    hash:
      localhost:8080/#/user/list
  * base
    类型: string
    默认值: “/”
    应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 “/app/”
 */