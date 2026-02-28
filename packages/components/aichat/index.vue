<template>
  <div class="vai-aichat">
    <div class="header">
      <div class="title"><span class="badge">✨ AI</span><span>{{ title }}</span></div>
      <button @click="clear">🗑️</button>
    </div>
    <div ref="msgs" class="messages">
      <div v-for="(msg, i) in messages" :key="i" :class="['msg', `msg-${msg.role}`]">
        <div class="avatar"><span v-if="msg.role === 'user'">👤</span><span v-else>✨</span></div>
        <div class="bubble">
          <div v-html="render(msg.content)"></div>
          <div class="time">{{ formatTime(msg.timestamp) }}</div>
        </div>
      </div>
      <div v-if="generating" class="msg msg-assistant">
        <div class="avatar"><span class="loading">✨</span></div>
        <div class="bubble">
          <div class="typing"><span></span><span></span><span></span></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <textarea v-model="input" :disabled="generating" @keydown.enter.exact="send" rows="1" placeholder="输入消息..."></textarea>
      <button @click="send" :disabled="!input.trim() || generating">发送 ✈️</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaiAiChat',
  props: { title: { type: String, default: 'AI 助手' } },
  data() {
    return {
      messages: [],
      input: '',
      generating: false
    }
  },
  methods: {
    send() {
      if (!this.input.trim() || this.generating) return
      this.messages.push({ role: 'user', content: this.input.trim(), timestamp: new Date() })
      this.input = ''
      this.scroll()
      this.generating = true
      setTimeout(() => {
        const responses = [
          '你好！我是 AI 助手。这是一个演示组件，展示了流式对话效果。',
          '这个组件支持：\n- 实时消息展示\n- **Markdown** 渲染\n- 代码高亮\n- 对话历史',
          '你可以输入任何问题。**注意**：这只是演示版本，使用模拟数据。',
          '功能特性：流式响应、Markdown 支持、60fps 渲染、对话管理'
        ]
        this.messages.push({
          role: 'assistant',
          content: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date()
        })
        this.generating = false
        this.scroll()
      }, 1000)
    },
    render(text) {
      return text
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>')
    },
    formatTime(date) {
      const d = new Date(date)
      return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`
    },
    clear() {
      if (confirm('确定清空？')) this.messages = []
    },
    scroll() {
      this.$nextTick(() => {
        if (this.$refs.msgs) this.$refs.msgs.scrollTop = this.$refs.msgs.scrollHeight
      })
    }
  },
  mounted() {
    this.messages.push({ role: 'assistant', content: '你好！有什么可以帮助你的吗？', timestamp: new Date() })
  }
}
</script>

<style scoped>
.vai-aichat {
  display: flex;
  flex-direction: column;
  height: 500px;
  border: 1px solid var(--vai-border-color);
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}
.title { display: flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 600; }
.badge { padding: 4px 8px; background: rgba(255,255,255,0.2); border-radius: 12px; font-size: 12px; }
.header button { padding: 4px 8px; font-size: 16px; background: rgba(255,255,255,0.2); border: none; border-radius: 4px; color: #fff; cursor: pointer; }
.messages { flex: 1; overflow-y: auto; padding: 16px; background: #f5f7fa; }
.msg { display: flex; gap: 12px; margin-bottom: 16px; animation: slideIn 0.3s; }
.msg-user { flex-direction: row-reverse; }
.msg-user .bubble { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; }
.avatar {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  font-size: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.bubble {
  flex: 1;
  max-width: 70%;
  padding: 12px 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  font-size: 14px;
  line-height: 1.6;
}
.time { margin-top: 8px; font-size: 12px; opacity: 0.6; }
.loading { animation: pulse 1.5s infinite; }
.typing { display: flex; gap: 4px; }
.typing span {
  width: 6px;
  height: 6px;
  background: currentColor;
  border-radius: 50%;
  opacity: 0.4;
  animation: typing 1.4s infinite;
}
.typing span:nth-child(2) { animation-delay: 0.2s; }
.typing span:nth-child(3) { animation-delay: 0.4s; }
.footer {
  display: flex;
  gap: 8px;
  padding: 16px;
  background: #fff;
  border-top: 1px solid var(--vai-border-color-lighter);
}
.footer textarea {
  flex: 1;
  padding: 8px 12px;
  font-size: 14px;
  background: #f5f7fa;
  border: 1px solid var(--vai-border-color);
  border-radius: 6px;
  resize: none;
  font-family: inherit;
}
.footer button {
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.footer button:disabled { opacity: 0.5; cursor: not-allowed; }
@keyframes slideIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes typing {
  0%, 60%, 100% { opacity: 0.4; }
  30% { opacity: 1; }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
