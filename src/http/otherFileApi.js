/*
 * @Description:
 * @Author: m.justin.yang@lookout.com
 * @Date: 2021-06-24 13:43:33
 * @LastEditors: m.justin.yang@lookout.com
 * @LastEditTime: 2021-06-24 13:43:47
 * @FilePath: \vue-deep\src\http\otherFileApi.js
 */
/**
 * @Description: 该文件里面存储 图片的地址，下载文件的地址
 * @author:fengchenchen @Date:2020-05-26
 */
const proxyUrl = '/manage'

let fileApi = {
// /file/file/{ids}/downloadInBatch
  // 图片的示例
  codeImgUrl: proxyUrl + '/mp/loginManage/verifyCode/', // 验证码的接口
  // 文件下载类型的示例
  fileUrl: function(fileId) {
    return proxyUrl + '/file/file/' + fileId + '/downloadInBatch'
  },
  advertUrl: function(fileId) {
    return proxyUrl + `/wxapi/order/downAdFile/${fileId}`
  },
  videoUrl: function(videoId) {
    return proxyUrl + '/wxapi/order/downFile/' + videoId + '?Authorization=' + (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id || '')
  },
  videoManage: function(videoId) {
    return proxyUrl + '/api/curriculum/downFile/' + videoId
  }
}

export default fileApi
