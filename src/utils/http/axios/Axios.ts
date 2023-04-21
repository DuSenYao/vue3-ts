import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import type { CreateAxiosOptions } from './axiosTransform';
import type { VAxiosResponse } from './axiosResponse';
import type { UploadFileParams } from '/#/axios';

import axios from 'axios';

export class VAxios {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  /**
   * @description 拦截器配置
   */
  private setupInterceptors() {
    const {
      options: { transform }
    } = this;
    if (!transform) return;
    const { requestInterceptors, requestInterceptorsCatch, responseInterceptors, responseInterceptorsCatch } =
      transform;

    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (requestInterceptors) return requestInterceptors(config);
        return config;
      },
      (error) => requestInterceptorsCatch && requestInterceptorsCatch(error)
    );

    // 请求之后的拦截器
    this.axiosInstance.interceptors.response.use(
      (res: VAxiosResponse) => {
        if (responseInterceptors) return responseInterceptors(res);
        return res;
      },
      (error) => {
        responseInterceptorsCatch && responseInterceptorsCatch(error);
      }
    );
  }

  /**
   * @description:  File Upload
   */
  uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
    const formData = new window.FormData();
    const customFilename = params.name || 'file';

    if (params.filename) {
      formData.append(customFilename, params.file, params.filename);
    } else {
      formData.append(customFilename, params.file);
    }

    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        const value = params.data[key];
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item);
          });
          return;
        }

        formData.append(key, params.data[key]);
      });
    }

    return this.axiosInstance.request<T>({
      ...config,
      method: 'POST',
      data: formData,
      headers: {
        'Content-type': 'multipart/form-data;charset=UTF-8',
        ignoreCancelToken: true
      }
    });
  }

  get<T = any>(config: AxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T = any>(config: AxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.request(config);
  }
}
