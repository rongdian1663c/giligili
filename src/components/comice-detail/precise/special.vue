<!--专题页面-->
<template>
  <div>
    <!--vant下拉刷新组件-->
    <van-pull-refresh v-model="refresh" @refresh="onRefresh" class="refresh">
      <!--vant加载更多组件-->
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <!--整个个的周刊模块-->
        <div v-for="(item, index) in items" v-bind:key="index" class="item-tag">
          <!--单个周刊模块需要加白色边框-->
          <div class="item-tag-img">
            <!--图片-->
            <img :src="item.small_cover" v-if="item.small_cover"/>
          </div>
          <div class="headline">
            <!--标题,日期-->
            <span class="subtitle">{{ item.title }} </span>
            <span class="date">{{
              (item.create_time * 1000) | formatDate
            }}</span>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import http from "@/components/utils/http";
import { formatDate } from "@/components/utils/date";

export default {
  name: "special",
  components: {},
  data() {
    //这是一个实例对象,只能用来声明变量,这里的变量都是成员变量
    return {
      items: [],
      refresh: false,
      loading: false,
      finished: false,
      page: 0,
    };
  },
  created() {
    //生命周期:页面初始化直接调用
    this.getData();
  },
  methods: {
    onRefresh() {
      this.refresh = true;
      this.page = 0;
      this.getData();
    },
    onLoad() {
      this.loading = true;
      this.page++;
      this.getData();
    },
    getData() {
      //这个命名可随意更改
      let url =
        "subject/0/" +
        this.page +
        ".json?terminal_model=MI%20MAX%203&channel=Android&_debug=0&imei=3264861218cb65b7&version=2.7.035&timestamp=1604731708";

        //params该参数可随意命名,需与下一段的this.items = params;的值相同
      http.get(url, (params) => {
        //刷新完成,将refresh设置为false,则下拉回弹回去
        this.refresh = false;
        //加载更多完成,将loading设置为false,则加载更多回弹回去
        this.loading = false;

        //如果有数据就添加
        if (params != null && params != 0) {
          //刷新的时候,给items重新赋值
          if (this.refresh) {
            this.items = params; //将值赋给成员变量,这里已经将值赋给了this.items
          }
          //加载更多的时候,给items添加数据
          else {
            this.items.splice(this.items.length, 0, ...params);
          }
        }
        //如果没数据,就不能再加载更多
        else {
          this.finished = true;
        }
      });
    },
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
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
  font-size: 10px;
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