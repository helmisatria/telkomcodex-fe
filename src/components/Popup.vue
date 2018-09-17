<template>
  <div id="global-popup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Popup"
};
</script>

<style lang="scss" scoped>
@import "../styles/popup";
</style>
