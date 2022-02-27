import { isObject } from './shared';
import { reactive } from './reactivity/reactive';
import { track, trigger } from './reactivity/effect';

function createGetter(shallow = false) {
  // get 中直接返回读取的数据，这里的 Reflect.get 和 target[key] 实现的结果是一致的；并且返回值是对象的话，还会嵌套执行 reactive，并且调用 track 函数收集依赖。
  return function get(target: object, key: PropertyKey, receiver: any) {
    const res = Reflect.get(target, key, receiver);
    track(target, 'get', key);
    if (isObject(res)) {
      // 值也是对象的话，需要嵌套调用 reactive
      // res 就是 target[key]
      // 浅层代理，不需要嵌套
      return shallow ? res : reactive(res);
    }
  };
}

function createSetter() {
  // set 中调用 trigger 函数，执行 track 收集的依赖。
  return function set(target: object, key: PropertyKey, value: any, receiver: any) {
    const result = Reflect.set(target, key, value, receiver);
    // 在触发 set 时进行触发依赖
    trigger(target, 'set', key);
    return result;
  };
}

const get = createGetter();
const set = createSetter();

export const mutableHandlers = {
  get,
  set
};
