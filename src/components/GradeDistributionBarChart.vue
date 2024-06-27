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
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

// provide(THEME_KEY, 'dark');

const option = ref({
  title: {
    text: '年级分数段分布占比'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['90分及以上', '80-89分', '70-79分', '60-69分', '60分及以下'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: "{value}%"
      }
    }
  ],
  series: [
    {
      name: '人数占比',
      type: 'bar',
      barWidth: '60%',
      data: [12.77, 23.83, 35.74, 21.70, 5.96],
      label: {
        show: true,
        formatter: (params) => `${params.value}%`
      },
    }
  ]
});
</script>

<style scoped>
.chart {
  height: 50vh;
}
</style>
