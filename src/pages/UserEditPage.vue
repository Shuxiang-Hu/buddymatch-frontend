<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentVal"
          :name="editUser.editName"
          :label="editUser.editName"
          placeholder="Please enter here"
          :rules="[{ required: true, message: 'Username is required' }]"
      />

    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        Submit
      </van-button>
    </div>
  </van-form>

</template>

<script setup>

    import {ref} from "vue";
    import {useRoute, useRouter} from "vue-router";
    import bm_axios from "../plugin/buddymatch-axios.ts";
    import {showFailToast, showSuccessToast} from "vant";



    const router = useRouter();
    const route = useRoute();
    const editUser = ref({
      editKey : route.query.editKey,
      editName : route.query.editName,
      currentVal : route.query.editVal,
      userId: route.query.editId
    });

    const onSubmit = async () => {

      const res = await bm_axios.post('/user/update', {
        'id': editUser.value.userId,
        [editUser.value.editKey] : editUser.value.currentVal,
      })

      .catch(function (error) {
        console.log(error);
      });

      console.log(res)
      if(res.code === 0){
        showSuccessToast("信息修改成功");
        await router.replace("/");
      }else {
        showFailToast("信息修改失败");
      }

    };



</script>

<style scoped>

</style>