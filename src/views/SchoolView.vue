<template>
  <a-select ref="select" :options="options" v-model:value="value" style="width: 300px" @change="$emit('refresh')"
    class="row">
  </a-select>

  <GradeDistributionBarChart class="row"></GradeDistributionBarChart>
  <CompareClassDistributionBarChart class="row"></CompareClassDistributionBarChart>

  <div class="lost-point-tables-container">
    <LostPointTable class="lost-point-table"></LostPointTable>
    <LostPointTable class="lost-point-table"></LostPointTable>
    <LostPointTable class="lost-point-table"></LostPointTable>
    <LostPointTable class="lost-point-table"></LostPointTable>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';

import CompareClassDistributionBarChart from '@/components/CompareClassDistributionBarChart.vue'
import GradeDistributionBarChart from '@/components/GradeDistributionBarChart.vue'
import LostPointTable from '@/components/LostPointTable.vue';

const value = ref(8)
const options = ref([])
for (let i = 1; i < 12; i++) {
  options.value.push({
    value: i,
    label: `第${i}次月考 - 历史`
  })
}

// provide('refresh', (arr) => {
//   const n = arr.value.length
//   for (let i = 0; i < n; i++) {
//     for (const k in arr.value[i]) {
//       if (typeof arr.value[i][k] === 'number') {
//         arr.value[i][k] = Number((Math.random(Date.now()) * 100).toFixed(2))
//       }
//     }
//   }
// })
</script>

<style scoped>
.lost-point-tables-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4% 30px;
}

.row {
  margin-bottom: 24px;
}
</style>