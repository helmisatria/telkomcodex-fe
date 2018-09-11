<template>
  <div class="sidebar">
    <img 
      src="../assets/logo.png" 
      alt="logo" 
      class="sidebar--logo"
    />
    <router-link to="/" class="sidebar--point active" tag="div">
      Project
    </router-link>
    <router-link to="/teamPerformance" class="sidebar--point" tag="div">
      Team Performance
    </router-link>
    <router-link to="/calendar" class="sidebar--point" tag="div">
      Calendar
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss" scoped>
.sidebar {
  padding-left: 1em;
  -moz-box-shadow: 2px 1px 3px 1px rgb(236, 236, 236);
  -webkit-box-shadow: 2px 1px 3px 1px rgb(236, 236, 236);
  box-shadow: 2px 1px 3px 1px rgb(236, 236, 236);
  // position: fixed;
  height: 100vh;
  background-color: white;

  &--logo {
    width: 10em;
    padding: 1em 1em 1em 0;
  }

  &--point {
    font-size: 1em;
    margin-top: 1.2em;
    padding-bottom: 0.3em;
    color: #868686;
    cursor: pointer;

    &.active {
      border-bottom: 2px solid #53b9ec;
    }

    &:hover:not(.active) {
      font-weight: 500;
      border-bottom: 2px solid #53b9ec31;
    }
  }
}
</style>
