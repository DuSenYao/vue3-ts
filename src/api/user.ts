import { defHttp } from '/@/utils/http';
import type { LoginParams } from './model/userModel';

enum Api {
  Login = '/login'
}

/**
 * @description 登录
 */
export function Login(params: LoginParams) {
  return defHttp.post({
    url: Api.Login,
    params
  });
}
