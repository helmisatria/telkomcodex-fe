<template>
  <div id="popup-performance">
    <div class="row">
      <img :src="memberInformation.avatar" alt="">
      <div class="detail-person">
        <div class="info-group">
          <div class="info">
            <span class="info--title">Nama</span>
            <span class="info--value">: {{memberInformation.name}}</span>
          </div>
          <div class="info">
            <span class="info--title">Stream</span>
            <span class="info--value">: {{memberInformation.stream}}</span>
          </div>
          <div class="info">
            <span class="info--title">Level</span>
            <span class="info--value">: Medium</span>
          </div>
        </div>
        <div class="rating">
          <StarRating 
            readOnly 
            :starSize="25"
            :showRating="false"
            :padding="8"
            :rating="memberDetail.level"
          />
        </div>
      </div>
    </div>
    <div class="work-intensity">
      <h2>Work Intensity</h2>

      <canvas id="chart" ref="chart"></canvas>
    </div>
    <div class="row align-center space-between footer">
      <span>Total Point: 23.400</span>

      <button class="btn--back" @click="closePopup">BACK</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../../event-bus";
import StarRating from "vue-star-rating";
import Chart from "chart.js";
import { mapGetters } from "vuex";

export default {
  components: {
    StarRating
  },
  props: ["memberInformation"],
  name: "PopupPerformance",
  methods: {
    closePopup() {
      EventBus.$emit("togglePopupPerformance");
    }
  },
  computed: {
    ...mapGetters("performance", ["memberDetail"])
  },
  mounted() {
    var ctx = this.$refs.chart;

    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Periode 1", "Periode 2", "Periode 3", "Periode 4"],
        datasets: [
          {
            label: "Point Burn",
            data: this.memberDetail.intensity.map(i => i.burn),
            backgroundColor: "rgba(255, 99, 132, 0)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1
          },
          {
            label: "Point Remain",
            data: this.memberDetail.intensity.map(i => i.remaining),
            backgroundColor: "rgba(54, 162, 235, 0)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
          },
          {
            label: "Point Queue",
            data: this.memberDetail.intensity.map(i => i.queue),
            backgroundColor: "rgba(75, 192, 192, 0)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        legend: {
          labels: {
            boxWidth: 15,
            padding: 20
          },
          position: "left"
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/popupPerformance.scss";
</style>
