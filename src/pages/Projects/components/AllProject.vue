<template>
  <table id="projects--table">
    <tr>
      <th>No</th>
      <th>Nama Project</th>
      <th>Unit</th>
      <th>Stakeholder</th>
      <th>Sprint</th>
      <th>Status</th>
    </tr>
    <tr v-for="(project, i) in projects" :key="project.key">
      <td>{{ i + 1}}</td>
      <td class="title">{{project.name}}</td>
      <td>{{project.unit}}</td>
      <td>{{project.stakeholder}}</td>
      <td>{{project.sprint}}</td>
      <td @click="saveComment">Complete</td>
    </tr>
  </table>
</template>

<script>
import { mapGetters } from "vuex";
import { EventBus } from "../../../event-bus";

export default {
  name: "AllProject",
  computed: {
    ...mapGetters("projects", ["projects", "bestSquad", "bestProduct"])
  },
  methods: {
    saveComment() {
      EventBus.$emit("togglePopup");
    }
  }
};
</script>

<style>
</style>
