<!--测试-->
<template>
  <div>

    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

      <ul class="track-list" v-if="list.length!==0">
        <li class="track-item" v-for="(item,index) in list" :key="index">
          <div class="location"><span class="iconfont icon-location"></span>{{item.address}}附近</div>
          <div class="time"><span class="iconfont icon-time"></span>{{item.dateCreated}}</div>
        </li>
      </ul>
      <div class="no-data" v-else>暂无孩子轨迹位置信息</div>

    </mt-loadmore>

  </div>
</template>

<script>


export default {
  name: "download",
  data() {
    return {
      list: [0,1,12,3,4,5,6,8],
      allLoaded:false
    }
  },
  methods: {

    loadTop() {

      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {

       this.allLoaded = true;// 若数据已全部获取完毕
       this.$refs.loadmore.onBottomLoaded();
    }
  }
}
</script>

<style scoped>


</style>

