import axios from 'axios'

axios.defaults.baseURL = '/api'//通过这里的/api走到 vue.config.js里的proxy(/api)
// 封装本地存储的方法
var http={
    get(url,callback) {
        // 为给定 ID 的 user 创建请求
        axios.get(url)
            .then(function (response) {
                console.log("response: ");
                console.log(response);
                callback(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    post(url,callback) {
        // 为给定 ID 的 user 创建请求
        axios.post(url)
            .then(function (response) {
                console.log("response: ");
                console.log(response);
                callback(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
export default http;