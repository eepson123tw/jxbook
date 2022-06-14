<template>
  <li>{{ label }}</li>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: ""
    }
  },
  setup() {}
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
