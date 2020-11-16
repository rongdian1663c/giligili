<template>
<div>

    <form action="/" fixed>
      <van-search v-model="value"
                  placeholder="作品名、作者" @search="onSearch" @cancel="onCancel"
                  input-align="center" show-action="show-action"/>
    </form>

<div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div>
  <div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div>
  <div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div>
  <div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div>
  <div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div><div>111</div>


</div>
</template>

<script>
import http from "@/components/utils/http";
import {Toast} from "vant";

export default {
name: "searchDetailPage",

  methods:{
    onSearch(param) {//点击搜索
      let url = "http://nnv3api.dmzj1.com/search/show/0/%E5%A6%96%E7%A5%9E%E8%AE%B0/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1605524916";
      http.get(url, params => {
        this.renewalList = params;
        console.log("params : " + this.renewalList)
      })

      Toast(param);
    },
    onCancel() {//取消按钮
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>

</style>