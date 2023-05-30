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
    import {useRoute} from "vue-router";


    const route = useRoute();
    const editUser = ref({
      editKey : route.query.editKey,
      editName : route.query.editName,
      currentVal : route.query.editVal
    });

    const onSubmit = (values) => {
      console.log('submit', values);
      console.log(route.query.editKey)
    };



</script>

<style scoped>

</style>