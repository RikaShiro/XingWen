<template>
  <a-select ref="select" :options="options" v-model:value="value" style="width: 300px" @change="$emit('refresh')"
    class="exam-select">
  </a-select>

  <a-select ref="select" :options="modeOptions" v-model:value="modeValue" style="width: 300px" @focus="focus"
    @change="handleChange" class="mode-select">
  </a-select>

  <div class="grid-column-2">
    <GradeDistributionBarChart class="chart"></GradeDistributionBarChart>
    <CompareClassDistributionBarChart class="chart"></CompareClassDistributionBarChart>
  </div>

  <div class="grid-column-4">
    <LostPointTable></LostPointTable>
    <LostPointTable></LostPointTable>
    <LostPointTable></LostPointTable>
    <LostPointTable></LostPointTable>
  </div>

  <div class="grid-column-2">
    <ReasonTable class="reason-table"></ReasonTable>
    <ReasonTable class="reason-table"></ReasonTable>
    <ReasonTable class="reason-table"></ReasonTable>
    <ReasonTable class="reason-table"></ReasonTable>
  </div>

  <div class="grid-column-2">
    <CompareClassReasonLineChart class="compare-class-reason"></CompareClassReasonLineChart>
    <CompareClassReasonLineChart class="compare-class-reason"></CompareClassReasonLineChart>
  </div>

</template>

<script setup>
import { ref } from 'vue';

import CompareClassDistributionBarChart from '@/components/CompareClassDistributionBarChart.vue'
import GradeDistributionBarChart from '@/components/GradeDistributionBarChart.vue'
import LostPointTable from '@/components/LostPointTable.vue';
import CompareClassReasonLineChart from '@/components/CompareClassReasonLineChart.vue';
import ReasonTable from '@/components/ReasonTable.vue';

const value = ref(8)
const options = ref([])
for (let i = 1; i < 12; i++) {
  options.value.push({
    value: i,
    label: `第${i}次月考 - 历史`
  })
}

const modeValue = ref(0)
const modeOptions = ref([
  {
    value: 0,
    label: '按班级序号查看'
  },
  {
    value: 1,
    label: '按平均分排名查看'
  },
  {
    value: 2,
    label: '按同类班级查看'
  },
  {
    value: 3,
    label: '按师徒班级查看'
  },
])

</script>

<style scoped>
.mode-select {
  margin-left: 20px;
  margin-bottom: 20px;
}

div.grid-column-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 36px auto;
  gap: 24px;
}

.chart {
  height: 50vh;
}

div.grid-column-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 36px auto;
  gap: 24px;
}
</style>