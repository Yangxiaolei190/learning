/*
 * @Description: 自定义组件配置
 * @Author: m.justin.yang@lookout.com
 * @Date: 2021-06-16 11:10:05
 * @LastEditors: m.justin.yang@lookout.com
 * @LastEditTime: 2021-06-16 14:20:01
 * @FilePath: \vue-deep\src\components\index.js
 */
import Loading from './loading' // loading组件

const install = function(Vue) {
  Vue.component('loading', Loading)
}

export default {
  install
}
