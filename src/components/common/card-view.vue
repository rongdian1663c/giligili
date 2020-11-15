<template>
  <!--漫画,漫画名,作者-->
  <div class="single-comics">
    <!--漫画封面-->
    <div v-if="item.sub_title">
      <img :src="item.cover" class="comics-img-3" @click="getDescribe(item.obj_id)">
    </div>

    <div v-if="item.sub_title===''">
      <img :src="item.cover" class="comics-img-3" @click="getDiverse()">
    </div>

    <div v-if="item.authors">
      <img :src="item.cover" class="comics-img-3" @click="getDiverse()">
    </div>

    <!--漫画名-->
    <div v-if="item.title" v-text="item.title" class="comics-name"></div>
    <!--漫画作者-->
    <div v-text="item.sub_title" class="comics-author"></div>
  </div>
</template>

<script>
import {Toast} from "mint-ui";

export default {
  name: "card-view",
  props: {
    item: {},
  },
  methods: {
    getDescribe(id) {
      this.$router.push({
        path: '/comiceCatalogue',
        query: {
          id: id
        }
      })
      /* this.$emit("onClick")/!*$emit 专门传递事件*!/*/
    },
    getDiverse() {
      Toast('提示信息');
    }
  }
}
</script>

<style scoped>
.single-comics {
  display: flex;
  flex-direction: column;
}

.comics-img-3 {
  width: 120px;
  margin: 0 auto;
  border-radius: 3px;
  margin-bottom: 2px;
}

.comics-name {
  margin-bottom: 3px;
  font-weight: 550;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 120px
}

.comics-author {
  font-size: 14px;
  color: #858587;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 120px;
}
</style>