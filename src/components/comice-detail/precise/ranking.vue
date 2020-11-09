<!--排行页面-->
<template>
  <div class="renewal-parent">
    <!--下拉菜单-->
    <div>

    </div>

    <!--需要显示的数据-->
    <div v-for="element in renewalList" v-bind:key="element.comic_id" class="renewal-page">
      <!--漫画图-->
      <img :src="element.cover" class="img-cover">

      <!--漫画属性-->
      <div class="comics-property">
        <div v-text="element.title" class="comics-title"></div><!--漫画标题-->
        <div class="writer"><!--作家名-->
          <img src="@/assets/img/img_icon_head.png" class="mini-img">
          <div v-text="element.authors" class="introduce-text"></div>
        </div>
        <div class="writer"><!--tag-->
          <img src="@/assets/img/img_icon_tag.png" class="mini-img">
          <div v-text="element.types" class="introduce-text"></div>
        </div>
        <div class="writer"><!--更新日期-->
          <img src="@/assets/img/img_icon_clock.png" class="mini-img">
          <span class="introduce-text">{{ element.last_updatetime * 1000| formatDate }}</span>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import http from "@/components/utils/http";

export default {
  name: "ranking",
  data() {
    renewalList : []
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "/rank/0/0/0/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604920120";
      http.get(url, params => {
        this.renewalList = params;
        console.log(params);
      })
    }
  }
}
</script>

<style scoped>

</style>