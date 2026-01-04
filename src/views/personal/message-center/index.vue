<template>
  <div class="">
    消息中心
    <NButton @click="send">发送请求</NButton>
  </div>
</template>

<script setup lang="ts">
import { getMessageList } from '@/api/personal/message-center';

// /websocket/userMessage/list
function send() {
  getMessageList({page:1}).then(res => {
    console.log(res);
  })
}
</script>

<style scoped></style>
