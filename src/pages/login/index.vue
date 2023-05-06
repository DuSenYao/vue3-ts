<template>
  <div class="login">
    <main class="login-container">
      <h1 class="title">用户登录</h1>
      <el-form ref="ruleFormRef" :model="form" :rules="rules" label-position="right">
        <el-form-item prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" show-password />
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="signIn(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Login'
};
</script>

<script setup lang="ts">
import { ElForm } from 'element-plus';
import { setToken } from '/@/utils/auth';
import { reactive, ref } from 'vue';

import { router } from '/@/router';

type FormInstace = InstanceType<typeof ElForm>;
const ruleFormRef = ref<FormInstace>();

const form = reactive({
  name: 'user',
  password: 'password'
});

const rules = reactive({
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
});

const signIn = (formEl: FormInstace | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      setToken(`user=${form.name}`);
      router.push('/');
    } else {
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #2d3a4b;

  &-container {
    padding: 200px;

    .title {
      margin-bottom: 20px;
      color: #abc;
      text-align: center;
    }

    :deep(.el-form) {
      max-width: 400px;
      margin: 0 auto;
    }

    .submit {
      width: 100%;
    }
  }
}
</style>
