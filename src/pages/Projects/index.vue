<template>
  <div class="projects--container">
    <transition name="fade">
      <Popup v-if="isActiveComment">
        <PopupComment />
      </Popup>
    </transition>
    
    <div class="projects--queue">
      <h1>Queue All Projects</h1>
      <AllProject />
    </div>
    
    <div class="performance">
      <BestProduct />
      <BestSquad />
      <Talent />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { EventBus } from "../../event-bus";
import Popup from "../../components/Popup";
import PopupComment from "./components/PopupComment";
import AllProject from "./components/AllProject";
import BestProduct from "./components/BestProduct";
import BestSquad from "./components/BestSquad";
import Talent from "./components/Talent";

export default {
  name: "ProjectsPage",
  components: {
    Popup,
    PopupComment,
    AllProject,
    BestProduct,
    BestSquad,
    Talent
  },
  data() {
    return {
      isActiveComment: false
    };
  },
  async created() {
    EventBus.$on("togglePopup", () => {
      this.isActiveComment = !this.isActiveComment;
    });
    await this.fetchPerformance();
    await this.fetchProjects();
    await this.fetchStatus();
  },
  methods: {
    ...mapActions("projects", [
      "fetchProjects",
      "fetchStatus",
      "fetchPerformance"
    ])
  }
};
</script>

<style lang="scss">
@import "./styles/projects";
</style>

