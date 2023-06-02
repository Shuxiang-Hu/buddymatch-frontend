<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: 'Username is required' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: 'Password is required' }]"
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

import {useRouter} from "vue-router";
import {ref} from "vue";
import bm_axios from "../plugin/buddymatch-axios.ts";
import {Toast} from "vant";
import { showSuccessToast, showFailToast } from 'vant';


const router = useRouter()



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


  console.log(res);
  if(res.code  === 0 && res.data){
    showSuccessToast("登录成功");
    await router.replace('/');
  }else{
    showFailToast("登录失败");
  }
};
</script>

<style scoped>

</style>