<template>
  <div class="performance-page">
    <transition name="fade">
      <Popup v-if="isPopupActive">
        <PopupPerformance 
          @closePopup="onClickStream"
        />
      </Popup>
    </transition>
    <ProjectWrapper />
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
        <tr>
          <td>1</td>
          <td
            class="name"
            @click="onClickStream"
          >Helmi Satria</td>
          <td 
          >Backend</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td
            class="name"
            @click="onClickStream"
          >Helmi Satria</td>
          <td
          >Frontend</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>3</td>
          <td
            class="name"
            @click="onClickStream"
          >Helmi Satria</td>
          <td 
          >Devops</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>4</td>
          <td
            class="name"
            @click="onClickStream"
          >Helmi Satria</td>
          <td 
          >Backend</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Popup from "../../components/Popup";
import PopupPerformance from "./components/PopupPerformance";
import ProjectWrapper from "./components/ProjectWrapper";

export default {
  name: "PerformancePage",
  components: {
    Popup,
    PopupPerformance,
    ProjectWrapper
  },
  data() {
    return {
      isPopupActive: false
    };
  },
  async created() {
    await this.fetchProjects();
    await this.fetchProjectDetail({ key: this.projects[0].key });
  },
  computed: {
    ...mapGetters("projects", ["projects"])
  },
  methods: {
    ...mapActions("projects", ["fetchProjects"]),
    ...mapActions("performance", ["fetchProjectDetail"]),
    onClickStream() {
      this.isPopupActive = !this.isPopupActive;
    }
  }
};
</script>

<style lang="scss">
@import "./styles/performance";
</style>
