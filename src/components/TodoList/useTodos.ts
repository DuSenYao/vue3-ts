// 因为 ref 和 computed 等功能都可以从 Vue 中全局引入，所以就可以把组件进行任意颗粒度的拆分和组合，这样就大大提高了代码的可维护性和复用性。
import { ref, computed, type Ref } from 'vue';
import { useStorage } from '/@/utils/storage';

interface Todo {
  title: string;
  done: boolean;
}

/**
 * @description 待办列表
 */
export function useTodos() {
  const title = ref(''); // { value: '' }
  const showModal = ref(false); // 是否显示提示

  const todos: Ref<Todo[]> = ref(useStorage('todos', []));

  /**
   * @description 添加待办
   */
  function addTodo() {
    if (!title.value) {
      showModal.value = true;
      setTimeout(() => {
        showModal.value = false;
      }, 1500);
      return;
    }
    todos.value.push({
      title: title.value,
      done: false
    });
    title.value = '';
  }

  /**
   * @description 清除已完成
   */
  function clear() {
    todos.value = todos.value.filter((v: Todo) => !v.done);
  }

  /**
   * @description 删除待办
   * @param i 待办索引
   */
  function removeTodo(i: number) {
    todos.value.splice(i, 1);
  }

  const selectedNum = computed(() => todos.value.filter((v: Todo) => v.done).length); // 选中的数量
  const allDone = computed({
    get() {
      return selectedNum.value === todos.value.length;
    },
    set(val: boolean) {
      todos.value.forEach((todo: Todo) => {
        todo.done = val;
      });
    }
  }); // 是否全选

  return { title, showModal, todos, addTodo, clear, removeTodo, selectedNum, allDone };
}
