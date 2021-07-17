<template>
<div class="nav-content">
  <div class="content-title">ANALYTICS REPORT</div>
    <hr>
  <div class="anaContent">
    <div class="anaContent-box">
      <h2>TOMATO OF THIS WEEK</h2>
      <div class="week">
        <div class="week-box">
          <div class="week-data right-line">
            <span class="week-num">6</span>
            <span class="week-subtitle">TODAY</span>
          </div>
        </div>
        <div class="week-box">
          <div class="week-data">
            <span class="week-num">18</span>
            <span class="week-subtitle">07/11~07/17</span>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="anaContent-box">
      <h2>CHART&emsp;<span>07/11~07/17</span></h2>
      <div class="chart">
        <Chart :styles='myStyles'></Chart>
      </div>
      <div class="anabtns">
        <button class="prev">PREV</button>
        <button disabled class="next">NEXT</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Chart from '../components/Chart.vue'
export default {
  name: 'analytic',
  components: {
    Chart
  },
  data () {
    return {
      height: 135
    }
  },
  computed: {
    myStyles () {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
}
</script>
