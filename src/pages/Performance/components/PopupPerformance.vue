<template>
  <div id="popup-performance">
    <div class="row">
      <img src="https://cdn.dribbble.com/users/631735/screenshots/3946090/image.png" alt="">
      <div class="detail-person">
        <div class="info-group">
          <div class="info">
            <span class="info--title">Nama</span>
            <span class="info--value">: Helmi Satria</span>
          </div>
          <div class="info">
            <span class="info--title">Stream</span>
            <span class="info--value">: Developer</span>
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
            :rating="3"
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

      <button class="btn--back" 
        @click="$emit('closePopup')"
      >BACK</button>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import Chart from "chart.js";

export default {
  components: {
    StarRating
  },
  name: "PopupPerformance",
  mounted() {
    var ctx = this.$refs.chart;

    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Periode 1", "Periode 2", "Periode 3", "Periode 4"],
        datasets: [
          {
            label: "Point Burn",
            data: [12, 19, 3, 5],
            backgroundColor: "rgba(255, 99, 132, 0)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1
          },
          {
            label: "Point Remain",
            data: [15, 26, 3, 5],
            backgroundColor: "rgba(54, 162, 235, 0)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
          },
          {
            label: "Point Queue",
            data: [32, 8, 6, 10],
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
