<!--推荐页面-->
<template>
  <div class="recommend-parent">
    <!--轮播图-->

    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in slideshowList.data" v-bind:key="item.id">
          <img :src="item.pic_url" class="slideshow-img">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--推荐新闻-->
    <div class="recommend-son">

      <!--文章推荐时间-->

      <div v-for="time in timeList" v-bind:key="time">
        {{ time }}
        <div v-for="item in recommendList" v-bind:key="item.id">
          <div v-if="getTime(item) === time">
            <div class="single-news">
              <!--新闻封面-->
              <img :src="item.cover" class="news-img">
              <!--新闻标题,作者等-->
              <div class="news-introduce">
                <!--标题-->
                <div v-text="item.title" class="news-title"></div>
                <!--作者,点赞,评论-->
                <div class="news-introduce-wee">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import http from "@/components/utils/http";
import {formatDate} from "@/components/utils/date";

export default {
  name: "recommend-news",
  data() {
    return {
      slideshowList: [],
      recommendList: [],
      timeList: Set,
    }
  },
  created() {
    this.timeList = new Set()
    this.getSlideshow();
    this.getRecommend();
  },
  methods: {
    getSlideshow() {
      let url = "/v3/article/recommend/header.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1605070856";
      http.get(url, params => {
        this.slideshowList = params;
        console.log(params);
      })
    },
    getRecommend() {
      let url = "/v3/article/list/0/2/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1605070856";
      http.get(url, params => {
        this.recommendList = params;

        for (let param of params) {
          this.timeList.add(this.getTime(param))
        }

        console.log(this.timeList);
      })
    },

    getTime(item) {
      let time = this.formatDates(item.create_time * 1000);
      console.log(time);
      return time;

    },
    formatDates(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
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
.recommend-parent {
  display: flex;
  flex-direction: column;
}

.swiper {
  width: 100%;
  height: 200px;
}

.van-swipe {
  width: 100%;
  height: 100%;
}

.slideshow-img {
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background: #fff;
}

.recommend-son {
  display: flex;
  flex-direction: column;
}
.single-news{
  display: flex;
  flex-direction: row;
  padding: 5px;
}
.news-img {
  height: 50px;
}
.news-introduce{
  display: flex;
  flex-direction: column;
}
</style>