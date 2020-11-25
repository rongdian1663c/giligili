<template>
  <div>
    <!--  顶部title  -->
    <div class="title">
      <!--返回图片-->
      <img src="@/assets/img/img_back.png" class="title-img">
      <!--      title文字-->
      <span class="title-font">
        surprised
      </span>
    </div>

    <!--轮播图-->
    <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="list in gameList.data.recommends_roll" v-bind:key="list.id">
          <img :src="list.cover" class="slideshow-img">

        </mt-swipe-item>
      </mt-swipe>
    </div>
    

    <!--    time-->
    <div class="time-parent">
      <van-count-down millisecond :time="time" format="HH:mm:ss:SS"/>
    </div>


  </div>
</template>

<script type="text/javascript">
import http from "@/components/utils/http";


export default {
  name: "surprised",
  data() {
    return {
      gameList: [],
      time: 1 * 30 * 60 * 100,

    };
  },
  components: {},
  created() {
    this.getData()
  },
  methods: {
    getData() {
      let url = "/game_c.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1606208465";
      http.get(url, params => {
        this.gameList = params;
       // Toast('aa')
        console.log(params)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$vertical-flex-direction: column; //垂直       scss自定义变量
$level-flex-direction: row; //水平
$overstriking-font-weight: bold;//字体加粗
.title {
  display: flex;
  flex-direction: $level-flex-direction;   //插入变量
  padding-left: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 30px;
  justify-content: flex-start;
  background-color: #ff3737;

  .title-font {       //嵌套
    font-family: inherit;
    margin-left: 30%;
    font-size: 25px;
    font-weight: $overstriking-font-weight; //插入变量
    color: #ecf304;
  }

  .title-img {          //嵌套
    height: 80%;
    margin-top: 4px;
    color: #4caf50;
  }

}





.page-swipe {
  height: 100px +50px;    //计算功能
  width: 50% * 2;         //计算


}

.slideshow-img {
  height: 200px;
  width: 100%;

}

.time-parent{
  display: flex;
  flex-direction: $vertical-flex-direction;

}
</style>


