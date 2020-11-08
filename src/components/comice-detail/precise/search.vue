<!--搜索页面-->
<!--@@@@@@@@@@@@@@@@@@@@搜索历史未完成@@@@@@@@@@@@@@@@@-->
<template>
  <div>
    <!--搜索框-->
    <form action="/">
      <van-search v-model="value"
                  placeholder="作品名、作者" @search="onSearch" @cancel="onCancel"
                  input-align="center" show-action="show-action"/>
    </form>
    <!--搜索框以下的页面-->
    <div class="search-page-parent">
      <div class="hint ">
        <div>搜索历史</div>
        <div>清空记录</div>
      </div>

      <div class="cut-off-rule"></div><!--分割线-->
      <div class="aaa">无能力者娜娜</div>
      <div class="sounima">大家都在搜</div>
      <div class="cut-off-rule"></div><!--分割线-->
      <div class="hot-search-parent ">
        <span class="hot-search " v-for="element in searchList" v-bind:key="element.id"
              :style="getColor()"
        >
         {{ element.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from "vant";
import http from "@/components/utils/http";

export default {
  name: "search",
  created() {
    this.getData();
  },
  data() {
    return {
      searchList: [],
      value: '',
    };
  },
  methods: {
    onSearch(param) {//点击搜索
      let url = "/search/show/0/" + param + "/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604843201";
      http.get(url, params => {
        this.renewalList = params;
        console.log("params : " + this.renewalList)
      })

      Toast(param);
    },
    onCancel() {//取消按钮
      Toast('取消');
    },
    getData() {
      let url = "/search/hot/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604835566";
      http.get(url, params => {
        this.searchList = params;
        console.log(params);
      })
    },
    getColor() {
      let colors = ["#56c2ff","#2881e0","#0656f3"];

      let color = colors[Math.floor(Math.random() * 3)]
      return {
        background: color
      }
    }/*,
    randomRgb() {
      let R = Math.floor(Math.random() * 255);//随机颜色
      let G = Math.floor(Math.random() * 255);
      let B = Math.floor(Math.random() * 255);
      return {
        background: 'rgb(' + R + ',' + G + ',' + B + ')'
      };*/
  }

}
</script>

<style scoped>
.search-page-parent {
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: white;
}

.hint {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.cut-off-rule {
  height: 1px;
  background-color: #858587;
  margin-top: 8px;
}

.sounima {
  margin-top: 30px;
}

.hot-search-parent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 9px;
}

.hot-search {
  color: white;
  font-size: 12px;
  padding: 5px 8px 5px 8px;
  background-color: #66ccff;
  margin: 4px;
  border-radius: 3px; /*@@@@@@@@@@@@@@@@@@@@@@@@@@圆角@@@@@@@@@@@@@@@@@@@@@@@@*/
}

.aaa {
  margin-top: 5px;
  margin-left: 5px;
  color: #7f7a7a;
}
</style>