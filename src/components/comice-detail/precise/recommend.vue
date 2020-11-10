
<!--默认的推荐页面-->
<template>
<div class="recommend-parent">
  <!--轮播图[0]-->
  <div class="page-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item  v-for="list in recommendList[0].data" v-bind:key="list.id">
        <img :src="list.cover" class="slideshow-img">
      </mt-swipe-item>
    </mt-swipe>
  </div>

  <!--近期必看[1]-->
  <!--title-->
  <div v-text="recommendList[1].title"></div>
<!--  <div class="Recent-will-see">
    &lt;!&ndash;漫画,漫画名,作者&ndash;&gt;
    <div v-for="index in recommendList[1].data" v-bind:key="index" class="single-comics">
      &lt;!&ndash;漫画封面&ndash;&gt;
      <img : src="index.cover" class="comics.img">
      &lt;!&ndash;漫画名&ndash;&gt;
      <div v-text="index.title"></div>
      &lt;!&ndash;漫画作者&ndash;&gt;
      <div v-text="index.sub_title"></div>
    </div>

  </div>-->

</div>
</template>

<script>
import http from "@/components/utils/http";

export default {
  name: "recommend",
  created() {
    this.getData();
  },
  data(){
      return{
        recommendList : []
      }
  },
  methods:{
      getData(){
        let url = "/recommend_index_androids.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604973531";
        http.get(url,params =>{
          this.recommendList = params;
          console.log(params);
        })
    }
  },
}
</script>

<style scoped>
.recommend-parent{
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
.slideshow-img{
  height: 200px;
  width: 100%;
}

.Recent-will-see{
  display: flex;
  flex-direction: row;
}
.single-comics{
  display: flex;
  flex-direction: column;
}
</style>
