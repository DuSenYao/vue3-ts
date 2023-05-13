<template>
  <div>
    <slot></slot>
    <input v-model="title" type="text" @keydown.enter="addTodo" />
    <button v-if="selectedNum > 0" @click="clear">清理</button>
    <ul v-if="todos.length">
      <TransitionGroup name="flip-list" tag="ul">
        <li v-for="(todo, i) in todos" :key="todo.title">
          <label>
            <input v-model="todo.done" type="checkbox" />
            <span :class="{ done: todo.done }">{{ todo.title }}</span>
          </label>
          <span class="remove-btn" @click="removeTodo(i)">❌</span>
        </li>
      </TransitionGroup>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input v-model="allDone" type="checkbox" />
      <span>{{ selectedNum }}/{{ todos.length }}</span>
    </div>
  </div>
  <transition name="modal">
    <div v-show="showModal" class="info-wrapper">
      <div class="info">请输入内容！</div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useTodos } from './useTodos';

defineOptions({
  name: 'TodoList'
});

let { showModal, todos, addTodo, clear, removeTodo, selectedNum, allDone, title } = useTodos();
</script>

<style lang="scss" scoped>
.done {
  color: $basic-color;

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
