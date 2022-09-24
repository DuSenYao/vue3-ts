import { defineComponent, ref } from 'vue';

// 首先使用 defineComponent 的方式来定义组件
export default defineComponent({
  name: 'TodoList',
  setup() {
    let title = ref('');
    let todos = ref([{ title: '学习Vue3', done: false }]);

    function addTodo() {
      todos.value.push({
        title: title.value,
        done: false
      });
      title.value = '';
    }
    // 在 setup 返回的 JSX 中，使用 vModel 取代 v-model，并且使用单个大括号包裹的形式传入变量 title.value
    // 然后使用 onClick 取代 @click。循环渲染清单的时候，使用 .map 映射取代 v-for，使用三元表达式取代 v-if。
    return () => (
      <div>
        <input type='text' v-model={title.value} />
        <button onClick={addTodo}>click</button>
        <ul>
          {todos.value.length ? (
            todos.value.map((todo) => {
              return <li>{todo.title}</li>;
            })
          ) : (
            <li>no data</li>
          )}
        </ul>
      </div>
    );
  }
});
