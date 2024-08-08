<template>
  <a-table :columns="lostPointColumns" :data-source="lostPointData" :pagination="false" height="400px"></a-table>
</template>

<script setup>
import { ref } from 'vue';

const lostPointColumns = [
  {
    title: '易错知识点统计',
    dataIndex: 'lostPoint',
    key: 'lostPoint',
  },
  {
    title: '失分率',
    dataIndex: 'lostRate',
    key: 'lostRate',
    customRender: (text) => `${text.value}%`
  },
]

const lostPointData = ref([
  {
    lostPoint: '三大改造',
    lostRate: 14.85,
  },
  {
    lostPoint: '新民主主义',
    lostRate: 11.72,
  },
  {
    lostPoint: '民族资本主义',
    lostRate: 75.89,
  },
  {
    lostPoint: '亚太经合',
    lostRate: 24.76,
  },
  {
    lostPoint: '战后世界经济',
    lostRate: 80.29,
  }
])
</script>
