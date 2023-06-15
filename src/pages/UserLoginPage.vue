<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请输入用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请输入密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        Submit
      </van-button>
    </div>
  </van-form>

</template>

<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import bm_axios from "../plugin/buddymatch-axios.ts";
import {showFailToast, showSuccessToast} from 'vant';


const router = useRouter()
const route = useRoute()
const userAccount= ref('');
const password = ref('');
const onSubmit = async () => {
  const res = await bm_axios.post(
      "user/login",
      {
        'userAccount': userAccount.value,
        'userPassword': password.value
      }
  )



  if(res.code  === 0 && res.data){
    showSuccessToast("登录成功");
    window.location.href = route.query?.redirect as string ?? '/';
  }else{
    showFailToast("登录失败");
  }
};
</script>

<style scoped>

</style>