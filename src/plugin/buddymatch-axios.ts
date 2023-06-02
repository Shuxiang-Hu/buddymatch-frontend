import axios, {AxiosInstance} from "axios";

const bm_axios : AxiosInstance= axios.create({
    baseURL: 'http://localhost:8080/api',
});

export default bm_axios;

bm_axios.defaults.withCredentials = true;
// 添加请求拦截器
bm_axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
bm_axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});