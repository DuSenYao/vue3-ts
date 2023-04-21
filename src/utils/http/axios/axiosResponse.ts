import type { AxiosResponse } from 'axios';

export interface VAxiosResponse<T = any> extends AxiosResponse<T> {
  code: number;
  message?: string;
  error?: string;
}
