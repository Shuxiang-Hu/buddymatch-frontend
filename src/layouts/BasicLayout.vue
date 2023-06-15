


<template>

  <van-nav-bar
      id = "navbar"
      :title="title"
      left-text="返回"
      right-text="搜索用户"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  />
  <div id = "content" style = "padding-bottom: 30px">



    <router-view />

  </div>


  <van-tabbar route >
    <van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item replace to="/team" icon="friends-o">队伍</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="setting-o">个人</van-tabbar-item>
  </van-tabbar>
<!--  <van-tabbar v-model="active" @change="onChange">-->
<!--    <van-tabbar-item icon="home-o" name = "index">Home Page</van-tabbar-item>-->
<!--    <van-tabbar-item icon="friends-o" name = "team">Team </van-tabbar-item>-->
<!--    <van-tabbar-item icon="setting-o" name = "setting">Setting</van-tabbar-item>-->
<!--  </van-tabbar>-->


</template>

<script setup lang = "ts">

  import { ref } from 'vue';
  import { showToast } from 'vant';
  import {useRoute, useRouter} from "vue-router";
  import routes from "../config/route.js";
  const onClickLeft = () => {
    router.back();
  };


  const router = useRouter();
  const DEFAULT_TITLE = '伙伴匹配';
  const title = ref(DEFAULT_TITLE);

  /**
   * 根据路由切换标题
   */
  router.beforeEach((to, from) => {
    const toPath = to.path;
    const route = routes.find((route) => {
      return toPath == route.path;
    })
    title.value = route?.title ?? DEFAULT_TITLE;
  })



  const onClickRight = () => {
    router.push("/search");

  };

  const route = useRoute();

  const active = ref(0);
  const onChange = (index) => showToast(`Tab ${index}`);
</script>

<style scoped>
#navbar{
  min-width: 340px;
}



</style>