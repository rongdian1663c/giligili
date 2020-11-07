
<!--分类页面-->
<template>
<div>
  {{list[0]}}
</div>
</template>

<script>
import http from "@/components/utils/http";

export default {
  name: "sort",
  data(){
    return{
      list:[]
    }
  },created() {
    this.getData();
  },
  methods:{
    getData(){
      let url = "/0/category.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604753855";
      http.get(url,params=>{
        this.list = params;
        console.log("params: " + this.list)
      })
    }
}
}
</script>

<style scoped>

</style>