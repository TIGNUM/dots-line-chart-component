<template>
  <div class="dots-line-chart">
    <DotsLineChartComponent :count="1" />
  </div>
</template>

<script setup lang="ts">
import '../dist/dots-line-chart-component.umd.js';
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
