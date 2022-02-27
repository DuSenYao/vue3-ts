import { isObject } from './shared';
import { track, trigger } from './reactivity/effect';
import { reactive } from './reactivity/reactive';

export function isRef(val: any) {
  return Boolean(val && val.__isRef);
}

function convert(val: any) {
  return isObject(val) ? reactive(val) : val;
}

class RefImpl {
  _val: any;
  __isRef: boolean;

  constructor(val: any) {
    this.__isRef = true;
    this._val = convert(val);
  }

  get value() {
    track(this, 'value');
    return this._val;
  }

  set value(val) {
    if (val !== this._val) {
      this._val = convert(val);
      trigger(this, 'value');
    }
  }
}

// ref 函数实现的相对简单很多，只是利用面向对象的 getter 和 setter 拦截了 value 属性的读写，这也是为什么需要操作 ref 对象的 value 属性的原因。
// ref 也可以包裹复杂的数据结构，内部会直接调用 reactive 来实现
export function ref(val: any) {
  if (isRef(val)) {
    return val;
  }
  return new RefImpl(val);
}
