import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './assets/css/mint-ui.scss'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
axios.defaults.baseURL = '/api'

//导入mintui
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import router from "@/components/router";
Vue.use(MintUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
