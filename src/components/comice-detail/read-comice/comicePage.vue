<template>
  <div >


        <img :src="imgUrl">


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
      this.imgUrl = "https://m.dmzj.com/view/49356/111619.html";
      // https://m.dmzj.com/view/49356/111619.html
    },
  },

  components: {
  }
}
</script>

<style lang="stylus" scoped>
</style>
