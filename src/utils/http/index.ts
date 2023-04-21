import type { VAxiosResponse } from './axios/axiosResponse';
import type { AxiosTransform } from './axios/axiosTransform';

import { ElMessage } from 'element-plus';
import { VAxios } from './axios/Axios';

/**
 * @description 数据处理与拦截器处理
 */
const transform: AxiosTransform = {
  // 请求之前处理 config
  beforeRequestHook: (config) => {
    return config;
  },

  /**
   * @description 请求拦截器处理
   */
  requestInterceptors: (config) => {
    return config;
  },

  /**
   * @description 请求拦截器错误处理
   */
  requestInterceptorsCatch: (error) => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    });
    return Promise.reject(error);
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: VAxiosResponse<any>) => {
    const { data, code, error, status } = res;

    if (code === 404) {
      ElMessage({
        message: '请求的资源不存在',
        type: 'error',
        duration: 3 * 1000
      });
      throw new Error('请求的资源不存在');
    }

    // 返回数据失败
    if (status === 0) {
      ElMessage({
        message: error,
        type: 'error',
        duration: 3 * 1000
      });
      throw new Error(`${error}`);
    }

    // 无效的操作用户
    if (status === -1) {
      ElMessage({
        message: error,
        type: 'error',
        duration: 3 * 1000
      });

      throw new Error(error);
    }

    if (!data) {
      throw new Error('[HTTP] Request has no return value');
    }

    return res;
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (error: any) => {
    if (error.code === 'ERR_CANCELED') {
      return ElMessage.success('取消上传成功');
    }

    ElMessage({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
};

function createAxios() {
  return new VAxios({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10 * 1000,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    transform,
    requestOptions: {}
  });
}

export const defHttp = createAxios();
