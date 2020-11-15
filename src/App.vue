<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import 'mint-ui/lib/style.css'
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);




export default {
  name: 'App',
  components: {
    /* HelloWorld*/
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;*/
  color: #2c3e50;
  background-color: #ebebeb;
}
body {
  margin: 0;
  padding: 0;
}
</style>

