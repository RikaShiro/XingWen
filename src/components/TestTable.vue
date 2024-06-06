<template>
  <a-table :columns="columns" :data-source="data" :pagination="false" :scroll="{ y: 320 }">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === dataIndex">
        <a>{{ text }}</a>
      </template>
    </template>
  </a-table>
</template>

<script setup>
defineProps(['columns', 'data', 'dataIndex'])
</script>

<style scoped></style>