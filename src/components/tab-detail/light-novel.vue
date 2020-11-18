<!--轻小说页面-->
<template>
  <div class="light-novel-parent">
    <!--轮播图-->
    <div class="page-swipe">
      <mt-swipe :auto="0"  >
            <mt-swipe-item class="slide1" v-for="list in fictionList[0].data" v-bind:key="list.id" >
              <img :src="list.cover" class="slideshow-img" @click="skip(list.id)">
              <div class="slideshow-title">{{ list.title }}</div>
            </mt-swipe-item>
      </mt-swipe>
    </div>


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

    <!--最新更新等(不包括经典必看)-->
    <div v-for="list in fictionList" v-bind:key="list.category_id">
      <div v-if="list.sort != 0 && list.sort != 6" class="novel-classify-mod">

        <!--标题title-->
        <div class="novel-title">
          <img src="@/assets/img/img_novel_eye.png" class="novel-title-img">
          <span class="novel-title-font">{{ list.title }}</span>
        </div>
        <!--小说封面和名字-->
        <div class="novel-detail">
        <span v-for="item in list.data" v-bind:key="item.id">
            <img :src="item.cover" class="cover-img">
        </span>
        </div>
      </div>

      <!--经典必看-->
      <div v-if="list.sort != 0 && list.sort == 6" class="novel-classify-mod">
        <!--标题title-->
        <div class="novel-title">
          <img src="@/assets/img/img_novel_eye.png" class="novel-title-img">
          <span class="novel-title-font">{{ list.title }}</span>
        </div>
        <!--小说封面和名字-->
        <div class="novel-detail-diverse">
        <div v-for="item in list.data" v-bind:key="item.id" class="cover-scope">
            <img :src="item.cover" class="cover-diverse-img">
        </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import http from "@/components/utils/http";
import Vue from 'vue';
import {Swipe, SwipeItem} from 'vant';
import {Toast} from "mint-ui";

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
    },
    skip(){
      Toast('页面未完成');
    }
  }
}
</script>

<style scoped>



.slideshow-title{
  position: absolute;
  color: white;
  /* height: 30px; */
  bottom: 0px;
  font-size: 16px;
  background-color: rgba(0, 122, 255, 0.8);
  /* z-index: 9999; */
  line-height: 30px;
  text-align: left;
  width: 100%;
  padding-left: 8px;
 /* opacity:0.2;*/
}

.light-novel-parent {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.seek-novel {
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-around;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 10px;

  box-shadow: 2px 2px 3px #b8b2b2;
}

.pursue-novel {

  display: flex;
  flex-direction: column;
  width: 20%;
}

.seek-novel-img {
  width: 100%;
  margin-bottom: 10px;
}

.seek-novel-font {
  font-weight: 550;
  text-align: center;
  margin: 0;
  font-family: helvetica, arial, sans-serif;
  color: #333333;
  font-weight: bold;
  text-shadow: 3px 3px #dcdcdc;
}

.novel-title {
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 6px;

}

.novel-classify-mod {
  padding: 5px;
  background-color: white;
  margin-bottom: 5px;
}

.novel-title-img {
  height: 25px;
  width: 25px;
  margin-right: 5px;
}

.novel-title-font {
  margin-left: 5px;
  font-size: 15px;
  padding-top: 2px;
}

.novel-detail {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.cover-img {

  width: 95%;
  border-radius: 5px;
}

.novel-detail-diverse {
  margin-bottom: 30px;
  justify-content: space-between;
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  /*  flex-wrap:wrap;*/
}

.cover-diverse-img {
  /* height: 150px; */
  width: 100%;
  border-radius: 5px;
/* margin: 3px; */
/* margin-left: 2%;*/
}

.page-swipe {
height: 190px;
width: 100%;

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

.slideshow-img{
height: 200px;
width: 100%;
}
.cover-scope{
width: 32%;
  margin-left: 1%;
}
</style>