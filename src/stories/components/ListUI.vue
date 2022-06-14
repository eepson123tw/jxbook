<template>
  <ul>
    <template v-if="list && list?.length">
      <ListItem v-for="item of list" :key="item" :label="item"></ListItem>
    </template>
    <template v-else> 空空如也 </template>
  </ul>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  components: {
    ListItem
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup() {}
};
</script>

<style scoped>
ul {
  width: 150px;
  height: 300px;
  list-style: none;
  background-color: aqua;
}
</style>
