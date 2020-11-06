import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//导入mintui
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);


new Vue({
  render: h => h(App),
}).$mount('#app')
