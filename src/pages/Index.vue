<template>
  <van-cell center title = "匹配模式">
    <template #right-icon>
      <van-switch v-model="isMatchMode" size = "15" />
    </template>
  </van-cell>

  <van-skeleton title avatar :row="3" :loading="loading" v-for = "user in userList">
  <van-card

      :tag="user.gender"
      :title="user.username"
      :desc="user.profile"

      :thumb="user.avatarUrl"

  >
    <template #tags>
      <van-tag plain v-for="tag in user.tags" type="primary" style="margin-right: 8px;margin-top: 8px">{{tag}}</van-tag>

    </template>
  </van-card>


  </van-skeleton>

<!--  <user-card-list v-if="userList" :user-list="userList"></user-card-list>-->
</template>

<script setup lang="ts">
// import {useRouter} from "vue-router";
// import {onMounted} from "vue";
//
// export default {
//   name: "Index"
// }
//
// const router = useRouter();
// onMounted(()=>{
//   router.push("/user/login");
// })

import {useRoute} from "vue-router";
import {onMounted, ref, watchEffect} from "vue";
import bm_axios from "../plugin/buddymatch-axios.ts";
import {showFailToast} from "vant";
import {UserType} from "../models/user";



const route = useRoute()
const isMatchMode = ref<boolean>(false)


const userList = ref([]);
const loading = ref(true);

/**
 * 加载数据
 */
const loadData = async () => {
  let userListData;
  loading.value = true;
  // 心动模式，根据标签匹配用户
  if (isMatchMode.value) {
    const num = 10;
    userListData = await bm_axios.get('/user/match', {
      params: {
        num,
      },
    })
        .then(function (response) {
          console.log('/user/match succeed', response);
          return response?.data;
        })
        .catch(function (error) {
          console.error('/user/match error', error);
          showFailToast('请求失败');
        })
  } else {
    // 普通模式，直接分页查询用户
    userListData = await bm_axios.get('/user/recommend', {
      params: {
        pageSize: 8,
        pageNum: 1,
      },
    })
        .then(function (response) {
          console.log('/user/recommend succeed', response);
          return response?.data?.records;
        })
        .catch(function (error) {
          console.error('/user/recommend error', error);
          showFailToast('请求失败');
        })
  }
  if (userListData) {
    userListData.forEach((user: UserType) => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
  loading.value = false;
}

watchEffect(() => {
  loadData();
})

</script>

<style scoped>

</style>