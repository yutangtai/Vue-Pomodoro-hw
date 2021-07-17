<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartData: {
      type: Object,
      labels: [
        '07/11',
        '07/12',
        '07/13',
        '07/14',
        '07/15',
        '07/16',
        '07/17'
      ],
      datasets: [
        {
          label: 'Demo',
          fill: false,
          backgroundColor: '#EA5548',
          barPercentage: 0.5,
          barThickness: 20,
          maxBarThickness: 20,
          minBarLength: 10,
          data: [2, 5, 2, 1, 2, 0, 6]
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          display: false,
          ticks: {
            max: 10
          },
          gridLines: {
            display: false
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#EAEAEA'
          },
          gridLines: {
            display: false
          }
        }]
      },
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  methods: {
    chartRender () {
      this.renderChart(this.chartData, this.options)
    }
  },
  mounted () {
    this.chartRender()
  }
}
</script>
