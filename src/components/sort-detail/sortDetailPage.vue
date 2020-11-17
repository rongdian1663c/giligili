<!--分类-->
<template>
  <div class="sort-parent">

    <div v-for="list in renewalList" v-bind:key="list.id" class="sort-det">

      <!--图片-->
      <img :src="list.cover" class="sort-img">
      <!--作品名-->
      <div v-text="list.title" class="sort-title"></div>
      <!--作者-->
      <div class="sort-authors">作者: {{list.authors}}</div>

    </div>
    aaa
  </div>
</template>

<script>
import http from "@/components/utils/http";

export default {
  name: "sortDetailPage",
  data() {
    return {
      renewalList: [],
    }
  },
  created() {
    this.getData();

  },
  methods: {
    getData() {
      let url = "/classify/3263/0/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1605612836";
      http.get(url, params => {
        this.renewalList = params;
        console.log(this.renewalList);

      })
    },
  }
}
</script>

<style scoped>
.sort-parent{
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content:space-around;
  padding: 3px;
}
.sort-det{
  width: 30%;
}
.sort-img{
  border-radius: 3px;
  margin-bottom: 2px;
  display: block;
  width: 100%
}

</style>