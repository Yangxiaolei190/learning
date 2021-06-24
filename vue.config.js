/*
 * @Description:
 * @Author: m.justin.yang@lookout.com
 * @Date: 2021-06-22 14:24:56
 * @LastEditors: m.justin.yang@lookout.com
 * @LastEditTime: 2021-06-24 11:28:02
 * @FilePath: \vue-deep\vue.config.js
 */

const path = require('path')
module.exports = {
  devServer: {
    open: false,
    proxy: {
      '/manage': {
        target: 'http://10.0.1.6:52901',
        changeOrigin: true,
        pathRewrite: {
          '^/manage': ''
        }
      },
      '/weChat': {
        target: 'https://api.weixin.qq.com',
        changeOrigin: true,
        pathRewrite: {
          '^/weChat': ''
        }
      },
      '/payJs': {
        target: 'https://payjs.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/payJs': ''
        }
      }
    },
    disableHostCheck: true,
    port: 8080
  },
  lintOnSave: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 'F:\\gas-classroom\\gas-classroom-admin-ui\\src\\assets\\css\\common.less'
        path.resolve(__dirname, './src/assets/css/common.less')
      ]
    }
  }
}
