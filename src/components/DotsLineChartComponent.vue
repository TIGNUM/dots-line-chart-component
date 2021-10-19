<template>
  <div data-e2e="dots-line-chart">
    Hello from chart
    <button
      type="button"
      @click="$emit('increment-count')"
    >
      Count: {{ count }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    count: {
      type: Number,
      default: 1
    }
  }
};
</script>
