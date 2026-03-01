# 快速开始

快速开始使用 Vue3 AI UI 组件库。

## 安装

### 环境要求

- Vue 3.4+
- Node.js 16+
- 现代浏览器

### 安装组件库

```bash
# 使用 npm
npm install vue3-ai-ui

# 使用 yarn
yarn add vue3-ai-ui

# 使用 pnpm
pnpm add vue3-ai-ui
```

## 基础使用

### 1. 完整引入

```javascript
import { createApp } from 'vue'
import Vue3AIUI from 'vue3-ai-ui'
import 'vue3-ai-ui/dist/style.css'

const app = createApp(App)
app.use(Vue3AIUI)
app.mount('#app')
```

### 2. 按需引入

```javascript
import { createApp } from 'vue'
import { 
  VaiAichat, 
  VaiSkeleton, 
  VaiTypingBubble,
  VaiThinkProcess 
} from 'vue3-ai-ui'
import 'vue3-ai-ui/dist/style.css'

const app = createApp(App)

app.component('vai-aichat', VaiAichat)
app.component('vai-skeleton', VaiSkeleton)
app.component('vai-typing-bubble', VaiTypingBubble)
app.component('vai-think-process', VaiThinkProcess)

app.mount('#app')
```

## 第一个示例

### 创建 AI 聊天界面

```vue
<template>
  <div class="ai-chat-demo">
    <h2>AI 助手</h2>
    
    <!-- 消息列表 -->
    <div class="message-list">
      <div 
        v-for="message in messages" 
        :key="message.id"
        :class="['message', message.type]"
      >
        <div class="content">{{ message.content }}</div>
        <div class="time">{{ formatTime(message.timestamp) }}</div>
      </div>
      
      <!-- AI 正在输入状态 -->
      <vai-typing-bubble 
        v-if="isTyping"
        text="AI 正在思考..."
        class="typing-bubble"
      />
    </div>
    
    <!-- 输入框 -->
    <div class="input-area">
      <input 
        v-model="inputText"
        @keyup.enter="sendMessage"
        placeholder="输入消息..."
        :disabled="isTyping"
      />
      <button @click="sendMessage" :disabled="isTyping">发送</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const messages = ref([
  {
    id: 1,
    type: 'ai',
    content: '你好！我是 AI 助手，有什么可以帮助你的吗？',
    timestamp: Date.now() - 5000
  }
])

const inputText = ref('')
const isTyping = ref(false)

const sendMessage = () => {
  if (!inputText.value.trim() || isTyping.value) return
  
  // 添加用户消息
  messages.value.push({
    id: Date.now(),
    type: 'user',
    content: inputText.value,
    timestamp: Date.now()
  })
  
  const question = inputText.value
  inputText.value = ''
  isTyping.value = true
  
  // 模拟 AI 回复
  setTimeout(() => {
    isTyping.value = false
    messages.value.push({
      id: Date.now(),
      type: 'ai',
      content: `收到你的问题："${question}"。这是一个很好的问题，让我来帮你解答...`,
      timestamp: Date.now()
    })
  }, 2000)
}

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString()
}
</script>

<style>
.ai-chat-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
}

.message-list {
  height: 400px;
  overflow-y: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 20px;
}

.message {
  margin-bottom: 16px;
  max-width: 80%;
}

.message.user {
  margin-left: auto;
  text-align: right;
}

.message.ai {
  margin-right: auto;
}

.message .content {
  display: inline-block;
  padding: 12px 16px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.message.user .content {
  background: #1890ff;
  color: white;
}

.message .time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

.typing-bubble {
  margin-bottom: 16px;
}

.input-area {
  display: flex;
  gap: 12px;
}

.input-area input {
  flex: 1;
  padding: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 14px;
}

.input-area button {
  padding: 12px 24px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.input-area button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
```

## 主题定制

### CSS 变量

Vue3 AI UI 使用 CSS 变量来管理主题，你可以通过覆盖这些变量来定制主题：

```css
:root {
  /* 主色调 */
  --vai-primary-color: #1890ff;
  --vai-success-color: #52c41a;
  --vai-warning-color: #faad14;
  --vai-error-color: #ff4d4f;
  
  /* 文本颜色 */
  --vai-text-color: #333;
  --vai-text-color-secondary: #666;
  --vai-text-color-disabled: #999;
  
  /* 边框和背景 */
  --vai-border-color: #d9d9d9;
  --vai-background-color: #fff;
  --vai-background-color-light: #fafafa;
  
  /* 圆角 */
  --vai-border-radius: 6px;
  --vai-border-radius-sm: 4px;
  --vai-border-radius-lg: 8px;
  
  /* 阴影 */
  --vai-shadow: 0 2px 8px rgba(0,0,0,0.15);
  --vai-shadow-sm: 0 2px 4px rgba(0,0,0,0.12);
}
```

### 暗色主题

```css
:root[data-theme="dark"] {
  --vai-text-color: #fff;
  --vai-text-color-secondary: #ccc;
  --vai-border-color: #434343;
  --vai-background-color: #141414;
  --vai-background-color-light: #1f1f1f;
}
```

## 下一步

- 查看 [组件列表](./components/) 了解所有可用组件
- 阅读 [API 文档](./api/) 了解详细的接口说明
- 查看 [示例](./examples/) 获取更多使用灵感