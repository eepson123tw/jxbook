<template>
  <div :style="style">{{ label }}</div>
  <slot name="footer"></slot>
  <label for="email">email</label>
  <input type="email" name="email" id="email" />
</template>
<script>
import { reactive, computed } from "vue";

export default {
  name: "haha-test",
  props: {
    label: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String
    },
    footer: {
      type: String
    }
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({})),
      style: computed(() => ({
        backgroundColor: props.backgroundColor
      }))
    };
  }
};
</script>
