<script setup>
import { ref, onMounted } from 'vue'
import VaiBubbleList from '../bubble-list/index.vue'
import VaiSender from '../sender/index.vue'

const DEMO_RESPONSES = [
  '你好！我是 AI 助手。这是一个演示组件，展示了流式对话效果。',
  '这个组件支持：\n- 实时消息展示\n- **Markdown** 渲染\n- 代码高亮\n- 对话历史\n\n示例代码：\n```javascript\nconsole.log("Hello, Vai-ui!")\n```',
  '你可以输入任何问题。**注意**：这只是演示版本，使用模拟数据。',
  '功能特性：流式响应、Markdown 支持、60fps 渲染、对话管理'
]

const props = defineProps({
  title: { type: String, default: 'AI 助手' },
  onRequest: { type: Function, default: null },
  streaming: { type: Boolean, default: false }
})

const emit = defineEmits(['send', 'clear', 'abort'])

const messages = ref([])
const input = ref('')
const generating = ref(false)
const listRef = ref(null)

let _abortController = null
let _pendingChunk = ''
let _rafPending = false

function send(text) {
  const userMsg = typeof text === 'string' ? text : input.value.trim()
  if (!userMsg || generating.value) return

  messages.value.push({ role: 'user', content: userMsg, timestamp: new Date(), status: 'success' })
  input.value = ''
  emit('send', userMsg)

  if (!props.onRequest) {
    runDemoMode()
    return
  }

  generating.value = true
  _abortController = { aborted: false }

  if (props.streaming) {
    const streamMsg = { role: 'assistant', content: '', timestamp: new Date(), status: 'streaming' }
    messages.value.push(streamMsg)
    const idx = messages.value.length - 1

    props.onRequest(userMsg, {
      onChunk: (chunk) => {
        if (_abortController.aborted) return
        _pendingChunk += chunk
        if (!_rafPending) {
          _rafPending = true
          requestAnimationFrame(() => {
            messages.value[idx].content += _pendingChunk
            _pendingChunk = ''
            _rafPending = false
          })
        }
      },
      onError: (err) => {
        messages.value[idx].status = 'error'
        messages.value[idx].content = `请求失败：${err.message || '未知错误'}`
        generating.value = false
      },
      onComplete: () => {
        messages.value[idx].status = 'success'
        generating.value = false
        listRef.value?.scrollToBottom()
      }
    })
  } else {
    const loadingMsg = { role: 'assistant', content: '', timestamp: new Date(), status: 'loading' }
    messages.value.push(loadingMsg)
    const msgIndex = messages.value.length - 1

    props.onRequest(userMsg, {
      onChunk: (content) => {
        messages.value[msgIndex].content = content
        messages.value[msgIndex].status = 'streaming'
      },
      onError: (err) => {
        messages.value[msgIndex].status = 'error'
        messages.value[msgIndex].content = `请求失败：${err.message || '未知错误'}`
        generating.value = false
      },
      onComplete: () => {
        messages.value[msgIndex].status = 'success'
        generating.value = false
        listRef.value?.scrollToBottom()
      }
    })
  }
}

function abort() {
  if (_abortController) _abortController.aborted = true
  generating.value = false
  emit('abort')
}

function clear() {
  if (confirm('确定清空？')) {
    messages.value = []
    emit('clear')
  }
}

function runDemoMode() {
  generating.value = true
  setTimeout(() => {
    messages.value.push({
      role: 'assistant',
      content: DEMO_RESPONSES[Math.floor(Math.random() * DEMO_RESPONSES.length)],
      timestamp: new Date(),
      status: 'success'
    })
    generating.value = false
    listRef.value?.scrollToBottom()
  }, 1000)
}

onMounted(() => {
  messages.value.push({
    role: 'assistant',
    content: '你好！有什么可以帮助你的吗？',
    timestamp: new Date(),
    status: 'success'
  })
})
</script>

<template>
  <div class="vai-aichat">
    <div class="chat-header">
      <div class="header-left">
        <div class="ai-avatar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
          </svg>
        </div>
        <div>
          <div class="header-title">{{ title }}</div>
          <div class="header-status">
            <span class="status-dot" :class="{ 'status-active': generating }"></span>
            {{ generating ? 'AI 正在思考...' : '在线' }}
          </div>
        </div>
      </div>
      <button class="header-action" @click="clear" title="清空对话">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </button>
    </div>

    <VaiBubbleList ref="listRef" :messages="messages" :autoScroll="true" />

    <VaiSender
      :modelValue="input"
      @update:modelValue="input = $event"
      :loading="generating && !streaming"
      :streaming="generating && streaming"
      @submit="send"
      @abort="abort"
    />
  </div>
</template>

<style scoped>
.vai-aichat {
  display: flex;
  flex-direction: column;
  height: 500px;
  border: 1px solid var(--vai-border-color);
  border-radius: var(--vai-radius-xl);
  background: var(--vai-bg-base);
  overflow: hidden;
  font-family: var(--vai-font-family);
  box-shadow: var(--vai-shadow-md);
}

/* ---- Header ---- */
.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  background: var(--vai-bg-base);
  border-bottom: 1px solid var(--vai-border-color);
  flex-shrink: 0;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.ai-avatar {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vai-gradient-primary);
  border-radius: var(--vai-radius-md);
  color: #fff;
  flex-shrink: 0;
  box-shadow: var(--vai-shadow-primary-sm);
}
.header-title {
  font-size: var(--vai-font-size-md);
  font-weight: 600;
  color: var(--vai-text-color-primary);
  line-height: 1.3;
}
.header-status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: var(--vai-font-size-xs);
  color: var(--vai-text-color-secondary);
  margin-top: 2px;
}
.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--vai-color-success);
}
.status-dot.status-active {
  background: var(--vai-color-primary);
  animation: dot-blink 1.2s ease-in-out infinite;
}
.header-action {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vai-text-color-tertiary);
  background: none;
  border: none;
  border-radius: var(--vai-radius-sm);
  cursor: pointer;
  transition: var(--vai-transition-fast);
}
.header-action:hover {
  color: var(--vai-color-danger);
  background: var(--vai-color-danger-bg);
}

@keyframes dot-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
</style>
