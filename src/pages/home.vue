<template>
  <div>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link>
  </div>
  <todo-list>
    <h1>回车键入</h1>
  </todo-list>
</template>

<script setup lang="ts">
import TodoList from '/@/components/TodoList/index.vue';
</script>
