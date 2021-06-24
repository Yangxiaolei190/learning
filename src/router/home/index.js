/*
 * @Description: 主页有关路由模块
 * @Author: m.justin.yang@lookout.com
 * @Date: 2021-06-22 11:39:24
 * @LastEditors: m.justin.yang@lookout.com
 * @LastEditTime: 2021-06-22 15:07:22
 * @FilePath: \vue-deep\src\router\home\index.js
 */

const _import = require('@/router/import-setting.js')
export default [
  {
    name: 'home',
    path: '/home/home',
    component: _import('home/home'),
    redirectL: 'home/homePage',
    meta: {
      showBottomTab: true, // 是否显示底部的tab
      labe: '首页'
    },
    children: [
      {
        name: 'homePage',
        path: '/home/homePage',
        component: _import('home/homePage'),
        meta: {
          showBottomTab: true, // 是否显示底部的tab
          labe: '首页'
        }
      }
    ]
  }
]