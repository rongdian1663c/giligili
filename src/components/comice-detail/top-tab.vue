<template>
<div>

  <div class="comic-tab-page">
    <mt-navbar v-model="selected" fixed="true">
      <mt-tab-item id="推荐">推荐</mt-tab-item>
      <mt-tab-item id="更新">更新</mt-tab-item>
      <mt-tab-item id="分类">分类</mt-tab-item>
      <mt-tab-item id="排行">排行</mt-tab-item>
      <mt-tab-item id="专题">专题</mt-tab-item>
      <mt-tab-item id="下载">00</mt-tab-item><!--待修改-->
      <mt-tab-item id="搜索"></mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="推荐"> <recommend/> </mt-tab-container-item>
      <mt-tab-container-item id="更新"> <renewal/> </mt-tab-container-item>
      <mt-tab-container-item id="分类"> <sort/> </mt-tab-container-item>
      <mt-tab-container-item id="排行"> <ranking/> </mt-tab-container-item>
      <mt-tab-container-item id="专题"> <special/> </mt-tab-container-item>
      <mt-tab-container-item id="下载"> <download/> </mt-tab-container-item>
      <mt-tab-container-item id="搜索"> <search/> </mt-tab-container-item>
    </mt-tab-container>
  </div>

</div>
</template>

<script>
import Recommend from "@/components/comice-detail/precise/recommend";
import Renewal from "@/components/comice-detail/precise/renewal";
import Sort from "@/components/comice-detail/precise/sort";
import Ranking from "@/components/comice-detail/precise/ranking";
import Special from "@/components/comice-detail/precise/special";
import Download from "@/components/comice-detail/precise/download";
import Search from "@/components/comice-detail/precise/search";

import { Navbar, TabItem } from 'mint-ui';
import Vue from 'vue';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

export default {
  name: "top-tab",
  components: {
    Search,
    Download,
    Special,
    Ranking,
    Sort,
    Renewal,
    Recommend
  },
  data(){
    return {
      selected : "推荐"
    };
  }
};
</script>

<style scoped>

</style>