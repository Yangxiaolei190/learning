/*
 * @Description:
 * @Author: m.justin.yang@lookout.com
 * @Date: 2021-06-16 09:20:58
 * @LastEditors: m.justin.yang@lookout.com
 * @LastEditTime: 2021-06-22 14:20:31
 * @FilePath: \vue-deep\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/css/common.less'
import '@/assets/css/global.less'

// 引入ant-design of vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


// 自定义全局组件
// import components from '@/components'

Vue.use(Antd)
// Vue.use(components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
