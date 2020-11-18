<template>
  <div class="tab-slide-parent">

    <van-tabs sticky animated>
      <van-tab v-for="(item , index) in tagList" :title="item" v-bind:key="index">

        <!--推荐-->
        <div>
          <recommend-news></recommend-news>
        </div>



      </van-tab>
    </van-tabs>

  </div>
</template>

<script>

import RecommendNews from "@/components/news-detail/precise/recommend-news";

export default {
  name: "tab-slide",
  components: {
    RecommendNews,

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