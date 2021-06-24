<!--
 * @Description:
 * @Author: m.justin.yang@lookout.com
 * @Date: 2021-06-16 09:20:58
 * @LastEditors: m.justin.yang@lookout.com
 * @LastEditTime: 2021-06-22 14:21:52
 * @FilePath: \vue-deep\src\App.vue
-->
<template>
  <div class="g-container">
    <div class="weui-web">
      <div class="weui-tab_panel">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {}
  },
  computed: {

  },
  methods: {}
}
</script>

<style lang="less" scoped>
.g-container{
  height: 100%;
  font-family: PingFang SC;
  color: @g-text-font-color;
}
</style>
