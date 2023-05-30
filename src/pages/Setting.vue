<template>
  <van-cell-group>

    <van-cell title="Id"  :value="curUser.id" />
    <van-cell title="User Name" is-link :value="curUser.username" @click="toEdit('username','User Name',curUser.username)" />
    <van-cell title="User Account"  :value="curUser.userAccount" />
    <van-cell title="Gender" :value="curUser.gender" />
    <van-cell title="Tel" is-link  :value="curUser.phone" @click="toEdit('phone','Tel',curUser.phone)"/>
    <van-cell title="E-mail" is-link  :value="curUser.email" @click="toEdit('email','E-mail',curUser.email)"/>
    <van-cell title="Tags" is-link :value="curUser.tags" @click="toEdit('tags','Tags',curUser.tags)"/>

  </van-cell-group>

</template>

<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";

const curUser = {
  id: 1231,
  username: "shuxiang",
  userAccount: "user123123",
  gender: 1,
  phone: "15052006166",
  email: "e0954632@u.nus.edu",
  tags: "java"
};
const router = useRouter()

const toEdit = (editKey:string, editName: string, editVal:string) =>{
  router.push({
    path: 'setting/edit',
    query: {
      editKey,
      editName,
      editVal
    }
  })
}

</script>

<style scoped>

</style>