<template>
  <div class="sidebar">
    <img 
      src="http://telkomcodex.io/static/codex-logo.png" 
      alt="logo" 
      class="sidebar--logo"
    />
    <router-link 
      to="/" 
      class="sidebar--point" 
      :class="activeRoute.name === 'projects' && 'active'"
      tag="div"
    >
      Project
    </router-link>
    <router-link 
      to="/teamPerformance" 
      class="sidebar--point" 
      :class="activeRoute.name === 'teamPerformance' && 'active'"
      tag="div"
    >
      Team Performance
    </router-link>
    <router-link 
      to="/calendar" 
      class="sidebar--point" 
      :class="activeRoute.name === 'calendar' && 'active'"
      tag="div"
    >
      Calendar
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  computed: {
    ...mapGetters(["route"]),
    activeRoute() {
      return this.route;
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  -moz-box-shadow: 2px 1px 3px 1px rgb(236, 236, 236);
  -webkit-box-shadow: 2px 1px 3px 1px rgb(236, 236, 236);
  box-shadow: 2px 1px 3px 1px rgb(236, 236, 236);
  position: fixed;
  padding-left: 1em;
  width: 11em;
  flex: 1;
  height: 100vh;
  background-color: white;

  &--logo {
    width: 10em;
    padding: 1em 1em 1em 0;
    padding-right: 1.5em;
  }

  &--point {
    font-size: 1em;
    margin-top: 1.2em;
    padding-bottom: 0.5em;
    color: #868686;
    cursor: pointer;
    border-bottom: 2px solid white;

    &.active {
      border-bottom: 2px solid #53b9ec;
      font-weight: 500;
    }

    &:hover:not(.active) {
      font-weight: 500;
      border-bottom: 2px solid #53b9ec31;
    }
  }
}
</style>
