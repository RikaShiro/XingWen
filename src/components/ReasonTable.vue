<template>
  <div>
    <a-table :columns="reasonColumns" :data-source="reasonData" :pagination="false" :scroll="{ y: 480 }"
      class="reason-table">
      <template #bodyCell="{ text, record, column }">
        <template v-if="column.dataIndex === 'correctRate'">
          <span :class="getColor(text)">{{ text.toFixed(2) }}%</span>
        </template>
        <template
          v-else-if="['understanding', 'memory', 'knowledgePoint', 'system', 'technique'].includes(column.dataIndex)">
          <span :class="isLargest(record, text)">{{ parseInt(text * 0.3) }}</span>
        </template>
        <template v-else>
          {{ text }}
        </template>
      </template>
    </a-table>

    <h2 class="reason-table-caption">{{ props.classIdx }}班</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['classIdx'])

const reasonColumns = [
  {
    title: '序号',
    dataIndex: 'questionIndex',
    key: 'questionIndex',
  },
  {
    title: '得分率',
    dataIndex: 'correctRate',
    key: 'correctRate',
  },
  {
    title: '错因统计(错误人数)',
    dataIndex: 'count',
    children: [{
      title: '题目理解',
      dataIndex: 'understanding',
      key: 'understanding',
    },
    {
      title: '记忆缺失',
      dataIndex: 'memory',
      key: 'memory',
    },
    {
      title: '知识点理解错误',
      dataIndex: 'knowledgePoint',
      key: 'knowledgePoint',
    },
    {
      title: '缺乏知识体系',
      dataIndex: 'system',
      key: 'system',
    },
    {
      title: '解题技巧',
      dataIndex: 'technique',
      key: 'technique',
    }]
  },
]
const reasonData = ref([])
for (let i = 0; i < 30; i++) {
  reasonData.value.push({
    correctRate: 0,
    understanding: 0,
    memory: 0,
    knowledgePoint: 0,
    system: 0,
    technique: 0
  })
}
randomArr(reasonData)
for (let i = 0; i < 30; i++) {
  reasonData.value[i].questionIndex = (i + 1).toString()
}

function getColor(correctRate) {
  if (correctRate <= 30) {
    return 'below-30 white-text';
  } else if (correctRate <= 50) {
    return 'below-50 white-text'
  } else {
    return 'normal'
  }
}
function isLargest(record, text) {
  const arr = Object.values(record)
  arr.shift()
  arr.pop()

  const max = Math.max(...arr)
  if (max === text) {
    return 'largest'
  } else {
    return 'non-largest'
  }
}
function randomArr(arr) {
  const n = arr.value.length
  for (let i = 0; i < n; i++) {
    for (const k in arr.value[i]) {
      if (typeof arr.value[i][k] === 'number') {
        arr.value[i][k] = Number((Math.random(Date.now()) * 100).toFixed(2))
      }
    }
  }
}
</script>

<style scoped>
.largest {
  color: #8B0000;
  font-weight: bold;
}

.below-30 {
  background-color: #8B0000;
  font-weight: bold;
}

.below-50 {
  background-color: #FF7F7F;
  font-weight: bold;
}

h2.reason-table-caption {
  text-align: center;
  margin-top: 16px;
}
</style>