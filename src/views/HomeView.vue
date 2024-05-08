<template>
  <div class="container">
    <h4 class="mb-3">Thống kê</h4>
    <section>
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card">
            <div class="card-body">
              <p class="text-uppercase small mb-2"><strong>USERS</strong></p>
              <h5 class="mb-0">
                <strong>11234</strong>
                <small class="text-success ms-2">
                  <i class="fas fa-arrow-up fa-sm pe-1"></i>
                  13,48%
                </small>
              </h5>
              <hr>
              <p class="text-uppercase text-muted small mb-2"> Previous period </p>
              <h5 class="text-muted mb-0">12345</h5>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card">
            <div class="card-body">
              <p class="text-uppercase small mb-2"><strong>POSTS</strong></p>
              <h5 class="mb-0">
                <strong>11234</strong>
                <small class="text-success ms-2">
                  <i class="fas fa-arrow-up fa-sm pe-1"></i>
                  13,48%
                </small>
              </h5>
              <hr>
              <p class="text-uppercase text-muted small mb-2"> Previous period </p>
              <h5 class="text-muted mb-0">12345</h5>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card">
            <div class="card-body">
              <p class="text-uppercase small mb-2"><strong>REVIEWS</strong></p>
              <h5 class="mb-0">
                <strong>11234</strong>
                <small class="text-success ms-2">
                  <i class="fas fa-arrow-up fa-sm pe-1"></i>
                  13,48%
                </small>
              </h5>
              <hr>
              <p class="text-uppercase text-muted small mb-2"> Previous period </p>
              <h5 class="text-muted mb-0">12345</h5>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card">
            <div class="card-body">
              <p class="text-uppercase small mb-2"><strong>DOANH THU</strong></p>
              <h5 class="mb-0">
                <strong>11234</strong>
                <small class="text-success ms-2">
                  <i class="fas fa-arrow-up fa-sm pe-1"></i>
                  13,48%
                </small>
              </h5>
              <hr>
              <p class="text-uppercase text-muted small mb-2"> Previous period </p>
              <h5 class="text-muted mb-0">12345</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <canvas id="myChart"></canvas>
    </section>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      chartData: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'My First Dataset',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      }
    };
  },
  mounted() {
  //   try {
  //     const ctx = document.getElementById('myChart');
  //     const myChart = new Chart(ctx, {
  //       type: 'bar',
  //       data: this.chartData,
  //       options: {
  //         scales: {
  //           y: {
  //             beginAtZero: true
  //           }
  //         }
  //       }
  //     });
  //     myChart;
  // } catch(e) {
  //   console.log(e);
  // }
  this.renderChart()
},
  methods: {
    renderChart() {
      const ctx = document.getElementById('myChart');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
      myChart;
    }
  }
};
</script>
<style scoped>
.card{
    border: 0;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .07), 0 4px 6px -2px rgba(0, 0, 0, .05);
}
</style>
