<template>
  <button @click="clickEvent" class="base-button" type="submit">
    {{ buttonName }}
  </button>
</template>

<script>
export default {
  name: "baseButton",
  props: {
    buttonName: {
      type: String,
      required: true
    }
  },
  methods: {
    clickEvent() {
      this.$emit("buttonClick");
    }
  }
}
</script>

<style scoped>
.base-button {
  background: #555;
  color: #fafafa;
  border: none;
  border-radius: 5px;
  width: 100%;
}
</style>