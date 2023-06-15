<template>
  <div id = "teamPage">
    <form action="/">
      <van-search
          v-model="value"
          show-action
          placeholder="搜索队伍"
          @search="onSearch"
          @cancel="onCancel"
      />
    </form>
    <van-button type = "primary" @click = "doJoinTeam">加入队伍</van-button>
    <team-card-list :team-list="teamList"></team-card-list>
    <van-empty v-if="teamList?.length < 1" description="数据为空"/>
  </div>
</template>


<script setup lang = "ts">

import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import {showFailToast, showToast} from "vant";
import bm_axios from "../plugin/buddymatch-axios";

const router  = useRouter();

const doJoinTeam = () =>{
  router.push(
      {
        path:"/team/add"
      }
  )
}

const teamList = ref([]);
const searchText = ref('');
// 页面加载时只触发一次
onMounted( () => {
  listTeam();
})

const onSearch = (val) => {
  listTeam(val);
};


/**
 * 搜索队伍
 * @param val
 * @param status
 * @returns {Promise<void>}
 */
const listTeam = async (val = '', status = 0) => {
  const res = await bm_axios.get("/team/list/my/create", {
    params: {
      searchText: val,
      pageNum: 1,
      status,
    },
  });
  if (res?.code === 0) {
    teamList.value = res.data;
  } else {
    showFailToast('加载队伍失败，请刷新重试');
  }
}

const value = ref('');
const onCancel = () => showToast('Cancel');
</script>

<style scoped>

</style>