/*
 * @Description: 模块引入
 * @Author: m.justin.yang@lookout.com
 * @Date: 2021-06-22 11:51:49
 * @LastEditors: m.justin.yang@lookout.com
 * @LastEditTime: 2021-06-22 11:53:22
 * @FilePath: \vue-deep\src\router\import-setting.js
 */
module.exports = file => resolve => require(['@/views/' + file + '.vue'], resolve)