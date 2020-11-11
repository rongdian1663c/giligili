<template>
  <div class="tab-slide-parent">

    <van-tabs sticky animated>
      <van-tab v-for="(item , index) in tagList" :title="item" v-bind:key="index">

        <!--推荐-->
        <div>
          <recommend-news></recommend-news>
        </div>

        <!--&lt;!&ndash;动画情报&ndash;&gt;
        <div v-if="index==1">
          <animation-intelligence></animation-intelligence>
        </div>

        &lt;!&ndash;漫画情报&ndash;&gt;
        <div v-if="index==2">
          <comice-intelligence></comice-intelligence>
        </div>

        &lt;!&ndash;轻小说情报&ndash;&gt;
        <div v-if="index==3">
          <light-novel-intelligence></light-novel-intelligence>
        </div>

        &lt;!&ndash;美图欣赏&ndash;&gt;
        <div v-if="index==4">
          <picture-show></picture-show>
        </div>

        &lt;!&ndash;游戏资讯&ndash;&gt;
        <div v-if="index==5">
          <game-information></game-information>
        </div>

        &lt;!&ndash;动漫周边&ndash;&gt;
        <div v-if="index==6">
          <anime-peripheral></anime-peripheral>
        </div>

        &lt;!&ndash;声优情报&ndash;&gt;
        <div v-if="index==7">
          <dubber-intelligence></dubber-intelligence>
        </div>

        &lt;!&ndash;漫展情报&ndash;&gt;
        <div v-if="index==8">
          <comicon-intelligence></comicon-intelligence>
        </div>

        &lt;!&ndash;音乐资讯&ndash;&gt;
        <div v-if="index==9">
          <music-information></music-information>
        </div>

        &lt;!&ndash;大杂烩&ndash;&gt;
        <div v-if="index==10">
          <hotchpotch></hotchpotch>
        </div>-->


      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
// import AnimationIntelligence from "@/components/news-detail/precise/animation-intelligence";
// import AnimePeripheral from "@/components/news-detail/precise/anime-peripheral";
// import ComiceIntelligence from "@/components/news-detail/precise/comice-intelligence";
// import ComiconIntelligence from "@/components/news-detail/precise/comicon-intelligence";
// import DubberIntelligence from "@/components/news-detail/precise/dubber-intelligence";
// import GameInformation from "@/components/news-detail/precise/game-information";
// import Hotchpotch from "@/components/news-detail/precise/hotchpotch";
// import LightNovelIntelligence from "@/components/news-detail/precise/light-novel-intelligence";
// import MusicInformation from "@/components/news-detail/precise/music-information";
// import PictureShow from "@/components/news-detail/precise/picture-show";
import RecommendNews from "@/components/news-detail/precise/recommend-news";

export default {
  name: "tab-slide",
  components: {
    RecommendNews,
    // PictureShow,
    // MusicInformation,
    // LightNovelIntelligence,
    // Hotchpotch,
    // GameInformation,
    // DubberIntelligence, ComiconIntelligence, ComiceIntelligence, AnimePeripheral, AnimationIntelligence
  },
  data() {
    return {
      active: 2,
      tagList: []
    };
  },
  created() {
    this.getTag();
  },
  methods: {
    getTag() {
      this.tagList = ["推荐", "动画情报", "漫画情报", "轻小说情报", "美图欣赏", "游戏资讯", "动漫周边", "声优情报", "漫展情报", "音乐资讯", "大杂烩"];
    }
  }
}
</script>

<style scoped>

</style>