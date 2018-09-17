<template>
  <div id="app">
    <Sidebar id="app-sidebar"/>
    <router-view id="app-view"/>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Popup from "./components/Popup";
export default {
  name: "App",
  components: {
    Sidebar,
    Popup
  }
};
</script>

<style lang="scss">
@import "./styles/app";

#app {
  display: flex;
  background-color: #f5f7fa;
  min-height: 100vh;

  &-view {
    margin-left: 12em;
  }
}

body {
  background-color: #f5f7fa;
}

h1,
h2,
h3,
p,
span,
div,
button,
textarea {
  font-family: "Roboto", sans-serif !important;
}
</style>
