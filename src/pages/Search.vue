<template>
  <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder="Enter tag here"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

  <van-divider content-position="left">Chosen Tags</van-divider>
  <van-tag v-for = "tag in activeId" :show="show" closeable size="medium" type="primary" @close="close(tag)">
    {{tag}}
  </van-tag>

  <van-divider content-position="left">All tags</van-divider>
  <van-tree-select
      v-model:active-id="activeId"
      v-model:main-active-index="activeIndex"
      :items="tags"
  />
  <van-button block type = "primary" @click="doSearch()" style="margin-top: 10px">
    Search
  </van-button>
</template>

<script setup lang = "ts">
import { ref } from 'vue';
import { showToast } from 'vant';
import {useRouter} from "vue-router";


const value = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => showToast('Cancel');



    const show = ref(true);
    const close = (tag) => {
      activeId.value = activeId.value.filter(item =>{
        return tag !== item;
      })
    };





    const activeId = ref([]);
    const activeIndex = ref(0);
    const tags = [
      {
        text: '性别',
        children: [
          { text: '男', id: '男' },
          { text: '女', id: '女' },
        ],
      },
      {
        text: '编程语言',
        children: [
          { text: 'Java', id:'Java' },
          { text: 'python', id: 'python' },
          { text: 'C++', id: 'C++' },
        ],
      },
    ];

  const router  = useRouter();
  const doSearch = ()=>{
    router.push({
      path : "user/list",
      query : {tags: activeId.value}
    });
    console.log(activeId.value)
  }

</script>

<style scoped>

</style>