<template>
  <div class="page-container">
    <NaiveUiTable :columns="columns" :requestApi="getList" :search-props="search" :toolButton="['refresh', 'setting']">
      <template #tableHeader>
        <NButton>清空消息</NButton>
        <NButton>全部已读</NButton>
      </template>
    </NaiveUiTable>
  </div>
</template>

<script setup lang="ts">
import { getMessageList } from '@/api/personal/message-center';
import { columns, search } from './page.schema';

// /websocket/userMessage/list
async function getList(params) {
  console.log('params', params);

  const data = await getMessageList(params)
  return data
}
</script>

<style scoped></style>
