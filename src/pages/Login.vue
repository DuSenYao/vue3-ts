<template>
  <div>
    <h1 class="login">LOGIN</h1>
    <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signIn(ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElForm } from 'element-plus';
import { setToken } from '/@/utils/auth';
import router from '/@/router';

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

<style lang="scss">
.login {
  color: #abc;
}
</style>
