//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
import recommend from "@/components/comice-detail/precise/recommend";
import download from "@/components/comice-detail/precise/download";
import index from "@/components/index";
//第三方库需要use一下才能用
Vue.use(VueRouter)

//定义routes路由的集合，数组类型
const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {
        path:'',
        component:index
    },
    {
        path:'/recommend',
        component:recommend
    },
    {
        path:"/download",
        component:download
    }
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router


