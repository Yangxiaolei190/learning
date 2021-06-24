<!--
 * @Description:首页
 * @Author: m.justin.yang@lookout.com
 * @Date: 2021-06-22 11:56:55
 * @LastEditors: m.justin.yang@lookout.com
 * @LastEditTime: 2021-06-22 15:09:25
 * @FilePath: \vue-deep\src\views\home\home.vue
-->
<template>
  <section>
    <!-- 搜索框模块 -->

    <!-- 主体模块 -->
    <transition>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>

