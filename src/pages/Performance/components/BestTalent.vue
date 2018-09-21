<template>
  <div class="best-talent">
    <h1>Best Talent Performance</h1>

    <table id="performance">
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Stream</th>
        <th>Point Burn</th>
        <th>Point Remaining</th>
        <th>Point Queue</th>
      </tr>
      <tr v-for="(member, i) in members" :key="member.id">
        <td>{{i+1}}</td>
        <td
          class="name"
          @click="openPopup"
        >{{member.name}}</td>
        <td 
        >{{member.stream}}</td>
        <td>{{member.burn}}</td>
        <td>{{member.remaining}}</td>
        <td>{{member.queue}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { EventBus } from "../../../event-bus.js";
import { mapGetters } from "vuex";

export default {
  name: "BestTalent",
  computed: {
    ...mapGetters("performance", ["members"])
  },
  methods: {
    openPopup() {
      EventBus.$emit("togglePopupPerformance");
    }
  }
};
</script>

<style>
</style>
