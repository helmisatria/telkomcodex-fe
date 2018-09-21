<template>
  <div class="performance-page">
    <transition name="fade">
      <Popup v-if="isPopupActive">
        <PopupPerformance :memberInformation="memberInformation"/>
      </Popup>
    </transition>
    <ProjectWrapper />
    <BestTalent />
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { EventBus } from "../../event-bus";
import Popup from "../../components/Popup";
import PopupPerformance from "./components/PopupPerformance";
import ProjectWrapper from "./components/ProjectWrapper";
import BestTalent from "./components/BestTalent";

export default {
  name: "PerformancePage",
  components: {
    Popup,
    PopupPerformance,
    ProjectWrapper,
    BestTalent
  },
  data() {
    return {
      isPopupActive: false,
      memberInformation: undefined
    };
  },
  async created() {
    EventBus.$on("togglePopupPerformance", () => {
      this.isPopupActive = !this.isPopupActive;
    });
    EventBus.$on("openPopupPerformance", member => {
      this.isPopupActive = true;
      this.memberInformation = member;
    });
    await this.fetchProjects();
    await this.fetchProjectDetail({ key: this.projects[0].key });
  },
  computed: {
    ...mapGetters("projects", ["projects"])
  },
  methods: {
    ...mapActions("projects", ["fetchProjects"]),
    ...mapActions("performance", ["fetchProjectDetail"])
  }
};
</script>

<style lang="scss">
@import "./styles/performance";
</style>
