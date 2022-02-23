import Button from './Button.vue';
import { mount } from '@vue/test-utils';

describe('按钮测试', () => {
  it('按钮能够显示文本', () => {
    const content = '按钮';
    const wrapper = mount(Button, {
      slots: {
        default: content
      }
    });
    expect(wrapper.text()).toBe(content);
  });

  it('通过size属性控制大小', () => {
    const size = 'small';
    const wrapper = mount(Button, {
      props: {
        size
      }
    });
    // size 内部通过 class 控制
    expect(wrapper.classes()).toContain('vt-button--small');
  });
});
