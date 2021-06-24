<template>
  <div style="background:#ECECEC; padding:30px">
    <a-row>
      <!-- 右侧视频播放 -->
      <a-col :span="16">
        <a-card
          title="VIDEO"
          :bordered="false"
          style="width: 100%"
        >
          <div class="item">
            <div class="player">
              <video-player
                ref="videoPlayer"
                class="vjs-custom-skin"
                :options="playerOptions"
                :playsinline="true"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                @loadeddata="onPlayerLoadeddata($event)"
                @waiting="onPlayerWaiting($event)"
                @playing="onPlayerPlaying($event)"
                @timeupdate="onPlayerTimeupdate($event)"
                @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
                @ready="playerReadied"
                @statechanged="playerStateChanged($event)"
              />
            </div>
          </div>
        </a-card>
      </a-col>

      <!-- 左侧视频列表 -->
      <a-col
        :span="7"
        :offset="1"
      >
        <a-card
          title="VIDEO LIST"
          :bordered="false"
          class="videoList"
        >
          <ul
            v-for="item in videoListUrl"
            :key="item.id"
          >
            <li @click="clickUrl(item)">
              <span
                style="cursor: pointer;"
                class="activeClass ddefaultClass"
                :title="item.url"
              >{{ item.title }}</span>
            </li>
          </ul>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    let videoOption = {
      height: '360',
      playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
      // autoplay: false, // 如果true,浏览器准备好时开始回放。
      muted: true, //
      loop: false, // 导致视频一结束就重新开始。
      preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
      language: 'zh-CN',
      aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
      fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
      // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
      sources: [{
        type: 'video/mp4',
        // mp4
        // src: 'http://vjs.zencdn.net/v/oceans.mp4'
        src: ''
        // webm
        // src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      }],
      poster: 'https://img1.baidu.com/it/u=4110196045,3829597861&fm=26&fmt=auto&gp=0.jpg', // 视频封面
      width: document.documentElement.clientWidth, // 播放器宽度
      notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。  此视频暂无法播放，请稍后再试
      // 主控制器容器
      controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: false,
        fullscreenToggle: true // 全屏按钮
      }
    }

    return {
      // videojs options
      playerOptions: Object.assign({}, videoOption),
      showAd: true, // 是否显示广告
      checkIsPlay: null, // 检查是否可以播放的定时器
      isPlaying: false,
      step: 1,
      videoListUrl: [
        {id: 1, url: 'http://vjs.zencdn.net/v/oceans.mp4', title: '蓝色海洋.mp4'},
        {id: 2, url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', title: '小笨鸟.mp4'},
        {id: 3, url: 'http://vjs.zencdn.net/v/oceans.mp4', title: '鲸落.mp4'},
        {id: 4, url: 'https://media.w3.org/2010/05/sintel/trailer.mp4', title: '沙漠.mp4'},
        {id: 5, url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', title: '嘻哈一家人.mp4'}
      ],
      adverListUrl: [
        {id: 1, url: ' https://media.w3.org/2010/05/sintel/trailer.mp4', title: '游戏广告.mp4'}
      ]
    }
  },
  computed: {
    // 自定义播放
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  mounted() {
    // 进来播放广告
    this.playerOptions.sources[0].src = this.adverListUrl[0].url
  },
  methods: {
    // 监听开始状态
    onPlayerPlay(event) {
      // console.log('player play!', player)
    },

    // 监听暂停状态
    onPlayerPause(event) {
      // 如果没有播放广告，则记录播放的情况
      if (!this.showAd) {
        // 本次播放的时间节点，请求后端直接修改  本地数据的上次播放时间
        let lastTime = this.player.currentTime()
        console.log('onPlayerPause===', this.player.currentTime())
      }
    },

    // 广告结束的事件
    onPlayerEnded(event) {
      // 判断当前是否是播放的广告，如果是的话直接播放正片
      if (this.showAd) {
        this.isPlaying = false
        // 换成课程视频的url
        this.changeVideoUrl()
      }
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      // 设置初始化开始的时间
      console.log('视频已经ready', player)
      setTimeout(() => {
        this.player.play()
      })
    },
    changeVideoUrl() {
      this.showAd = false
      this.playerOptions.sources[0].src = this.videoListUrl[0].url
    },
    // 点击右侧列表刷新地址
    clickUrl(item) {
      if (item.url) {
        this.playerOptions.sources[0].src = item.url
      } else {
        this.playerOptions.sources[0].src = ''
      }
    }
  }
}
</script>
<style scoped lang="less">
.activeClass{

}
.ddefaultClass{
  font-size: 16px;
  color: #333333;
}
.ddefaultClass:hover{
 color: lightskyblue;
}
.videoList{
  ul{
    li{
     list-style: none;
    }
  }
}
</style>