<template>
  <div class="tab-slide-parent">

    <van-tabs sticky animated v-model="active">
      <van-tab v-for="(item , index) in tagList" :title="item.tag_name" v-bind:key="index">
        <!--推荐-->
        <recommend-news :id="item.tag_id"></recommend-news>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>

import RecommendNews from "@/components/news-detail/precise/recommend-news";
import http from "@/components/utils/http";

export default {
  name: "tab-slide",
  components: {
    RecommendNews,
  },
  data() {
    return {
      active: "2",
      tagList: [],
    };
  },
  created() {
    this.getTag();
  },
  methods: {
    getTag() {
      this.tagList.push( {"tag_id": 0, "tag_name": "推荐"})
      let url = "/article/category.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1605708468";
       http.get(url, params => {
         for (let i = 1; i < params.length; i++) {
            this.tagList.push(params[i])
         }
        //this.tagList = params;
        console.log( "看这里:" +params);
      })
      // this.tagList = ["推荐", "动画情报", "漫画情报", "轻小说情报", "美图欣赏", "游戏资讯", "动漫周边", "声优情报", "漫展情报", "音乐资讯", "大杂烩"];
    },

  }
}
</script>

<style scoped>

</style>