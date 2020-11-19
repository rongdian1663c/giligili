<template>
  <div >

      <div v-for="(list,index) in imgUrl" v-bind:key="index">
        <img :src="list">
      </div>

  </div>
</template>

<script type="text/javascript">
export default {
  name: "comicePage",
  data() {
    return {
      imgUrl:"",
    }
  },
  created() {
    this.getImgList();
  },
  methods:{
    getImgList(){
      let coId = this.$route.query.coId;//漫画id
      let chId = this.$route.query.chId;//章节id
      let chOrder = this.$route.query.chOrder/10;//章节章数
      this.imgUrl = "http://imgsmall.dmzj1.com/a/"+coId+"/"+chId+"/"+chOrder+".jpg";
      // http://imgsmall.dmzj1.com/a/49356/111619/0.jpg
    },
  },

  components: {
  }
}
</script>

<style lang="stylus" scoped>
</style>
