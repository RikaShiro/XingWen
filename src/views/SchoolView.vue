<template>

</template>

<script setup>
import { ref } from 'vue'

const gradeData = ref({
  labels: ['90-100', '80-89', '70-79', '60-69', '60-0'],
  datasets: [{
    data: [30, 56, 84, 51, 14],
    backgroundColor: 'rgba(21, 96, 130, 1)'
  }]
})

const gradeOptions = ref({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: '年级各分数段人数',
      font: {
        size: 24,
        weight: 'bold'
      },
      padding: {
        top: 20,
        bottom: 30
      },
      color: '#000'
    }
  }
})

const classData = ref({
  labels: ['Below 60', '60-69', '70-79', '80-89'],
  datasets: [
    {
      label: '',
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      data: [5, 10, 8, 15]
    }
  ]
})

const classOptions = ref({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: '各班级分数段公布',
      color: '#FF6384'
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
})
</script>