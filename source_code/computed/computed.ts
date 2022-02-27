import { effect, track, trigger } from '../reactivity/effect';

class ComputedRefImpl {
  _setter: any;
  _val: any;
  _dirty: boolean;
  effect: () => void;

  constructor(getter: any, setter: any) {
    this._setter = setter;
    this._val = undefined;
    this._dirty = true;
    // computed就是一个特殊的 effect，设置 lazy 和执行时机
    this.effect = effect(getter, {
      lazy: true,
      scheduler: () => {
        if (!this._dirty) {
          this._dirty = true;
          trigger(this, 'value');
        }
      }
    });
  }
  get value() {
    track(this, 'value');
    if (this._dirty) {
      this._dirty = false;
      this._val = this.effect();
    }
    return this._val;
  }
  set value(val) {
    this._setter(val);
  }
}

export function computed(getterOrOptions) {
  // getterOrOptions可以是函数，也可以是一个对象，支持get和set
  // 还记得清单应用里的全选checkbox就是一个对象配置的computed
  let getter: { (): any; get?: any; set?: any };
  let setter: () => void;
  if (typeof getterOrOptions === 'function') {
    getter = getterOrOptions;
    setter = () => {
      console.warn('计算属性不能修改');
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  return new ComputedRefImpl(getter, setter);
}
