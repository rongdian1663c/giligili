<!--轻小说页面-->
<template>
  <div class="light-novel-parent">

    <!--轮播图-->
    <!--<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">&lt;!&ndash;
      <div v-for="slideshow in fictionList[0].data" v-bind:key="slideshow.id">
        <van-swipe-item>
          <img
        </van-swipe-item>
      </div>&ndash;&gt;

        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>

    </van-swipe>-->
    <!--追小说,找小说,排行榜-->
    <div class="seek-novel">

      <span class="pursue-novel">
      <img src="@/assets/img/img_novel_title_dian.png" class="seek-novel-img">
      <div class="seek-novel-font">追小说</div>
      </span>

      <span class="pursue-novel">
      <img src="@/assets/img/img_novel_title_book.png" class="seek-novel-img">
      <div class="seek-novel-font">找小说</div>
      </span>

      <span class="pursue-novel">
      <img src="@/assets/img/img_novel_title_chart.png" class="seek-novel-img">
      <div class="seek-novel-font">排行榜</div>
      </span>

    </div>

    <!--最新更新等-->
    <div v-for="list in fictionList" v-bind:key="list.category_id">
      <div v-if="list.index != 0" class="novel-classify-mod">

        <!--标题title-->
        <div class="novel-title">
          <img src="@/assets/img/img_novel_eye.png" class="novel-title-img">
          <span class="novel-title-font">{{list.title}}</span>
        </div>
        <!--小说封面和名字-->
        <div v-for="item in list.data" v-bind:key="item.id">
          {{item.id}}
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import http from "@/components/utils/http";
import Vue from 'vue';
import {Swipe, SwipeItem} from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

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
.light-novel-parent {
  display: flex;
  flex-direction: column;
}

.seek-novel {
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-around;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 10px;

  box-shadow: 4px 4px 5px #999;
}

.pursue-novel {
  display: flex;
  flex-direction: column;

}

.seek-novel-img {
  width: 55px;
  height: 55px;
  margin-bottom: 10px;
}

.seek-novel-font {
  font-weight: 550;
  text-align: center;
  margin: 0;
  font-family: helvetica, arial, sans-serif;
  color: #333333;
  font-weight: bold;
  text-shadow: 3px 3px #c4bcbc;
}
.novel-title{
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 6px;

}
.novel-classify-mod{
  padding: 5px;
}
.novel-title-img{
  height: 25px;
  width: 25px;
  margin-right: 5px;
}
.novel-title-font{
  margin-left: 5px;
  font-size: 15px;
  padding-top: 2px;
}
</style>