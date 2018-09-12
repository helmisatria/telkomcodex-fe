<template>
  <div id="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar
  }
};
</script>

<style lang="scss">
@import "./styles/app";

#app {
  display: flex;
  background-color: #f5f7fa;
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
button {
  font-family: "Roboto", sans-serif !important;
}
</style>
