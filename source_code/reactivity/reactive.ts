import { mutableHandlers } from '../baseHandle';

export function reactive(target: any): any {
  const proxy: any = new Proxy(target, mutableHandlers);
  if (typeof target !== 'object') {
    console.warn(`reactive ${target}必须是一个对象`);
    return target;
  }
  // 在 Vue3 中，reactive 是通过 ES6 中的 Proxy 特性实现的属性拦截，所以，在 reactive 函数中直接返回 new Proxy 即可
  return proxy;
}
