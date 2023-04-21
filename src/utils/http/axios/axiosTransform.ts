/**
 * Data processing class, can be configured according to the project
 */
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { RequestOptions, Result } from '/#/axios';
import type { VAxiosResponse } from './axiosResponse';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {
  /**
   * @description 在发送请求之前调用的函数。它可以根据需要修改请求配置。
   */
  beforeRequestHook?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  /**
   * @description: 处理响应数据
   */
  transformResponseHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

  /**
   * @description: 请求失败处理
   */
  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;

  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;

  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors?: (res: VAxiosResponse<any>) => VAxiosResponse<any>;

  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
