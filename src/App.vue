<template>
  <div class="dots-line-chart">
    <DotsLineChartComponent
      :count="counter"
      @incrementCount="counter++"
    />
  </div>
</template>

<script lang="ts">
import '../dist/dots-line-chart-component.umd.js';
export default {
  data(){
    return {
      counter: 1
    };
  }
};
</script>

<style lang="scss">
.dots-line-chart {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;
}
</style>
