// 因为 ref 和 computed 等功能都可以从 Vue 中全局引入，所以就可以把组件进行任意颗粒度的拆分和组合，这样就大大提高了代码的可维护性和复用性。
import { ref, computed, Ref } from 'vue';
import { useStorage } from '/@/utils/storage';

interface Todo {
  title: string;
  done: boolean;
}

// 把和清单相关的所有数据和方法，都放在函数内部定义并且返回，这样这个函数就可以放在任意的地方来维护。
export function useTodos() {
  // ref 函数使任何响应式变量在任何地方起作用，ref 接收参数并将其包裹在一个带有 value property 的对象中返回，然后可以使用该 property 访问或更改响应式变量的值
  const title = ref(''); // { value: '' }
  const showModal = ref(false);

  const todos: Ref<Todo[]> = ref(useStorage('todos', []));

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

  function clear() {
    todos.value = todos.value.filter((v: Todo) => !v.done);
  }

  function removeTodo(i: number) {
    todos.value.splice(i, 1);
  }

  const notActive = computed(() => todos.value.filter((v: Todo) => !v.done).length);
  const all = computed(() => todos.value.length);
  const allDone = computed({
    get() {
      return notActive.value === 0;
    },
    set(val: boolean) {
      todos.value.forEach((todo: Todo) => {
        todo.done = val;
      });
    }
  });

  return { title, showModal, todos, addTodo, clear, removeTodo, notActive, all, allDone };
}
