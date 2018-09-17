<template>
  <div id="popup-comment">
    <h2>Comment</h2>
    <textarea
      placeholder="Tuliskan komentar disini"
    ></textarea>

    <div class="btn--wrapper">
      <button class="btn--save" @click="onClickSave">SAVE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupComment",
  methods: {
    onClickSave() {
      this.$emit("saveComment");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/popupComment";
</style>
