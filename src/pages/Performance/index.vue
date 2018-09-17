<template>
  <div class="performance-page">
    <transition name="fade">
      <Popup v-if="isPopupActive">
        <PopupPerformance 
          @closePopup="onClickStream"
        />
      </Popup>
    </transition>
    <div class="project">
      <div class="item">
        <div class="title">
          <h1>Project</h1>
          <select name="" id="">
            <option value="My Indiehome" selected>My Indiehome</option>
          </select>
        </div>
        <div class="details">
          <div class="row">
            <span class="row--title">Description</span> 
            <span class="row--value">: Lorem ipsum dolor sit</span>
          </div>

          <div class="row">
            <span class="row--title">Stackholder</span> 
            <span class="row--value">: DEGM</span> 
          </div>

          <div class="row">
            <span class="row--title">Sprint Now</span>
            <span class="row--value">: 13</span>
          </div>
        </div>

        <div class="start-end-date">
          <div class="row">
            <span class="row--title">Start Date</span> 
            <span class="row--value">: 12/06/2018</span> 
          </div>
          <div class="row">
            <span class="row--title">End Date</span>
            <span class="row--value">: 15/06/2018 (5 hari lagi)</span> 
          </div>
        </div>
        
      </div>
      <div class="item member">
        <h2>Member</h2>

        <table id="member">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Stream</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Budi Artianto</td>
            <td>Backend</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Budi Artianto</td>
            <td>Backend</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Budi Artianto</td>
            <td>Backend</td>
          </tr>
        </table>
      </div>

    </div>
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
import Popup from "../../components/Popup";
import PopupPerformance from "./components/PopupPerformance";

export default {
  name: "PerformancePage",
  components: {
    Popup,
    PopupPerformance
  },
  data() {
    return {
      isPopupActive: false
    };
  },
  methods: {
    onClickStream() {
      this.isPopupActive = !this.isPopupActive;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/performance";
</style>
