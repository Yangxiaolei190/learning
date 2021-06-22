import Vue from 'vue'
import App from './App.vue'
import store from './store'

// 引入ant-design of vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


// 自定义全局组件
import components from '@/components'

Vue.use(Antd)
Vue.use(components)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
