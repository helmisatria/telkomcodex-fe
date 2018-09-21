<template>
  <div class="project">
    <div class="item">

      <div class="title">
        <h1>Project</h1>
        <select name="" id="" v-model="selectedProject">
          <option 
            :value="project.key"
            v-for="project in projects" 
            :key="project.key"
          >{{project.name}}</option>
        </select>
      </div>

      <div class="details">
        <div class="row">
          <span class="row--title">Description</span> 
          <span class="row--value">: {{project.description}}</span>
        </div>

        <div class="row">
          <span class="row--title">Stakeholder</span> 
          <span class="row--value">: {{project.stakeholder}}</span> 
        </div>

        <div class="row">
          <span class="row--title">Sprint Now</span>
          <span class="row--value">: {{project.sprint}}</span>
        </div>
      </div>

      <div class="start-end-date">
        <div class="row">
          <span class="row--title">Start Date</span> 
          <span class="row--value">: {{startDate}}</span> 
        </div>
        <div class="row">
          <span class="row--title">End Date</span>
          <span class="row--value">: {{endDate}} ({{selisihDate}} hari lagi)</span> 
        </div>
      </div>  
    </div>

    <Member />

  </div>
</template>

<script>
import Member from "./Member";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";

export default {
  name: "ProjectWrapper",
  components: {
    Member
  },
  data() {
    return {
      localSelectedProject: "BUL"
    };
  },
  computed: {
    ...mapGetters("projects", ["projects"]),
    ...mapGetters("performance", ["project"]),
    selectedProject: {
      get() {
        return this.localSelectedProject;
      },
      set(key) {
        this.localSelectedProject = key;
        this.fetchProjectDetail({ key });
      }
    },
    startDate() {
      return moment(this.project.start).format("DD/MM/YYYY");
    },
    endDate() {
      return moment(this.project.end).format("DD/MM/YYYY");
    },
    selisihDate() {
      return Math.ceil(
        moment
          .duration(moment(this.project.end).diff(moment(this.project.start)))
          .asDays()
      );
    }
  },
  methods: {
    ...mapActions("performance", ["fetchProjectDetail"])
  }
};
</script>

<style>
</style>
