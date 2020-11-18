<template>
  <div class="top-parent">
      <img src="@/assets/img/img_back.png" class="return-img" @click="getReturn" />
     <div class="top-title"> {{UDtext}} </div>
     <img src="@/assets/img/img_share_icon.png" class="share-img"/>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "titleTab",
  props: {
    UDtext: "",
  },
  components: {
  },
  methods:{
      getReturn(){
            if (window.history.length <= 1) {
                this.$router.push({path:'/recommend'})
                return false
            } else {
                this.$router.go(-1)
            }
      }
  }
}
</script>

<style scoped>
.top-title{
    height: 30px;
    background-color: white;
    text-align: center;
    width: 80%;
}

.return-img{
    height: 20px;
     background-color: white;
}
.share-img{
height: 20px;
 background-color: white;
}
.top-parent{
   display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    height: 20px;
    padding: 20px;


    top: 0;
    right: 0;
    left: 0;
    position: static;
    z-index: 1;
}
</style>
