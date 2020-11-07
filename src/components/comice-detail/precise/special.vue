<!--专题页面-->
<template>
  <div>
    <!--整个个的周刊模块-->
    <div v-for="item in items" v-bind:key="item.id" class="item-tag"><!--单个周刊模块需要加白色边框-->
      <div class="item-tag-img"><!--图片-->
        <img :src="item.small_cover">
      </div>
      <div class="headline"><!--标题,日期-->
        <span class="subtitle">{{ item.title }} </span>
        <span class="date">{{ item.create_time * 1000| formatDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/components/utils/http";
import {formatDate} from "@/components/utils/date";

export default {
  name: "special",
  components: {},
  data() {//这是一个实例对象,只能用来声明变量,这里的变量都是成员变量
    return {
      items: []
    }
  },
  created() {//生命周期:页面初始化直接调用
    this.getData();
  },
  methods: {
    getData() {

      let url = "subject/0/0.json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604731708";
      http.get(url, params => {//params该参数可随意命名,需与下一段的this.items = params;的值相同
        this.items = params;//将值赋给成员变量,这里已经将值赋给了this.items
        console.log("params111: " + this.items)//这里已经拿到了具体的值
      })

    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
    }
  },
}
</script>

<style scoped>
.item-tag {
  display: flex;
  flex-direction: column;

}

.headline {
  flex-direction: row;
  justify-content: space-between; /* 设置内容居中,需要display: flex属性,flex的支持 */
  display: flex;
  background-color: white;
  font-size: 10px
}

.subtitle {
  margin-left: 10px;
  margin-bottom: 10px;

}

.date {
  margin-right: 10px;
  margin-bottom: 10px;
}

.item-tag-img {
  display: flex;
  background-color: white;
  margin-top: 10px;
  padding: 10px;
  justify-content: center;
}

img {
  border-radius: 10px;
  width: 100%;
  background-color: white;
}


</style>