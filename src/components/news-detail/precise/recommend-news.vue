<!--推荐页面-->
<template>
  <div class="recommend-parent">
    <!--轮播图-->
    <!--vant下拉刷新组件-->
    <!--    <van-pull-refresh v-model="refresh" @refresh="onRefresh" class="refresh">-->
    <!--vant加载更多组件-->
    <!--      <van-list v-model="loading" :finished="finished" @load="onLoad">-->
    <div v-if="Tid === 1">
      <div class="swiper">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in slideshowList.data" v-bind:key="item.id">
            <img :src="item.pic_url" class="slideshow-img">
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <!--推荐新闻-->
    <div class="recommend-son">

      <!--文章推荐时间-->

      <div v-for="time in timeList" v-bind:key="time">
        <div v-text="time" class="news-time"></div>

        <div v-for="item in recommendList" v-bind:key="item.id">
          <div v-if="getTime(item) === time">

            <!-- <router-link to="https://v3api.dmzj1.com/v3/article/show/69220.html">-->
            <div class="single-news" @click="skip(item.page_url)">
              <!--新闻封面-->
              <img :src="item.row_pic_url" class="news-img">
              <!--新闻标题,作者等-->
              <div class="news-introduce">
                <!--标题-->
                <div v-text="item.title" class="news-title"></div>
                <!--作者,点赞,评论-->
                <div class="news-introduce-wee">
                  <!-- 头像和作者名-->
                  <div class="author">
                    <img :src="item.cover" class="author-img">
                    <div v-text="item.nickname" class="author-name"></div>
                  </div>
                  <!--点赞数和评论数-->
                  <div class="hot">
                    <!--点赞-->
                    <img src="@/assets/img/icon_news_details_oraise_two.png" class="mood-amount-img">
                    <div v-text="item.mood_amount" class="mood-amount-font"></div>
                    <!--评论-->
                    <img src="@/assets/img/icon_news_details_comment.png" class="comment-amount-img">
                    <div v-text="item.comment_amount" class="comment_amount-font"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- </router-link>-->


          </div>
        </div>
      </div>
    </div>
    <!--      </van-list>-->
    <!--    </van-pull-refresh>-->
  </div>

</template>

<script>
import http from "@/components/utils/http";
import {formatDate} from "@/components/utils/date";

export default {
  props: {
    'id': Number,
  },
  name: "recommend-news",
  data() {
    return {
      recommendList: [],
      slideshowList: [],
      timeList: [],
      refresh: false,
      loading: false,
      finished: false,
      page: 0,
      Tid:0,
    }
  },
  created() {
    this.timeList = new Set();
    this.getRecommend();

  },
  methods: {
    onRefresh() {
      this.refresh = true;
      this.page = 0;
      this.getRecommend();
    },
    onLoad() {
      // this.loading = true;
      this.page++;
      this.getRecommend();
    },
    getSlideshow() {
      let url = "/v3/article/recommend/header.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1605070856";
      http.get(url, params => {
        this.slideshowList = params;
        // console.log(params);
      })
    },
    getRecommend() {
       this.Tid = this.$props.Tid;
      let id = this.$props.id;
      let url = "/v3/article/list/" + id + "/2/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1605070856";
      http.get(url, params => {

        if (id == 1){
          this.getSlideshow();
        }
        //刷新完成,将refresh设置为false,则下拉回弹回去
        this.refresh = false;
        //加载更多完成,将loading设置为false,则加载更多回弹回去
        this.loading = false;

        this.recommendList = params;

        for (let param of params) {
            //判断是否包含该time,不包含就添加
          let time = this.getTime(param);
          if (!this.timeList.includes(time)){
            this.timeList.add(time)
          }
        }

        //console.log(this.timeList);

      })
    },
    skip(url) {
      window.location.href = url;
    },
    getTime(item) {
      let time = this.formatDates(item.create_time * 1000);
      console.log(time);
      return time;

    },
    formatDates(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
    },

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

.single-news {
  height: 85px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: white;
  margin-bottom: 3px;
}

.news-img {
  height: 85px;
  width: 110px;
  border-radius: 12px;
  justify-content: flex-start;
  margin-right: 18px;
}

.news-introduce {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.author {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.author-img {
  height: 20px;
  margin-right: 5px;
}

.hot {
  display: flex;
  flex-direction: row;
}

.news-time {
  padding: 3px;
  margin-left: 3px;
  background-color: #ebebec;
  font-size: 14px;

}

.news-title {
  font-size: 14px;
  font-weight: bold;
  height: 550px;
}

.news-introduce-wee {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;

}

.mood-amount-img {
  height: 15px;
  margin-right: 3px;
}

.comment-amount-img {
  height: 15px;
  margin-right: 3px;

}

.mood-amount-font {
  margin-right: 5px;
}

.author-name {
  font-size: 14px;
  color: #858587;
}
</style>