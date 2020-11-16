<template>
<div id="boxFixed">
    <!--搜索框-->
    <form action="/" fixed>
      <van-search placeholder="作品名、作者" @search="onSearch" @cancel="onCancel"
                  input-align="center" show-action="show-action" :class="{'is_fixed' : isFixed}"/>
    </form>

  <div class="comics-property" >
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
</template>

<script>
import http from "@/components/utils/http";
import {Toast} from "vant";

export default {
name: "searchDetailPage",
  data() {
    return {
      searchList:[],
      isFixed: false,
      offsetTop: 0,
    }
  }
  ,mounted() {
    window.addEventListener('scroll', this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = document.querySelector('#boxFixed').offsetTop;
    })
  },
//回调中移除监听
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    onSearch(param) {//点击搜索
      let url = "http://nnv3api.dmzj1.com/search/show/0/%E5%A6%96%E7%A5%9E%E8%AE%B0/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1605524916";
      http.get(url, params => {
        this.searchList = params;
        console.log("params : " + this.searchList)
      })

      Toast(param);
    },
    onCancel() {//取消按钮
      this.$router.go(-1);
    },
    initHeight() {
// 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    },
  }
}
</script>

<style scoped>
.is_fixed{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>