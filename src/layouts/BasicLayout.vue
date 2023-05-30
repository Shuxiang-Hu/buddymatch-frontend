


<template>

  <van-nav-bar
      id = "navbar"
      title="Title"
      left-text="Back"
      right-text="Search"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  />
  <div id = "content">





  </div>
  <router-view />

  <van-tabbar route>
    <van-tabbar-item replace to="/" icon="home-o">Home</van-tabbar-item>
    <van-tabbar-item replace to="/team" icon="friends-o">Team</van-tabbar-item>
    <van-tabbar-item replace to="/setting" icon="setting-o">Setting</van-tabbar-item>
  </van-tabbar>
<!--  <van-tabbar v-model="active" @change="onChange">-->
<!--    <van-tabbar-item icon="home-o" name = "index">Home Page</van-tabbar-item>-->
<!--    <van-tabbar-item icon="friends-o" name = "team">Team </van-tabbar-item>-->
<!--    <van-tabbar-item icon="setting-o" name = "setting">Setting</van-tabbar-item>-->
<!--  </van-tabbar>-->


</template>

<script setup>
  import Index from "../pages/Index.vue";
  import Team from "../pages/Team.vue";
  import Setting from "../pages/Setting.vue";
  import { ref } from 'vue';
  import { showToast } from 'vant';
  import {useRouter} from "vue-router";
  const onClickLeft = () => {
    router.back();
  };


  const router = useRouter();
  const onClickRight = () => {
    router.push("/search");

  };

  const active = ref(0);
  const onChange = (index) => showToast(`Tab ${index}`);
</script>

<style scoped>
#navbar{
  min-width: 340px;
}
</style>