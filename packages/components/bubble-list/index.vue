<script setup>
import { ref, watch, nextTick } from 'vue'
import VaiBubble from '../bubble/index.vue'

const props = defineProps({
  messages: {
    type: Array,
    required: true,
    default: () => []
  },
  autoScroll: { type: Boolean, default: true }
})

const listRef = ref(null)

function scrollToBottom() {
  nextTick(() => {
    if (listRef.value) {
      listRef.value.scrollTop = listRef.value.scrollHeight
    }
  })
}

watch(
  () => props.messages.length,
  () => { if (props.autoScroll) scrollToBottom() }
)

watch(
  () => props.messages[props.messages.length - 1]?.content,
  () => { if (props.autoScroll) scrollToBottom() }
)

defineExpose({ scrollToBottom })
</script>

<template>
  <div ref="listRef" class="chat-messages">
    <VaiBubble
      v-for="(msg, i) in messages"
      :key="i"
      :role="msg.role"
      :content="msg.content"
      :status="msg.status"
      :streaming="msg.streaming"
      :typing="msg.typing"
      :timestamp="msg.timestamp"
    />
  </div>
</template>

<style scoped>
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px 18px;
  background: var(--vai-bg-page);
  scroll-behavior: smooth;
}
.chat-messages::-webkit-scrollbar { width: 4px; }
.chat-messages::-webkit-scrollbar-track { background: transparent; }
.chat-messages::-webkit-scrollbar-thumb { background: var(--vai-border-color); border-radius: 2px; }
</style>
