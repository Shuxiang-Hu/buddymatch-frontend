<template>
  <template v-if="curUser">
    <van-cell-group>
      <van-cell title="当前用户：" :value = "curUser.username" />
      <van-cell title="修改个人信息" is-link to="/user/update" />
      <van-cell title="我创建的队伍" is-link to="/user/team/create" />
      <van-cell title="我加入的队伍" is-link to="/user/team/join" />
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
    path: 'user/edit',
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