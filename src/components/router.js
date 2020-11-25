//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
import recommend from "@/components/comice-detail/precise/recommend";
import index from "@/components/index";
import comiceCatalogue from "@/components/catalogue/comiceCatalogue";
import searchDetailPage from "@/components/comice-detail/precise/search-detail/searchDetailPage";
import sortDetailPage from "@/components/sort-detail/sortDetailPage";
import comicePage from "@/components/comice-detail/read-comice/comicePage";
import search from "@/components/comice-detail/precise/search";
import download from "@/components/comice-detail/precise/surprised";
import surprised from "@/components/comice-detail/precise/surprised";
//import recommendNewsUnlike from "@/components/news-detail/precise/recommendNewsUnlike";

//第三方库需要use一下才能用
Vue.use(VueRouter)

//定义routes路由的集合，数组类型
const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {
        path:'/',
        component:index
    },
    {
        path:'/recommend',
        component:recommend
    },
    {
        path:"/comiceCatalogue",
        component:comiceCatalogue
    },
    {
        path: "/searchDetailPage",
        component: searchDetailPage
    },
    {
        path: "/sortDetailPage",
        component: sortDetailPage
    },
    {
        path:"/comicePage",
        component: comicePage
    },
    {
        path: "/search",
        component: search
    },
    {
        path: "/surprised",
        component: surprised
    }
    // {
    //     path: "/recommend-news-unlike",
    //     component: recommendNewsUnlike
    // }
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router


