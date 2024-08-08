<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from 'vue';

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

const option = ref({
  title: {
    text: '各班级分数段分布占比',
    left: 'center',
    top: 0
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    top: 40
  },
  grid: {
    top: 80,
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    max: 100
  },
  yAxis: {
    type: 'category',
    data: ['1班', '2班', '3班', '4班']
  },
  series: [
    {
      name: '90分及以上',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        formatter: (params) => `${params.value}%`
      },
      emphasis: {
        focus: 'series'
      },
      data: [9.84, 13.79, 15.87, 11.32]
    },
    {
      name: '80-89分',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        formatter: (params) => `${params.value}%`
      },
      emphasis: {
        focus: 'series'
      },
      data: [24.59, 20.69, 25.40, 24.53]
    },
    {
      name: '70-79分',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        formatter: (params) => `${params.value}%`
      },
      emphasis: {
        focus: 'series'
      },
      data: [32.79, 39.66, 34.92, 35.85]
    },
    {
      name: '60-69分',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        formatter: (params) => `${params.value}%`
      },
      emphasis: {
        focus: 'series'
      },
      data: [24.59, 22.64, 17.46, 22.64]
    },
    {
      name: '60分及以下',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        formatter: (params) => `${params.value}%`
      },
      emphasis: {
        focus: 'series'
      },
      data: [8.20, 3.45, 6.35, 5.66]
    }
  ]
});
</script>