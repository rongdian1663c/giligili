<!--分类页面-->
<template>
  <div class="sort-parent">
    <div v-for="item in list" v-bind:key="item.tag_id" class="sort">
      <img :src="item.cover" @click="skip()" class="sort-img">
      <div v-text="item.title" class="sort-text"></div>
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
  justify-content: flex-start;
}
.sort{
  width: 32%;
  margin-bottom: 5px;
  margin-left: 1%;
}
.sort-img{
 width: 100%;
  height: 83%;
  border-radius: 2px;
}
.sort-text{
  display: flex;
  flex-direction: row;
  justify-content:center;
}
</style>