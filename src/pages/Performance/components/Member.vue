<template>
  <div class="item member">
    <h2>Member</h2>

    <table id="member">
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Stream</th>
      </tr>
      <tr v-for="(member, i) in members" :key="member.id">
        <td>{{i+1}}</td>
        <td>{{member.name}}</td>
        <td>{{member.stream}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Member",
  computed: {
    ...mapGetters("performance", ["members"])
  }
};
</script>

<style>
</style>
