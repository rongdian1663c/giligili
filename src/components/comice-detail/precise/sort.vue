<!--分类页面-->
<template>
  <div class="sort-parent">
    <div v-for="item in list" v-bind:key="item.tag_id" class="sort-img">
      <img :src="item.cover" @click="skip()">
    </div>
    </div>
</template>

<script>
import http from "@/components/utils/http";

export default {
  name: "sort",
  data() {
    return {
      list: []
    }
  }, created() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "/0/category.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604753855";
      http.get(url, params => {
        this.list = params;
        console.log("params: " + this.list)
      })
    },
    skip(){
      this.$router.push({
        path: '/sortDetailPage',

      })
    }
  }
}
</script>

<style scoped>
.sort-parent{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  background-color: white;
  justify-content: center;
}
.sort-img{
  width: 30%;
  height: 30%;
  margin: 5.5px;
}
img{
 width: 100%;
  height: 100%;
  border-radius: 2px;
}
</style>