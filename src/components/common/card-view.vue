<template>
  <!--漫画,漫画名,作者-->
  <div class="single-comics">
    <!--漫画封面-->
    <img :src="item.cover" class="comics-img-3" @click="getDescribe()">
    <!--漫画名-->
    <div v-if="item.title" v-text="item.title" class="comics-name"></div>
    <!--漫画作者-->
    <div v-text="item.sub_title" class="comics-author"></div>
  </div>
</template>

<script>
export default {
  name: "card-view",
  props: {
    item: {

    },
  },
  methods:{
    getDescribe(){
      this.$emit("onClick")/*$emit 专门传递事件*/
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
}
</style>