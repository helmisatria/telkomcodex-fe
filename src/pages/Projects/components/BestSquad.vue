<template>
  <div class="item best-squad">
    <h1>Best Squad Performance</h1>
    <ol>
      <li class="row" v-for="(product, i) in bestSquad" :key="product.name">
        <span>{{ `${i+1}. ${product.name}` }}</span>
        <div class="right">
          <i class="material-icons up" v-if="product.status === 'up'">arrow_drop_up</i>
          <i class="material-icons down" v-else>arrow_drop_down</i>
          <span class="score">{{product.performance}}</span>
        </div>
      </li>
    </ol>

    <div class="wrapper-btn--more">
      <button class="btn--more">MORE</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BestSquad",
  computed: {
    ...mapGetters("projects", ["bestSquad"])
  }
};
</script>

<style lang="scss" scoped>
</style>
