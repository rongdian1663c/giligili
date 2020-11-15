<!--更新页面-->
<template>
  <div class="renewal-parent">
    <!--顶部选项面板-->
    <div class="top-choose">
      <van-dropdown-menu class="drop-down-list">
        <van-dropdown-item v-model="value1" :options="option1" @change="change"/>
      </van-dropdown-menu>
      <img src="@/assets/img/img_list_style_grid.png" class="no-use">
    </div>
    <div class="aLine"/><!--分割线-->
    <!--单独的漫画栏(整块)-->
    <div v-for="element in renewalList" v-bind:key="element.id" class="renewal-page">
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
          <!--<div v-text="element.last_updatetime" class="introduce-text"></div>-->
          <span class="introduce-text">{{ element.last_updatetime * 1000| formatDate }}</span>
        </div>

<!--        <div class="tag">&lt;!&ndash;标签&ndash;&gt;</div>
        <div class="updatetime">&lt;!&ndash;更新时间&ndash;&gt;</div>-->
      </div>
      <!--最新更新章节-->
      <div class="new-chapter">
        <img src="@/assets/img/img_icon_book.png" class="chapter-img">
        <!--<div v-text="element.last_update_chapter_name"></div>-->
        <div v-text="getName(element.last_update_chapter_name)" class="chapter-num"></div>
      </div>

    </div>


  </div>
</template>

<script>

import http from "@/components/utils/http";
import {formatDate} from "@/components/utils/date";

export default {
  name: "renewal",
  created() {
    this.getData(100)
  },
  methods: {
    getData(param) {
      /*
            let url = "/latest/100/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604806511";
      */
      let url = "/latest/" + param + "/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604806511";
      http.get(url, params => {
        this.renewalList = params;
        console.log("params : " + this.renewalList)
      })
    },
    getName(aa) {
      return aa
    },
    change(value) {
      if (value == 1) {
        this.getData(1)
      } else if (value == 2) {
        this.getData(0)
      } else if (value == 0) {
        this.getData(100)
      }

      console.log(value)
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
    }
  },
  data() {
    return {
      renewalList: [],

      value1: 0,

      option1: [
        {text: '全部漫画', value: 0},
        {text: '原创漫画', value: 1},
        {text: '译制漫画', value: 2},
      ]
    }
  }
}
</script>

<style scoped>
.renewal-parent {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.renewal-page {
  display: flex;
  flex-direction: row;
  height: 100px;
  margin-bottom: 2px;
  background-color: white;
  padding: 6px;

}

.img-cover {
  height: 100%;
  display: flex;
  border-radius: 5px;
  margin-right: 20px;
  margin-left: 6px;

}

.comics-property {
  display: flex;
  flex-direction: column;
}

.comics-title {
  font-size: 16px;
  font-weight: bold;
  padding-top: 7px;
  padding-bottom: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100px
}

.new-chapter {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  align-items: center;


}

.writer {
  display: flex;
  flex-direction: row;

}
/*
.tag {
  display: flex;
  flex-direction: row;
}

.updatetime {
  display: flex;
  flex-direction: row;
}*/

.top-choose {

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;

}

.drop-down-list {
  width: 30%;
  box-shadow: 0 2px 2px rgba(100, 101, 102, .12);
}

.no-use {
  display: flex;
  margin: 10px 10px 10px 10px;
  width: 15px;
  height: 15px;
  padding: 3px;
}

.aLine {
  background-color: #E6E3E3;
  height: 2px;
}

.chapter-img {
  width: 40px;
  height: 38px;
  display: flex;
  margin-top: 20px;

}

.chapter-num {
  font-size: 15px;
  white-space: nowrap;

  text-overflow: ellipsis;
  overflow: hidden;
  width: 100px;
  text-align: center; /***************************************文字居中*/

}

/*.writer-img{
  width: 15px;
  height: 15px;
}*/
.mini-img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}

.introduce-text {
  font-size: 14px;
  margin-bottom: 5px;
  color: #7f7a7a;

  width: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

}
</style>