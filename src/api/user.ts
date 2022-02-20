import axios from 'axios';

interface Api {
  'user/info': {
    id: string;
  };
  'user/name': {
    id: string;
    name: string;
  };
}

export function request<T extends keyof Api>(url: T, obj?: Api[T]) {
  return axios.post(url, obj);
}

request('user/info');
