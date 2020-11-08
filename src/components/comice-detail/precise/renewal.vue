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
        <div class="writer"><!--作家名-->
          <img src="@/assets/img/img_icon_head.png">
          <div v-text="element.authors"></div>
        </div>
        <div class="tag"><!--标签--></div>
        <div class="updatetime"><!--更新时间--></div>
      </div>
      <!--最新更新章节-->
      <div class="new-chapter">
        <img src="@/assets/img/img_icon_book.png">
        <!--<div v-text="element.last_update_chapter_name"></div>-->
        <div v-text="getName(element.last_update_chapter_name)" class="chapter-num"></div>
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
    },
    getName(aa) {
      return aa
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

.new-chapter {
  display: flex;
  flex-direction: column;
}

.writer {
  display: flex;
  flex-direction: row;
}

.tag {
  display: flex;
  flex-direction: row;
}

.updatetime {
  display: flex;
  flex-direction: row;
}
</style>