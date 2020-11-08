<!--更新页面-->
<template>
  <div class="renewal-parent">
    <!--顶部选项面板-->
    <div class="top-choose">
      111
    </div>
    <!--单独的漫画栏(整块)-->
    <div v-for="element in renewalList" v-bind:key="element.id" class="renewal-page">
      <!--漫画图-->
      <img :src="element.cover">
      <!--漫画属性-->
      <div class="comics-property">
        <div v-text="element.title" class="comics-title"></div><!--漫画标题-->
        <div class="writer"></div><!--作家名-->
        <div class="tag"></div><!--标签-->
        <div class="updatetime"></div><!--更新时间-->
      </div>
      <!--最新更新章节-->
      <div class="new-chapter">
      <!--  <img src="./assets/img/img_icon_book.png">-->
      </div>
    </div>

  </div>
</template>

<script>

import http from "@/components/utils/http";

export default {
  name: "renewal",
  created() {
    this.getData()
  },
  methods: {
    getData() {
      let url = "/latest/100/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604806511";
      http.get(url, params => {
        this.renewalList = params;
        console.log("params : " + this.renewalList)
      })
    }
  },
  data() {
    return {
      renewalList: []
    }
  }
}
</script>

<style scoped>
.renewal-parent {
  display: flex;
  flex-direction: column;
}

.renewal-page {
  display: flex;
  flex-direction: row;
  height: 100px;
}

img {
  height: 100%;
}

.comics-property {
  display: flex;
  flex-direction: column;
}

.comics-title {
  font-size: 13px;
}
.new-chapter{
  display: flex;
  flex-direction: row;
}
</style>