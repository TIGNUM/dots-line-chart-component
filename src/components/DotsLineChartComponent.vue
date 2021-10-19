<template>
  <div data-e2e="dots-line-chart">
    Hello from chart
    <button
      type="button"
      @click="count++"
    >
      Count: {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{count: number}>();
</script>
