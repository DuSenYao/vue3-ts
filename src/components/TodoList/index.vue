<template>
  <div>
    <slot></slot>
    <input v-model="title" type="text" @keydown.enter="addTodo" />
    <button v-if="notActive < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <!-- 通过 tag 属性去指定渲染一个元素 -->
      <transition-group name="flip-list" tag="ul">
        <li v-for="(todo, i) in todos" :key="todo.title">
          <input v-model="todo.done" type="checkbox" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
          <span class="remove-btn" @click="removeTodo(i)">❌</span>
        </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input v-model="allDone" type="checkbox" />
      <span>{{ notActive }}/{{ all }}</span>
    </div>
  </div>
  <transition name="modal">
    <div v-show="showModal" class="info-wrapper">
      <div class="info">请输入内容！</div>
    </div>
  </transition>
</template>

<!-- script setup 中没法返回组件的名字，所以需要一个单独的标签，使用 options 的语法设置组件的 name 属性。 -->
<script lang="ts">
export default {
  name: 'TodoList'
};
</script>

<script setup lang="ts">
// 使用 <script setup> 可以让代码变得更加精简，这也是现在开发 Vue 3 项目必备的写法。
import { useTodos } from './useTodos';
import { computed } from 'vue';
import { useStore } from '/@/store';

let store = useStore();
let count = computed(() => store.state.count);
console.log(count.value);

// 在 <script setup> 标签内定义的变量和函数，都可以在模板中直接使用。
let { showModal, todos, addTodo, clear, removeTodo, notActive, all, allDone, title } = useTodos();
</script>

<style lang="scss" scoped>
.done {
  color: $basic-color;
  // 在 style 内部，可以使用 v-bind 函数绑定值，动态地通过 JS 的变量实现 CSS 的样式修改
  content: v-bind(title);

  // :deep() 样式穿透
  :deep(.el-button) {
    color: #334453;
  }
}

.info-wrapper {
  position: fixed;
  top: 20px;
  left: 40%;
  width: 200px;

  .info {
    padding: 20px;
    color: #fff;
    background-color: #d88986;
  }
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}

.modal-enter-active {
  transition: all 0.3s ease;
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.modal-leave-active {
  transition: all 0.3s ease;
}

.flip-list-move {
  transition: transform 0.8s ease;
}

.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}

.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
