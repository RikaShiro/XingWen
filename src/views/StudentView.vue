<template>
  <a-space>
    <a-select ref="select" :options="options" v-model:value="value" style="width: 300px" @focus="focus"
      @change="handleChange">
    </a-select>
  </a-space>

  <TestTable :columns="knowledgePointColumns" :data="knowledgePointData" dataIndex="knowledgePoint">
  </TestTable>

  <TestTable :columns="abilityColumns" :data="abilityData" dataIndex="ability">
  </TestTable>
</template>

<script setup>
import TestTable from '@/components/TestTable.vue'
import { ref } from 'vue';

const knowledgePointColumns = [
  {
    title: '知识点',
    dataIndex: 'knowledgePoint',
    key: 'knowledgePoint',
  },
  {
    title: '本次丢分情况',
    dataIndex: 'lostPoint',
    key: 'lostPoint',
  },
  {
    title: '历史正确率',
    dataIndex: 'historicalAccuracy',
    key: 'historicalAccuracy',
    customRender: (text) => `${text.value}%`
  }
];

const knowledgePointData = ref([
  {
    knowledgePoint: '重要会议体系',
    lostPoint: 13,
    historicalAccuracy: 14.85,
  },
  {
    knowledgePoint: '意义',
    lostPoint: 6,
    historicalAccuracy: 11.72,
  },
  {
    knowledgePoint: '影响',
    lostPoint: 4,
    historicalAccuracy: 75.89,
  },
  {
    knowledgePoint: '作用',
    lostPoint: 3,
    historicalAccuracy: 24.76,
  },
  {
    knowledgePoint: '世界多极化',
    lostPoint: 2,
    historicalAccuracy: 80.29,
  }
]);

const abilityColumns = [
  {
    title: '各项能力失分情况',
    dataIndex: 'ability',
    key: 'ability',
  },
  {
    title: '分数',
    dataIndex: 'lostPoint',
    key: 'lostPoint',
  }
]
const abilityData = ref([
  {
    ability: '阐释事务能力',
    lostPoint: 23.5,
  },
  {
    ability: '探讨问题能力',
    lostPoint: 14,
  },
  {
    ability: '运用知识能力',
    lostPoint: 6.5,
  },
  {
    ability: '解读信息能力',
    lostPoint: 6,
  },
])

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

const value = ref(4);
const options = ref([]);
for (let i = 1; i < 12; i++) {
  options.value.push({
    value: i,
    label: `第${i}次月考 - 历史`
  })
}
const focus = () => {
  console.log('focus');
};
const handleChange = () => {
  randomArr(knowledgePointData)
  randomArr(abilityData)
};
</script>