import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use();

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 200) {
      console.log(res.message);
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  error => {
    console.log('接口信息报错', error);
    return Promise.reject(error);
  }
);

export default service;
