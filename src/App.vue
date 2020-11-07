<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <index/>
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/
import 'mint-ui/lib/style.css'
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);
import Index from "@/components/index";
export default {
  name: 'App',
  components: {
    Index
   /* HelloWorld*/
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ebebeb;
}
body {
  margin: 0;
  padding: 0;
}
</style>
