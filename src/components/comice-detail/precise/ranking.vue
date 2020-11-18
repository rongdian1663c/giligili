<!--排行页面-->
<template>
  <div class="renewal-parent">
    <!--下拉-->
    <mt-loadmore  v-bind:top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">


    <!--需要显示的数据-->
    <div v-for="(element,index) in renewalList" v-bind:key="index" class="corner-mark-parent">
      <!--右上角角标-->
      <img :src="getCornerMark(index)" class="corner-mark">
      <div class="corner-mark-font">{{ index+1 }}</div>
      <div class="renewal-page">
      <!--漫画图-->
      <img :src="element.cover" class="img-cover" @click="skip(element.comic_id)">

      <!--漫画属性-->
      <div class="comics-property">
        <div v-text="element.title" class="comics-title"></div><!--漫画标题-->
        <div class="writer"><!--作家名-->
          <img src="@/assets/img/img_icon_head.png" class="mini-img">
          <div v-text="element.authors" class="introduce-text"></div>
        </div>
        <div class="writer"><!--tag-->
          <img src="@/assets/img/img_icon_tag.png" class="mini-img">
          <div v-text="element.types" class="introduce-text"></div>
        </div>
        <div class="writer"><!--更新日期-->
          <img src="@/assets/img/img_icon_clock.png" class="mini-img">
          <span class="introduce-text">{{ element.last_updatetime * 1000| formatDate }}</span>
        </div>
      </div>


    </div>
    </div>
    </mt-loadmore>
  </div>
</template>

<script>
import http from "@/components/utils/http";
import {formatDate} from "@/components/utils/date";

export default {
  name: "ranking",
  data() {
    return {
      renewalList : [],
      allLoaded:false//为false说明没有获得所有的数据
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData(loadmore) {
      let url = "/rank/0/0/0/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604920120";
      http.get(url, params => {
        this.renewalList = params;
        console.log(params);


        /*刷新加载*/
        if(loadmore) {
          this.$refs.loadmore.onBottomLoaded();
        } else {
          this.$refs.loadmore.onTopLoaded();
        }
      })
    },
    getCornerMark(index){
      if(index === 0){
        // require('@/assets/images/'+taskImg)
        return require('@/assets/img/img_rank_1.png')
      }else if (index === 1){
        return require('@/assets/img/img_rank_2.png')
      }else if (index === 2){
        return require('@/assets/img/img_rank_3.png')
      }else if (index >= 3){
        return require('@/assets/img/img_rank_4.png')
      }
    },
    loadTop() {//下拉刷新已有数据
      this.getData(false)
    },
    loadBottom() {//上划加载新的数据
      // num ++
      this.getData(true)
    },
    skip(id){
      this.$router.push({
        path: '/comiceCatalogue',
        query: {
          id: id
        }
      })
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
    }
  },
}
</script>

<style scoped>
.renewal-page {
  display: flex;
  flex-direction: row;
  height: 120px;
  margin-bottom: 2px;
  background-color: white;
  padding: 6px;

}
.img-cover {
  height: 100%;
  display: flex;
  border-radius: 5px;
  margin-right: 20px;
  margin-left: 6px;

}
.comics-property {
  display: flex;
  flex-direction: column;
}
.comics-title {
  font-size: 16px;
  font-weight: bold;
  padding-top: 7px;
  padding-bottom: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100px
}
.introduce-text {
  font-size: 14px;
  margin-bottom: 5px;
  color: #7f7a7a;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100px
}
.mini-img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}

.renewal-parent {
  display: flex;
  flex-direction: column;
/*  height:100vh;*/
  overflow: scroll;
}
.writer {
  display: flex;
  flex-direction: row;
}
.corner-mark{
  height: 35px;
  margin-left: auto;
  position: absolute;
  right: 0;
}
.corner-mark-font{
  position: absolute;
  right: 0;
  margin-top: 5px;
  margin-right: 8px;
  color: white;
  font-weight:500;
}
</style>