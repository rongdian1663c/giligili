<!--轻小说页面-->
<template>
  <div>
    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"><!--
      <div v-for="slideshow in fictionList[0].data" v-bind:key="slideshow.id">
        <van-swipe-item>
          <img
        </van-swipe-item>
      </div>-->

        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
import http from "@/components/utils/http";

export default {
  name: "light-novel",
  data() {
    return {
      fictionList: []
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "/novel/recommend.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604886800";
      http.get(url, params => {
        this.fictionList = params;
        console.log(params);
      })
    }
  }
}
</script>

<style scoped>

/*.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}*/

</style>