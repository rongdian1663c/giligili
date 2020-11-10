<!--默认的推荐页面-->
<template>
  <div class="recommend-parent">
    <!--轮播图[0]-->
    <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="list in recommendList[0].data" v-bind:key="list.id">
          <img :src="list.cover" class="slideshow-img">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!--近期必看[1]title-->
    <div class="title-parent">
      <!--title图标-->
      <img src="@/assets/img/img_recent.png" class="mini-title">
      <!--title文字-->
      <div v-text="recommendList[1].title" class="comics-title"></div>
    </div>
    <div class="Recent-will-see">
      <!--漫画,漫画名,作者-->
      <div v-for="index in recommendList[1].data" v-bind:key="index" class="single-comics">
        <!--漫画封面-->
        <img :src="index.cover" class="comics-img-3">
        <!--漫画名-->
        <div v-text="index.title" class="comics-name"></div>
        <!--漫画作者-->
        <div v-text="index.sub_title" class="comics-author"></div>
      </div>
    </div>
    <!--上面为一整个部分-->

    <!--游戏专区[2]title-->
    <div class="title-parent">
      <!--title图标-->
      <img src="@/assets/img/icon_remenyouxi.png" class="mini-title">
      <!--title文字-->
      <div v-text="recommendList[2].title" class="comics-title"></div>
    </div>
    <div class="The-game-zone">
      <!--漫画,漫画名-->
      <div v-for="index in recommendList[2].data" v-bind:key="index" class="single-comics">
        <!--漫画封面-->
        <img :src="index.cover"  class="comics-img-4">
        <!--漫画名-->
        <div v-text="index.title" class="comics-name-long" ></div>
      </div>
    </div>
    <!--上面为一整个部分-->

  </div>
</template>

<script>
import http from "@/components/utils/http";

export default {
  name: "recommend",
  created() {
    this.getData();
  },
  data() {
    return {
      recommendList: []
    }
  },
  methods: {
    getData() {
      let url = "/recommend_index_androids.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604973531";
      http.get(url, params => {
        this.recommendList = params;
        console.log(params);
      })
    }
  },
}
</script>

<style scoped>
.recommend-parent {
  display: flex;
  flex-direction: column;
}

.page-swipe {
  height: 150px;
  width: 100%;
  margin-bottom: 50px;
}

.mint-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.mint-swipe-item {
  line-height: 200px;
}

.slideshow-img {
  height: 200px;
  width: 100%;
}

.Recent-will-see {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  margin-bottom: 12px;
  padding: 7px;
}

.The-game-zone{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  margin-bottom: 12px;
  padding: 7px;
  flex-wrap:wrap;
}

.single-comics {
  display: flex;
  flex-direction: column;
}

.comics-img-3 {
  width: 120px;
  margin: 0 auto;
  border-radius: 3px;
  margin-bottom: 2px;
}
.comics-img-4 {
  width: 180px;
  margin: 0 auto;
  border-radius: 3px;
  margin-bottom: 2px;
}

.comics-title{
  background-color: white;
  font-weight:550;
  padding-top: 2px;
}
.title-parent{
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  background-color: white;
  padding: 8px;
  justify-content: flex-start;
}

.mini-title{
  height: 25px;
  margin-right: 8px;
}
.comics-name{
  margin-bottom: 3px;
  font-weight:550;
}
.comics-author{
  font-size: 14px;
  color: #858587;
}
.comics-name-long{
  margin-bottom: 3px;
  font-weight:550;
  margin-bottom: 10px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 180px

}
</style>
