<template>
  <van-card
      v-for = "user in userList"
      :tag="user.gender"
      :title="user.username"
      :desc="user.profile"

      :thumb="user.avatarUrl"

  >
    <template #tags>
      <van-tag plain v-for="tag in user.tags" type="primary" style="margin-right: 8px;margin-top: 8px">{{tag}}</van-tag>

    </template>
  </van-card>

<!--  <user-card-list v-if="userList" :user-list="userList"></user-card-list>-->
</template>

<script setup>
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
import {onMounted, ref} from "vue";
import bm_axios from "../plugin/buddymatch-axios.ts";



const route = useRoute()




const userList = ref([]);

onMounted(async () => {

  const userPageResponse = await bm_axios.get('/user/recommend')
      .then(function (response) {
        //console.log('/user/search/tags succeed', response);
        return response?.data.records;
      })



  //console.log(userPageResponse)

  if (userPageResponse) {
    userPageResponse.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userPageResponse;
  }





})
</script>

<style scoped>

</style>