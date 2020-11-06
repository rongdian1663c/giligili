<!--底部tab-->

<template>
  <div>
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
          <light-novel/>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <mine/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!--tab栏显示的值-->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="漫画">
        漫画
      </mt-tab-item>
      <mt-tab-item id="新闻">
        新闻
      </mt-tab-item>
      <mt-tab-item id="轻小说">
        轻小说
      </mt-tab-item>
      <mt-tab-item id="我的">
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

</style>