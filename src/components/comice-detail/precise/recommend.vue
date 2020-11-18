<!--默认的推荐页面-->
<template>
  <div style="height:100vh;overflow: scroll;"><!--v-if="recommendList[0].data"-->
    <!--下拉刷新,上拉加载-->
    <mt-loadmore v-bind:top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

      <div class="recommend-parent">
        <!--轮播图[0]-->
        <!--v-if="recommendList[0].data.url != ''"-->
        <div class="page-swipe">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="list in recommendList[0].data" v-bind:key="list.id">
              <img :src="list.cover" class="slideshow-img" @click="skip(list.url,list.obj_id,list.status)">
              <div class="slideshow-title">{{ list.title }}</div>
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
          <card-view v-for="item in recommendList[1].data" v-bind:key="item.obj_id" v-bind:item="item"/>
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
          <div v-for="index in recommendList[2].data" v-bind:key="index.obj_id" class="single-comics-4">
            <!--漫画封面-->
            <img :src="index.cover" class="comics-img-4" @click="skip(index.url,index.obj_id,index.status)" >
            <!--漫画名-->
            <div v-text="index.title" class="comics-name-long"></div>
          </div>
        </div>
        <!--上面为一整个部分-->

        <!--火热专题[3]title-->
        <div class="title-parent">
          <!--title图标-->
          <img src="@/assets/img/img_hot.png" class="mini-title">
          <!--title文字-->
          <div v-text="recommendList[3].title" class="comics-title"></div>
        </div>
        <div class="The-game-zone">
          <!--漫画,漫画名-->
          <div v-for="index in recommendList[3].data" v-bind:key="index.obj_id" class="single-comics-4">
            <!--漫画封面-->
            <img :src="index.cover" class="comics-img-4"  @click="skip(index.url,index.obj_id,index.status)">
            <!--漫画名-->
            <div v-text="index.title" class="comics-name-long"></div>
          </div>
        </div>
        <!--上面为一整个部分-->

        <!--大师级作品怎能不看[4]title-->
        <div class="title-parent">
          <!--title图标-->
          <img src="@/assets/img/img_master_work.png" class="mini-title">
          <!--title文字-->
          <div v-text="recommendList[4].title" class="comics-title"></div>
        </div>
        <div class="Recent-will-see">
          <!--漫画,漫画名,作者-->
          <card-view v-for="item in recommendList[4].data" v-bind:key="item.obj_id" v-bind:item="item"/>

        </div>
        <!--上面为一整个部分-->

        <!--国漫也精彩[5]title-->
        <div class="title-parent">
          <!--title图标-->
          <img src="@/assets/img/img_inner_cartoon.png" class="mini-title">
          <!--title文字-->
          <div v-text="recommendList[5].title" class="comics-title"></div>
        </div>
        <div class="Recent-will-see-6">
          <!--漫画,漫画名,作者-->
          <!-- <card-view v-for="item in recommendList[5].data" v-bind:key="item.obj_id" v-bind:item="item"/>-->
          <!--漫画,漫画名,作者-->
          <div class="single-comics" v-for="index in recommendList[5].data" v-bind:key="index.obj_id">

            <!--漫画封面-->
            <img :src="index.cover" class="comics-img-3" @click="skip(index.url,index.obj_id,index.status)">

            <!--漫画名-->
            <div v-text="index.title" class="comics-name"></div>
            <!--漫画作者-->
            <div v-text="index.sub_title" class="comics-author"></div>

          </div>

        </div>
        <!--上面为一整个部分-->

        <!--美漫大事件[6]title-->
        <div class="title-parent">
          <!--title图标-->
          <img src="@/assets/img/img_americ_eve.png" class="mini-title">
          <!--title文字-->
          <div v-text="recommendList[6].title" class="comics-title"></div>
        </div>
        <div class="The-game-zone">
          <!--漫画,漫画名-->
          <div v-for="index in recommendList[6].data" v-bind:key="index.obj_id" class="single-comics-4">
            <!--漫画封面-->
            <img :src="index.cover" class="comics-img-4" @click="skip(index.url,index.obj_id,index.status)">
            <!--漫画名-->
            <div v-text="index.title" class="comics-name-long"></div>
          </div>
        </div>
        <!--上面为一整个部分-->

        <!--热门连载[7]title-->
        <div class="title-parent">
          <!--title图标-->
          <img src="@/assets/img/img_hot_serial.png" class="mini-title">
          <!--title文字-->
          <div v-text="recommendList[7].title" class="comics-title"></div>
        </div>
        <div class="Recent-will-see-6">
          <!--漫画,漫画名,作者-->
          <card-view v-for="item in recommendList[7].data" v-bind:key="item.obj_id" v-bind:item="item"/>
        </div>
        <!--上面为一整个部分-->

        <!--条漫专区[8]title-->
        <div class="title-parent">
          <!--title图标-->
          <img src="@/assets/img/img_strip_cart.png" class="mini-title">
          <!--title文字-->
          <div v-text="recommendList[8].title" class="comics-title"></div>
        </div>
        <div class="The-game-zone">
          <!--漫画,漫画名-->
          <div v-for="index in recommendList[8].data" v-bind:key="index.obj_id" class="single-comics-4">
            <!--漫画封面-->
            <img :src="index.cover" class="comics-img-4">
            <!--漫画名-->
            <div v-text="index.title" class="comics-name-long"></div>
          </div>
        </div>

        <!--动画专区[9]title-->
        <div class="title-parent">
          <!--title-->
          <img src="@/assets/img/icon_pindonghua.png" class="mini-title">
          <div v-text="recommendList[9].title" class="comics-title"></div>
        </div>
        <div class="Recent-will-see-6">
          <!--漫画,漫画名,作者-->
          <card-view v-for="index in recommendList[9].data" v-bind:key="index.obj_id" v-bind:item="index"/>
        </div>

        <!--最新上架[10]title-->
        <div class="title-parent">
          <!--title-->
          <img src="@/assets/img/img_latest_pub.png" class="mini-title">
          <div v-text="recommendList[10].title" class="comics-title"></div>
        </div>
        <div class="Recent-will-see-6">
          <!--漫画,漫画名,作者-->
          <card-view v-for="item in recommendList[7].data" v-bind:key="item.obj_id" v-bind:item="item"/>
        </div>

        <!--猜我喜欢-->
        <div class="title-parent">
          <!--title-->
          <img src="@/assets/img/img_youlike.png" class="mini-title" @click="skip(index.url,index.obj_id,index.status)">
          <div v-text="loveList.title" class="comics-titFle"></div>
          <div>

            <!-- <div @click="backtop">回到顶部</div> -->
          </div>
        </div>
        <!--漫画,漫画名,作者-->
        <div class="Recent-will-see-bottom">
          <card-view v-for="item in loveList.data" v-bind:key="item.obj_id" v-bind:item="item"/>
        </div>


      </div>
    </mt-loadmore>
              <img src="@/assets/img/abc_btn_radio_to_on_mtrl_015.png" @click="backtop" class="kelleg">

  </div>
