<template>
  <a-space>
    <a-select ref="select" :options="options" v-model:value="value" style="width: 300px" @focus="focus"
      @change="handleChange">
    </a-select>
  </a-space>

  <TestTable :columns="reasonColumns" :data="reasonData">
  </TestTable>
  <TestTable :columns="lostPointColumns" :data="lostPointData" dataIndex="lostPoint">
  </TestTable>

  <StudentTable :columns="studentColumns" :data="studentData" dataIndex="studentID">
  </StudentTable>
</template>

<script setup>
import TestTable from '@/components/TestTable.vue'
import StudentTable from '@/components/StudentTable.vue'
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
];

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
]);

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

const value = ref(8);
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
  randomArr(lostPointData)
  randomArr(reasonData)
};

const reasonColumns = [
  {
    title: '得分率',
    dataIndex: 'correctRate',
    key: 'correctRate',
    customRender: (text) => `${text.value}%`
  },
  {
    title: '题目理解',
    dataIndex: 'understanding',
    key: 'understanding',
    customRender: (text) => parseInt(text.value * 0.3)
  },
  {
    title: '记忆缺失',
    dataIndex: 'memory',
    key: 'memory',
    customRender: (text) => parseInt(text.value * 0.3)
  },
  {
    title: '知识点理解错误',
    dataIndex: 'knowledgePoint',
    key: 'knowledgePoint',
    customRender: (text) => parseInt(text.value * 0.3)
  },
  {
    title: '缺乏知识体系',
    dataIndex: 'system',
    key: 'system',
    customRender: (text) => parseInt(text.value * 0.3)
  },
  {
    title: '解题技巧',
    dataIndex: 'technique',
    key: 'technique',
    customRender: (text) => parseInt(text.value * 0.3)
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

const studentColumns = [
  {
    title: '学生姓名',
    dataIndex: 'studentName',
    key: 'studentName',
  },
  {
    title: '学号',
    dataIndex: 'studentID',
    key: 'studentID',
  }
]

const surnames = [
  '王 (Wang)',
  '李 (Li)',
  '张 (Zhang)',
  '刘 (Liu)',
  '陈 (Chen)',
  '杨 (Yang)',
  '黄 (Huang)',
  '赵 (Zhao)',
  '吴 (Wu)',
  '周 (Zhou)',
  '徐 (Xu)',
  '孙 (Sun)',
  '马 (Ma)',
  '朱 (Zhu)',
  '胡 (Hu)',
  '郭 (Guo)',
  '何 (He)',
  '林 (Lin)',
  '高 (Gao)',
  '郑 (Zheng)'
];

const givenNames = [
  '沐宸 (Mùchén)',
  '若汐 (Ruòxī)',
  '浩宇 (Hàoyǔ)',
  '一诺 (Yīnuò)',
  '沐辰 (Mùchén)',
  '艺涵 (Yìhán)',
  '奕辰 (Yìchén)',
  '梓涵 (Zǐhán)',
  '雨桐 (Yǔtóng)',
  '欣怡 (Xīnyí)',
  '宇轩 (Yǔxuān)',
  '语桐 (Yǔtóng)',
  '沐阳 (Mùyáng)',
  '语汐 (Yǔxī)',
];

function randomName() {
  const p = parseInt(Math.random() * surnames.length)
  const q = parseInt(Math.random() * givenNames.length)

  return {
    studentName: `${surnames[p]} ${givenNames[q]}`,
    studentID: parseInt(Math.random() * 100000000).toString().padStart(10, '0')
  }
}

const studentData = ref([])
for (let i = 0; i < 60; i++) {
  studentData.value.push(randomName())
}
</script>