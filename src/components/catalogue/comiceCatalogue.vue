<!--comice-catalogue-->
<!--漫画详情页-->
<!--下载-->
<template>
  <div class="comice-parent">

    <mt-header :title="title" class="comice-title">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <!--漫画属性(整块)-->
    <div class="comice-property">
      <!--漫画图-->
      <img :src="comiceList.cover" class="img-cover">

      <!--漫画属性(作者,tag,人气值..)-->
      <div class="comics-property">

        <!--作家名-->
        <div class="data-line">
          <img src="@/assets/img/img_icon_head.png" class="mini-img">
          <div v-text="comiceList.authors[0].tag_name" class="introduce-authors-text"></div>
        </div>

        <!--tag-->
        <div class="data-line"><!--tag-->
          <!--小图标-->
          <img src="@/assets/img/img_icon_tag.png" class="mini-img">
          <!--tag数据-->
          <div v-for="item in comiceList.types" v-bind:key="item.tag_id">
            <div v-text="item.tag_name" class="tag-text"></div>
          </div>
        </div>

        <!--人气-->
        <div class="data-line">
          <img src="@/assets/img/img_icon_tag.png" class="mini-img">
          <div v-text="'人气 ' +comiceList.hot_num" class="introduce-text"></div>
        </div>

        <!--订阅-->
        <div class="data-line">
          <img src="@/assets/img/img_icon_tag.png" class="mini-img">
          <div v-text="'订阅 ' +comiceList.subscribe_num" class="introduce-text"></div>
        </div>

        <!--更新日期-->
        <div class="data-line">
          <img src="@/assets/img/img_icon_clock.png" class="mini-img">
          <div class="introduce-time-text">{{ comiceList.last_updatetime * 1000| formatDate }}</div>
        </div>

        <div class="button-parent">
          <button type="订阅漫画" class="button-subscribe">订阅漫画</button>
          <button type="开始阅读" class="button-read">开始阅读</button>
        </div>

      </div>
    </div>
    <!--上面为一整块-->


    <!---->
    <div class="synopsis-parent" v-if="flag">
      <textarea v-model="comiceList.description" class="synopsis" @click="fn()"></textarea>
    </div>

    <!--<textarea v-model="comiceList.description" class="synopsis-hide"></textarea>-->
    <div class="synopsis-parent" v-else>
      <textarea v-model="comiceList.description" class="synopsis-hide" @click="fn()"></textarea>
    </div>

    <div class="click-icon">
      <img src="@/assets/img/img_open_btn.png" class="click-icon-img" @click="fn()">
    </div>
    <!--上面为一整块-->

    <!--相关内容,分享-->
    <div class="page-extend">
      <div class="extend-left">
        <img src="@/assets/img/img_about_icon.png" class="extend-img">
        <span class="extend-font">相关内容</span>
      </div>
      <div class="extend-centre">
        ｜
      </div>
      <div class="extend-right">
        <img src="@/assets/img/img_share_icon.png" class="extend-img">
        <span class="extend-font">分享  </span>
      </div>
    </div>
    <!--上面为一整块-->

    <!--广告-->
    <div class="advertising">
      <img src="@/assets/img/timg.jpg" class="advertising-img">
    </div>
    <!--上面为一整块-->

    <!--排序方式-->
    <div class="chapters">
      <!--排序title-->
      <span class="chapters-title">漫画章节</span>
      <span class="chapters-page">
        <span class="chapters-plus" @click="positive()"><!--点击事件-->
        正序
        <img src="@/assets/img/img_up_gray.png" class="chapters-img">
      </span>
      <span class="chapters-minus" @click="negative()"><!--点击事件-->
        倒序
      <img src="@/assets/img/img_down_gray.png" class="chapters-img">
      </span>
      </span>
    </div>
    <!--上面为一整块-->

    <!--是否连载-->
    <div class="condition">
      <span class="condition-border">·</span>
      <span class="condition-font" v-text="comiceList.chapters[0].title"></span>
      <span class="condition-border">·</span>
    </div>
    <!--上面为一整块-->

    <!--分页目录-->
    <!--<div class="catalog" v-for="item in comiceList.chapters[0].data" v-bind:key="item.chapter_id" >
      {{item.chapter_title}}
    </div>-->

    <van-grid :column-num="4" class="catalog" :border="false">

      <van-grid-item class="catalog-font" v-for="(item , index) in list" v-bind:key="index" @click="more(index)">
        <div v-text="item.chapter_title" class="chapter-title-border"></div>
      </van-grid-item>

    </van-grid>


    <!--评论-->
    <div class="comment-parent">
      <!--title-->
      <div class="comment-title">作品讨论</div>

      <div v-for="item in comiceList.comment.latest_comment" v-bind:key="item.comment_id" class="userinfo-parent">
        <!--头像,用户名,-->
        <div class="userinfo">
          <!--用户头像-->
          <img :src="item.avatar" class="userinfo-img">
          <!--用户名-->
          <span v-text="item.nickname" class="userinfo-font"></span>
        </div>
        <!--用户评论-->
        <div class="comment">
          {{ item.content }}
        </div>
      </div>

    </div>


  </div>
</template>

<script>

import {formatDate} from "@/components/utils/date";
import axios from "axios";

