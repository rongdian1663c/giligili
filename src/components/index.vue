<!--底部tab-->

<template>
  <div class="tab">
    <!--设定具体跳转页面-->
    <div class="page-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="漫画">
          <comice/>
        </mt-tab-container-item>
        <mt-tab-container-item id="新闻">
          <news/>
        </mt-tab-container-item>
        <mt-tab-container-item id="轻小说">
          <light-novel></light-novel>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <mine/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!--tab栏显示的值-->
    <!--<mt-tabbar v-model="selected" fixed class="tab-parent">
      <div class="tab-son">
        <img src="@/assets/img/main_index_cart_def.png">
        <mt-tab-item id="漫画">
          漫画
        </mt-tab-item>
      </div>
      <div class="tab-son">
        <img src="@/assets/img/main_index_news_def.png">
      <mt-tab-item id="新闻">
        新闻
      </mt-tab-item>
      </div>
      <div class="tab-son">
        <img src="@/assets/img/main_index_novel_def.png">
      <mt-tab-item id="轻小说">
        轻小说
      </mt-tab-item>
      </div>
      <div class="tab-son">
        <img src="@/assets/img/main_index_mine_def.png">
      <mt-tab-item id="我的">
        我的
      </mt-tab-item>
      </div>
    </mt-tabbar>-->

    <mt-tabbar v-model="selected" class="tab-parent" fixed>
      <mt-tab-item id="漫画">
        <img slot="icon" src="@/assets/img/main_index_cart_def.png">
        漫画
      </mt-tab-item>
      <mt-tab-item id="新闻">
        <img slot="icon" src="@/assets/img/main_index_news_def.png">
        新闻
      </mt-tab-item>
      <mt-tab-item id="轻小说">
        <img slot="icon" src="@/assets/img/main_index_novel_def.png">
        轻小说
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="@/assets/img/main_index_mine_def.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Comice from "@/components/tab-detail/comice";
import LightNovel from "@/components/tab-detail/light-novel";
import News from "@/components/tab-detail/news";
import Mine from "@/components/tab-detail/mine";
export default {
  name: "index",
  components: {
    Mine,
    News,
    LightNovel,
    Comice
  },
  data() {
    return {
      selected: "漫画"//设定默认页面
    };
  }
}
</script>

<style scoped>

.tab-parent{
  display: flex;
  flex-direction: row;
  justify-content:space-around;
}
.tab-son{
  display: flex;
  flex-direction: column;
}
.page-wrap{
  margin-bottom: 30px;
 }
</style>