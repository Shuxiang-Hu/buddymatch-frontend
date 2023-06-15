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

  <div>
    <van-empty image="search" description="暂无符合要求用户" v-if="!userList || userList.length===0"></van-empty>
  </div>
</template>

<script setup lang = "ts">
  import {useRoute} from "vue-router";
  import {onMounted, ref} from "vue";
  import bm_axios from "../plugin/buddymatch-axios.ts";




  const route = useRoute()





  const userList = ref([]);

  onMounted(async () => {
    const tagNames = route.query.tags.join(",");
    const userListResponse = await bm_axios.get('/user/searchByTags', {
      params: {
        tagNameList: tagNames
      }
    })
    .then(function (response) {
      console.log('/user/search/tags succeed', response);
      return response?.data;
    })




    console.log(userListResponse)
    if (userListResponse) {
      userListResponse.forEach(user => {
        if (user.tags) {
          user.tags = JSON.parse(user.tags);
        }
      })
      userList.value = userListResponse;
    }





  })

</script>

<style scoped>

</style>