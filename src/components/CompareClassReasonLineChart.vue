<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from 'vue';

const props = defineProps(['classIndices'])

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent
]);

const option = ref({
  title: {
    text: '班级错因分析对比',
    left: 'center',
    top: 0
  },
  tooltip: {
    trigger: 'axis'
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
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: ['题目理解', '记忆缺失', '知识点', '缺乏知识体系', '答题技巧']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: "{value}%"
    }
  },
  series: [
    {
      name: `${props.classIndices[0]}班`,
      type: 'line',
      data: [15.23, 20.12, 10.45, 18.34, 14.56],
      label: {
        show: true,
        formatter: (params) => `${params.value}%`
      },
      emphasis: {
        focus: 'series'
      },
    },
    {
      name: `${props.classIndices[1]}班`,
      type: 'line',
      data: [21.30, 0.20, 28.45, 10.00, 40.05],
      label: {
        show: true,
        formatter: (params) => `${params.value}%`
      },
      emphasis: {
        focus: 'series'
      },
    },
  ]
});
</script>