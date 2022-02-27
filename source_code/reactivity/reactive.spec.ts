import { reactive } from './reactive';

import { effect } from './effect';

describe('测试响应式', () => {
  test('reactive基本使用', () => {
    const ret = reactive({ num: 0 });
    let val = 0;
    effect(() => {
      val = ret.num;
    });
    expect(val).toBe(0);
    ret.num += 1;
    expect(val).toBe(1);
  });
});
