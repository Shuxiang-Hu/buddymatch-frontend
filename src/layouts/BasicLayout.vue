


<template>

  <van-nav-bar
      id = "navbar"
      title="Title"
      left-text="Back"
      right-text="Button"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  />
  <div id = "content">
    <template v-if="active === 'index'">
      <Index/>

    </template>
    <template v-if="active === 'team'">
      <Team/>

    </template>

    <template v-if="active === 'setting'">
      <Setting/>

    </template>
  </div>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name = "index">Home Page</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name = "team">Team </van-tabbar-item>
    <van-tabbar-item icon="setting-o" name = "setting">Setting</van-tabbar-item>
  </van-tabbar>


</template>

<script setup>
  import Index from "../pages/Index.vue";
  import Team from "../pages/Team.vue";
  import Setting from "../pages/Setting.vue";
  import { ref } from 'vue';
  import { showToast } from 'vant';
  const onClickLeft = () => alert("left");
  const onClickRight = () => alert("right");

  const active = ref(0);
  const onChange = (index) => showToast(`Tab ${index}`);
</script>

<style scoped>
#navbar{
  min-width: 340px;
}
</style>