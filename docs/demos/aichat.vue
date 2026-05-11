<template>
  <div class="demo-wrap">
    <div class="demo-controls">
      <label>模式：</label>
      <button
        v-for="m in modes"
        :key="m.value"
        :class="['mode-btn', { active: currentMode === m.value }]"
        @click="currentMode = m.value"
      >{{ m.label }}</button>
    </div>

    <div v-if="currentMode === 'demo'" class="demo-tip">
      💡 演示模式：无需配置，组件内置模拟响应
    </div>
    <div v-else-if="currentMode === 'stream'" class="demo-tip">
      💡 流式模式：通过 <code>onRequest</code> 回调模拟逐字流式输出
    </div>
    <div v-else class="demo-tip">
      💡 非流式模式：通过 <code>onRequest</code> 回调一次性返回响应
    </div>

    <!-- 演示模式：无 onRequest -->
    <VaiAiChat
      v-if="currentMode === 'demo'"
      key="demo"
      title="AI 助手（演示模式）"
    />

    <!-- 流式模式 -->
    <VaiAiChat
      v-else-if="currentMode === 'stream'"
      key="stream"
      title="AI 助手（流式模式）"
      :on-request="handleStreamRequest"
      :streaming="true"
      @send="onSend"
      @abort="onAbort"
    />

    <!-- 非流式模式 -->
    <VaiAiChat
      v-else
      key="normal"
      title="AI 助手（非流式模式）"
      :on-request="handleNormalRequest"
      :streaming="false"
      @send="onSend"
    />
  </div>
</template>

<script>
import { VaiAiChat } from '../../packages/components'

const MOCK_RESPONSES = [
  '# 你好！\n\n我是 AI 助手，可以帮你：\n- 回答问题\n- **分析代码**\n- 生成内容',
  '## 示例代码\n\n```javascript\nconst greet = (name) => {\n  return `Hello, ${name}!`\n}\nconsole.log(greet("Vai-ui"))\n```',
  '这是一个**流式响应**的演示。\n\n> 实际使用中，你可以通过 `onRequest` prop 接入任意 LLM API。\n\n支持的格式：\n1. OpenAI 兼容接口\n2. SSE 服务器推送\n3. WebSocket 流',
  '| 特性 | 状态 |\n|------|------|\n| Markdown 渲染 | ✅ |\n| 流式输出 | ✅ |\n| 代码高亮 | ✅ |\n| XSS 防护 | ✅ |'
]

export default {
  components: { VaiAiChat },
  data() {
    return {
      currentMode: 'demo',
      modes: [
        { value: 'demo', label: '🎭 演示模式' },
        { value: 'stream', label: '⚡ 流式模式' },
        { value: 'normal', label: '📨 非流式模式' }
      ]
    }
  },
  methods: {
    handleStreamRequest(message, { onChunk, onError, onComplete }) {
      const response = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)]
      const chars = response.split('')
      let i = 0

      const interval = setInterval(() => {
        if (i < chars.length) {
          onChunk(chars[i])
          i++
        } else {
          clearInterval(interval)
          onComplete()
        }
      }, 30)
    },

    handleNormalRequest(message, { onChunk, onError, onComplete }) {
      setTimeout(() => {
        const response = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)]
        onChunk(response)
        onComplete()
      }, 800)
    },

    onSend(message) {
      console.log('[VaiAiChat Demo] 发送消息:', message)
    },

    onAbort() {
      console.log('[VaiAiChat Demo] 用户中止流式输出')
    }
  }
}
</script>

<style scoped>
.demo-wrap { display: flex; flex-direction: column; gap: 12px; }
.demo-controls { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.demo-controls label { font-size: 14px; color: var(--vai-text-color-regular); }
.mode-btn {
  padding: 5px 14px;
  font-size: 13px;
  border: 1px solid var(--vai-border-color);
  border-radius: 4px;
  cursor: pointer;
  background: #fff;
  transition: all 0.2s;
}
.mode-btn.active {
  background: var(--vai-color-primary);
  color: #fff;
  border-color: var(--vai-color-primary);
}
.demo-tip {
  padding: 8px 14px;
  font-size: 13px;
  color: var(--vai-text-color-secondary);
  background: var(--vai-fill-color-light);
  border-radius: 6px;
  border-left: 3px solid var(--vai-color-primary);
}
.demo-tip code {
  padding: 1px 5px;
  background: rgba(0,0,0,0.06);
  border-radius: 3px;
  font-size: 12px;
}
</style>
