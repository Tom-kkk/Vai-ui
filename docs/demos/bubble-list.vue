<template>
  <div class="demo-wrap">
    <div class="list-container">
      <VaiBubbleList ref="listRef" :messages="messages" :autoScroll="autoScroll" />
    </div>
    <div class="demo-controls">
      <button class="ctrl-btn" @click="addMessage">+ 添加消息</button>
      <button class="ctrl-btn" @click="addStreamMessage">+ 流式消息</button>
      <button class="ctrl-btn" @click="scrollManual">手动滚底</button>
      <label class="ctrl-label">
        <input type="checkbox" v-model="autoScroll" /> 自动滚底
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VaiBubbleList } from '../../packages/components'

const listRef = ref(null)
const autoScroll = ref(true)

const messages = ref([
  { role: 'assistant', content: '你好！有什么可以帮助你的吗？', timestamp: new Date(), status: 'success' },
  { role: 'user', content: '帮我演示一下消息列表。', timestamp: new Date(), status: 'success' }
])

let msgCount = 3

function addMessage() {
  messages.value.push({
    role: msgCount % 2 === 0 ? 'user' : 'assistant',
    content: `这是第 ${msgCount} 条消息，用于演示自动滚底效果。`,
    timestamp: new Date(),
    status: 'success'
  })
  msgCount++
}

function addStreamMessage() {
  const idx = messages.value.length
  messages.value.push({
    role: 'assistant',
    content: '',
    timestamp: new Date(),
    status: 'streaming'
  })
  const chunks = ['正在', '流式', '输出', '中...', ' ✅ 完成！']
  let i = 0
  const timer = setInterval(() => {
    if (i < chunks.length) {
      messages.value[idx].content += chunks[i]
      i++
    } else {
      messages.value[idx].status = 'success'
      clearInterval(timer)
    }
  }, 300)
}

function scrollManual() {
  listRef.value?.scrollToBottom()
}
</script>

<style scoped>
.demo-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.list-container {
  height: 300px;
  border: 1px solid var(--vai-border-color, #e5e7eb);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.demo-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.ctrl-btn {
  padding: 6px 14px;
  font-size: 13px;
  border: 1px solid var(--vai-border-color, #e5e7eb);
  border-radius: 6px;
  background: none;
  cursor: pointer;
  color: var(--vai-text-color-primary, #111);
  transition: all 0.2s;
}
.ctrl-btn:hover {
  background: var(--vai-color-primary, #409eff);
  color: #fff;
  border-color: var(--vai-color-primary, #409eff);
}
.ctrl-label {
  font-size: 13px;
  color: var(--vai-text-color-secondary, #6b7280);
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
</style>
