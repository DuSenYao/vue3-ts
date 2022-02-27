// 在 track 函数中，可以使用一个巨大的 targetMap 去存储依赖关系。
// map 的 key 是要代理的 target 对象，值还是一个 depsMap，存储这每一个 key 依赖的函数，每一个 key 都可以依赖多个 effect。

// 由于 target 是对象，所以必须得用 map 才可以把 target 作为 key 来管理数据，每次操作之前需要做非空的判断。最终把 activeEffect 存储在集合之中：
const targetMap = new WeakMap();
let activeEffect: {
  (): void;
  // scheduler 存在的意义就是可以手动控制函数执行的时机，方便应对一些性能优化的场景，比如数据在一次交互中可能会被修改很多次，不想每次修改都重新执行依次 effect 函数，而是合并最终的状态之后，最后统一修改一次。
  scheduler: () => void;
} | null;

export function track(target: object, type: string, key?: PropertyKey) {
  // console.log(`触发 track -> target: ${target} type:${type} key:${key}`)

  // 1. 先基于 target 找到对应的 dep
  // 如果是第一次的话，那么就需要初始化
  // {
  //   target1: {//depsmap
  //     key:[effect1,effect2]
  //   }
  // }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    // 初始化 depsMap 的逻辑
    // depsMap = new Map()
    // targetMap.set(target, depsMap)
    // 上面两行可以简写成下面的
    targetMap.set(target, (depsMap = new Map()));
  }
  let deps = depsMap.get(key);
  if (!deps) {
    deps = new Set();
  }
  if (!deps.has(activeEffect) && activeEffect) {
    // 防止重复注册
    deps.add(activeEffect);
  }
  depsMap.set(key, deps);
}

// trigger 函数实现的思路就是从 targetMap 中，根据 target 和 key 找到对应的依赖函数集合 deps，然后遍历 deps 执行依赖函数。
export function trigger(target: object, type: string, key?: PropertyKey) {
  // console.log(`触发 trigger -> target:  type:${type} key:${key}`);
  // 从 targetMap 中找到触发的函数，执行它
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    // 没找到依赖
    return;
  }
  const deps = depsMap.get(key);
  if (!deps) {
    return;
  }
  // 可以看到执行的是 effect 的 scheduler 或者 run 函数，这是因为需要在 effect 函数中把依赖函数进行包装，并对依赖函数的执行时机进行控制，这是一个小的设计点。
  deps.forEach((effectFn: { (): void; scheduler: () => void }) => {
    if (effectFn.scheduler) {
      effectFn.scheduler();
    } else {
      effectFn();
    }
  });
}

// 把传递进来的 fn 函数通过 effectFn 函数包裹执行，在 effectFn 函数内部，把函数赋值给全局变量 activeEffect；
// 然后执行 fn() 的时候，就会触发响应式对象的 get 函数，get 函数内部就会把 activeEffect 存储到依赖地图中，完成依赖的收集：
export function effect(
  fn: () => void,
  options = {
    lazy: false,
    scheduler: () => {
      console.log(1);
    }
  }
) {
  // effect 嵌套，通过队列管理
  const effectFn = () => {
    try {
      activeEffect = effectFn;
      // fn执行的时候，内部读取响应式数据的时候，就能在 get 配置里读取到 activeEffect
      return fn();
    } finally {
      activeEffect = null;
    }
  };
  // effect 传递的函数，可以通过传递 lazy 和 scheduler 来控制函数执行的时机，默认是同步执行。
  if (!options.lazy) {
    // 没有配置lazy 直接执行
    effectFn();
  }
  // scheduler 存在的意义就是可以手动控制函数执行的时机，方便应对一些性能优化的场景，比如数据在一次交互中可能会被修改很多次，不想每次修改都重新执行依次 effect 函数，而是合并最终的状态之后，最后统一修改一次。
  effectFn.scheduler = options.scheduler; // 调度时机 watchEffect 回用到
  return effectFn;
}
