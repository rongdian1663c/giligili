<!--推荐页面-->
<template>
  <div class="recommend-parent">
    <!--轮播图-->

    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in slideshowList.data" v-bind:key="item.id">
          <img :src="item.pic_url" class="slideshow-img" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--推荐新闻-->
    <div class="recommend-son">
      <!--文章推荐时间-->
    </div>
  </div>
</template>

<script>
import http from "@/components/utils/http";
import { formatDate } from "@/components/utils/date";

export default {
  name: "recommend-news",
  data() {
    return {
      slideshowList: [],
      recommendList: [],
      newsList: [
        {
          time: "",
          data: [],
        },
      ],
    };
  },
  created() {
    this.getSlideshow();
    this.getRecommend();
  },
  methods: {
    getSlideshow() {
      let url =
        "/v3/article/recommend/header.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1605070856";
      http.get(url, (params) => {
        this.slideshowList = params;
        console.log(params);
      });
    },
    getRecommend() {
      let url =
        "/v3/article/list/0/2/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1605070856";
      http.get(url, (params) => {
        this.recommendList = params;
        console.log("recommendList: " + JSON.stringify(params));
        let time = "";
        let data = new Map();
        for (let param of params) {
          if (!time) {
            time = this.getTime(param);
          }
          if (time === this.getTime(param)) {
            if (data[time]) {
              data[time].push(param);
            } else {
              let list = [];
              list.push(param);
              data[time] = list;
            }
          } else {
            time = this.getTime(param);
            if (data[time]) {
              data[time].push(param);
            } else {
              let list = [];
              list.push(param);
              data[time] = list;
            }
          }
        }
        console.log("data: " + JSON.stringify(data));
      });
    },
    getTime(item) {
      let time = this.formatDates(item.create_time * 1000);
      console.log(time);
      return time;
    },
    formatDates(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
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
</style>
