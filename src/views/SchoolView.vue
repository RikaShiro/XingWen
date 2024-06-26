<template>
  <GradeDistribution class="row"></GradeDistribution>
  <CompareClassDistribution class="row"></CompareClassDistribution>
</template>

<script setup>
import CompareClassDistribution from '@/components/CompareClassDistribution.vue'
import GradeDistribution from '@/components/GradeDistribution.vue'
</script>

<style scoped>
.row {
  margin-bottom: 24px;
}
</style>