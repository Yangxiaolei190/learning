/*
 * @Description:
 * @Author: m.justin.yang@lookout.com
 * @Date: 2021-06-16 09:20:58
 * @LastEditors: m.justin.yang@lookout.com
 * @LastEditTime: 2021-06-24 11:31:55
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

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)


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