</template>

<script>
import http from "@/components/utils/http";
import CardView from "@/components/common/card-view";
import {Toast} from "mint-ui";

export default {
  // mounted() {
  //   window.addEventListener("scroll", this.showbtn, true);
  // },

  name: "recommend",
  components: {CardView},
  created() {
    this.getData();
    this.getLove();
  },
  data() {
    return {
      recommendList: [],
      loveList: [],
      allLoaded: false//为false说明没有获得所有的数据
    }
  },
  methods: {
    getData(loadmore) {
      let url = "/recommend_index_androids.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604973531";
      http.get(url, params => {
        this.recommendList = params;
        console.log(params);

        /*刷新加载*/
        if (loadmore) {
          this.$refs.loadmore.onBottomLoaded();
        } else {
          this.$refs.loadmore.onTopLoaded();
        }
      })
    },
    skip(url,id,sta) {
      if (url == ""){

        if(sta == ""){

          Toast('页面未完成');

        }else {
          this.$router.push({
            path: '/comiceCatalogue',
            query: {
              id: id
            }
          })
        }

      }else {
        window.location.href= url;
      }
    },
    /*showbtn(){
      let that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop
    },*/
    backtop() {
      let timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        // this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
        console.log("123")
      }, 30)
    },
    getLove() {
      let url = "/recommend/batchUpdate?terminal_model=MI%20MAX%203&category_id=50&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604992231";
      http.get(url, params => {
        this.loveList = params.data;
        console.log(params);
      })
    },
    loadTop() {//下拉刷新已有数据
      this.getData(false)
    },
    loadBottom() {//上划加载新的数据
      // num ++
      this.getData(true)
    }

  },


  /*
    getDescribe() {
      this.$router.push({
        path: '/download',
        params: {

        }
      })
    },*/
}
</script>

<style scoped>
.slideshow-title {
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

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

}

.kelleg {
  height: 50px;
  position: absolute;
  right: 0px;
  bottom: 50px;
}

.recommend-parent {
  flex: 1;
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

  /*  margin-bottom: 30px;*/
}

.Recent-will-see {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  margin-bottom: 12px;
  padding: 7px;
}

.Recent-will-see-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  padding: 7px;

}

.Recent-will-see-6 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  margin-bottom: 12px;
  flex-wrap: wrap;
  flex: 1;
}

.The-game-zone {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  margin-bottom: 12px;
  padding: 7px;
  flex-wrap: wrap;
}

.single-comics{
  width: 32%
}

.single-comics-4 {
  /*display: flex;
  flex-direction: column;*/
  float: left;
  width: 48%;
}

.comics-img-3 {
  width: 100%;
  margin: 0 auto;
  border-radius: 3px;
  margin-bottom: 2px;
}

.comics-img-4 {
  /* width: 190px;
   margin: 0 auto;*/
  border-radius: 10px;
  margin-bottom: 2px;

  display: block;
  width: 100%;
}

.comics-title {
  background-color: white;
  font-weight: 550;
  padding-top: 2px;
}

.title-parent {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  background-color: white;
  padding: 8px;
  justify-content: flex-start;
}

.mini-title {
  height: 25px;
  margin-right: 8px;
}

.comics-name {
  margin-bottom: 3px;
  font-weight: 550;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%
}

.comics-author {
  font-size: 14px;
  color: #858587;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
}

.comics-author-3 {
  font-size: 14px;
  font-weight: 550;
}

.comics-author-6 {
  font-size: 14px;
  margin-bottom: 5px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 120px
}

.comics-name-long {
  margin-bottom: 3px;
  font-weight: 550;
  margin-bottom: 10px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%

}
</style>
