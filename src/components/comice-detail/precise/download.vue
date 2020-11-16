<!--测试-->
<template>
  <div>
                <!--:top-method="loadTop"
                  冒号等于 v-bind:
                  这里是为了动态的绑定数据
                -->
    <mt-loadmore  v-bind:top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

      <div  v-if="recommendList.length!==0" class="parent"><!--如果有数据就进if-->

        <div v-for="item in recommendList" v-bind:key="item.id">
          <div >
            <a href="https://v3api.dmzj1.com/v3/article/show/69220.html">
              <!-- <router-link to="https://v3api.dmzj1.com/v3/article/show/69220.html">-->
              <div class="single-news" >
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
                      <div v-text="item.mood_amount"  class="mood-amount-font"></div>
                      <!--评论-->
                      <img src="@/assets/img/icon_news_details_comment.png" class="comment-amount-img">
                      <div v-text="item.comment_amount"  class="comment_amount-font"></div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- </router-link>-->
            </a>

          </div>
        </div>

      </div>
      <div v-else>暂无数据</div><!--如果没有数据就执行-->

    </mt-loadmore>

  </div>
</template>

<script>
import http from "@/components/utils/http";
import {formatDate} from "@/components/utils/date";

export default {
  name: "download",
  data() {
    return {
      recommendList: [],
      slideshowList: [],
      timeList: Set,
      allLoaded:false//为false说明没有获得所有的数据
    }
  },
  created() {
    this.timeList = new Set();
    this.getRecommend();
    this.getSlideshow();

  },
  methods: {
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

    formatDates(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
    },


    loadTop() {//下拉刷新已有数据
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {//上划加载新的数据

      this.allLoaded = true;// 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    }
  },

  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
    }
  },

}

/*export default {
  name: "download",
  data() {
    return {
      list: [0,1,12,3,4,5,6,8],
      allLoaded:false//为false说明没有获得所有的数据
    }
  },
  methods: {

    loadTop() {//下拉刷新已有数据
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {//上划加载新的数据

       this.allLoaded = true;// 若数据已全部获取完毕
       this.$refs.loadmore.onBottomLoaded();
    }
  }
}*/
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
  justify-content:flex-start;
  margin-right: 18px;
}

.news-introduce {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.author{
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
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
  padding: 5px;
  background-color: white;
}
.news-title{
  font-size: 14px;
  font-weight:bold;
  height: 550px;
}
.news-introduce-wee{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  height: 100%;

}
.mood-amount-img{
  height: 15px;
  margin-right: 3px;
}
.comment-amount-img{
  height: 15px;
  margin-right: 3px;

}
.mood-amount-font{
  margin-right: 5px;
}
.author-name{
  font-size: 14px;
  color: #858587;
}

</style>