export default {
  props: {
    /* title: "123"*/
  },
  name: "comiceCatalogue",
  data() {
    return {
      comiceList: [],
      flag: true,
      list: [],
      OppositeList: [],
      title: "",
      order: true,

    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      //接收参数
      let id = this.$route.query.id;
      let url = "/comic/comic_" + id + ".json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1605168942";
      /*  axios.get(url)
            .then(function (response) {
              console.log("response: "+response);
              this.comiceList = response.data;
            })*/

      var response = await axios.get(url)
      console.log("response: " + response.data);
      this.comiceList = response.data
      /*this.OppositeList = response.data.reverse()*/
      this.getCatalogue()
    },
    fn() {
      if (this.flag) {
        this.flag = false;
      } else {
        this.flag = true
      }
    },
    getCatalogue() {
      this.list = [];
      for (var i = 0; i < 11; i++) {
        this.list.push(this.comiceList.chapters[0].data[i]);
      }
      this.list.push({chapter_title: "..."});
    },
    more(index) {
      if (index == this.list.length - 1 && this.list.length - 1 <= 11) {

        /*this.list.splice(0, this.list.length)*/
        // this.list = this.comiceList.chapters[0].data;
        for (var i = 0; i < this.comiceList.chapters[0].data.length; i++) {
          this.list[i] = this.comiceList.chapters[0].data[i];
        }

        this.list.push({chapter_title: "收回"});

      } else if (index == this.list.length - 1 && this.list.length - 1 > 11) {
        this.list = [];
        this.getCatalogue();
      }
    },
    positive() {/*正*/
      if (this.order) {//false  true
        this.order = false;
        this.list = this.list.reverse();
        this.list.remove(0)
        this.list.push({chapter_title: "..."});
      }
    },
    negative() {/*反*/
      if (this.order == false) {
        this.order = true;
        this.getCatalogue();

        if (this.list[0] == "...") {

          /* this.list.splice(0,1)*/
        }

      }
    },

  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
    }
  }
}
</script>

<style scoped>
.chapter-title-border {
  border: 0.5px solid rgb(223, 216, 216);
  width: 100%;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0.5px;
  border-radius: 3px;
}

.comice-title {
  background-color: white;
  color: #333333;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;
  font-weight: 600;
}

.comice-parent {
  display: flex;
  flex-direction: column;
}

.comice-property {
  display: flex;
  flex-direction: row;
  padding: 15px;


  background: linear-gradient(to bottom right, #a74cf8, #03ceca);
}

.img-cover {
  height: 140px;
  width: 110px;
  margin-right: 10px;
}

.mini-img {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  margin-top: 2px;
}

.data-line {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin-bottom: 3px;
}

.introduce-text {
  font-size: 12px;
  /* margin-bottom: 5px;*/
  color: white;
}

.introduce-authors-text {
  font-size: 12px;
  color: white;
  margin-top: 2px;
}

.introduce-time-text {
  font-size: 14px;
  margin-top: 3px;
  color: white;
}

.tag-text {
  font-size: 12px;

  color: #7f7a7a;
  color: white;
}

.button-subscribe {
  margin-top: 3px;
  background-color: #0f7adb;
  font-size: 13px;
  color: white;
  border-radius: 3px;
  padding-bottom: 6px;
  padding-top: 4px;
  margin-right: 5px;
  border: none;
}

.button-read {
  margin-top: 3px;
  background-color: rgba(245, 242, 242, 0);
  font-size: 13px;
  color: #ffffff;
  border-radius: 3px;
  padding-bottom: 6px;
  padding-top: 4px;
  border-color: white;
}

.button-parent {
  display: flex;
  flex-direction: row;
}

.synopsis {
  font-size: 14px;
  width: 100%;
  height: 50px;
  border: none;

  line-height: 30px;
  display: inline-block;
}

.synopsis-hide {
  font-size: 14px;
  width: 500px;
  height: 30px;
  border: none;

  line-height: 30px;
  display: inline-block;
}

.synopsis-parent {
  padding: 5px;
  background-color: white;

}


.click-icon {
  background-color: white;
  height: 20px;
  margin-bottom: 2px;

}

.click-icon-img {
  height: 10px;
  float: right;
  margin-right: 20px;
}

.page-extend {
  display: flex;
  flex-direction: row;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 6px;
}

.extend-left {
  width: 49%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.extend-centre {
  margin: 0 auto;
}

.extend-right {
  width: 49%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.extend-img {
  height: 15px;
  margin-right: 4px;
  margin-top: 3px;
}

.extend-font {

  font-size: 14px;
}

.advertising {
  height: 80px;
  margin-bottom: 6px;
}

.advertising-img {
  height: 80px;
  width: 100%;
}

.comment-title {
  background-color: white;
  padding: 9px;
  font-weight: bold;
  margin-bottom: 2px;
}

.userinfo {
  display: flex;
  flex-direction: row;
  height: 40px;
  padding: 10px;
  background-color: white;

}

.userinfo-img {
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.userinfo-font {
  font-size: 18px;
  padding-top: 7px;
  font-weight: bold
}

.userinfo-parent {
  display: flex;
  flex-direction: column;
}

.comment {
  background-color: white;
  margin-bottom: 2px;
  padding-left: 60px;
  padding-top: 8px;
  padding-bottom: 40px;
  color: #7f7a7a;
}

.chapters {
  display: flex;
  flex-direction: row;
  background-color: white;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 1px;
  justify-content: space-between;
}

.chapters-img {
  height: 12px;
}

.chapters-title {

}

.chapters-minus {
  margin-left: 5px;
}

.condition {
  display: flex;
  justify-content: center;
  background-color: white;
}

.condition-font {
  background-color: white;
  margin-left: 3px;
  margin-right: 3px;
}

.condition-border {
  font-size: 20px;
  font-weight: 750;
}


.catalog {
  background-color: white;
  padding: 5px;
}

.catalog-font {
  height: 40px;
  padding-bottom: 3px;
  padding-top: 3px;
}
</style>

<!--    background-color: rgba(245, 242, 242, 0);-->