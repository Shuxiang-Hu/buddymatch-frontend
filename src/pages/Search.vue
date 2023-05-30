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
      :items="items"
  />

</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';


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
    const items = [
      {
        text: 'Group 1',
        children: [
          { text: 'Delaware', id: 1 },
          { text: 'Florida', id: 2 },
          { text: 'Georqia', id: 3, disabled: true },
        ],
      },
      {
        text: 'Group 2',
        children: [
          { text: 'Alabama', id: 4 },
          { text: 'Kansas', id: 5 },
          { text: 'Louisiana', id: 6 },
        ],
      },
      { text: 'Group 3', disabled: true },
    ];



</script>

<style scoped>

</style>