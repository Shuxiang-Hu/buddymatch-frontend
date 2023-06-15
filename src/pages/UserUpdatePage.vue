<template>
  <template v-if="curUser">
    <van-cell-group >

      <van-cell title="Id"  :value="curUser.id" />
      <van-cell title="用户名" is-link :value="curUser.username" @click="toEdit('username','用户名',curUser.username)" />
      <van-cell title="账户"  :value="curUser.userAccount" />
      <van-cell title="性别" :value="curUser.gender" />
      <van-cell title="电话号码" is-link  :value="curUser.phone" @click="toEdit('phone','电话号码',curUser.phone)"/>
      <van-cell title="电子邮箱" is-link  :value="curUser.email" @click="toEdit('email','电子邮箱',curUser.email)"/>
      <van-cell title="标签" is-link :value="curUser.tags" @click="toEdit('tags','标签',curUser.tags)"/>

    </van-cell-group>
  </template>


</template>

<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../service/user";


const router = useRouter()

const toEdit = (editKey:string, editName: string, editVal:string) =>{
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      editVal,
      'editId': curUser.value.id
    }
  })
}


const curUser = ref();
onMounted(async () => {
    curUser.value =  await getCurrentUser();
})
</script>

<style scoped>

</style>