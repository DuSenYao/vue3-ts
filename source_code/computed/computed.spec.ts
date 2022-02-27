import { ref } from '../ref';
import { reactive } from '../reactivity/reactive';
import { computed } from './computed';

describe('computed测试', () => {
  it('computed基本使用', () => {
    const ret = reactive({ count: 1 });
    const num = ref(2);
    const sum = computed(() => num.value + ret.count);
    expect(sum.value).toBe(3);
    ret.count += 1;
    expect(sum.value).toBe(4);
  });

  it('computed属性修改', () => {
    const author = ref('Vue3');
    const course = ref('Hello');
    const title = computed({
      get() {
        return `${author.value}:${course.value}`;
      },
      set(val: any) {
        [author.value, course.value] = val.split(':');
      }
    });
    expect(title.value).toBe('Vue3:Hello');

    author.value = '前端';
    course.value = '测试';
    expect(title.value).toBe('前端:测试');
    // 计算属性赋值
    title.value = '前端:vue3';
    expect(author.value).toBe('前端');
    expect(course.value).toBe('vue3');
  });
});
