# TypingBubble 打字气泡

展示 AI 正在输入或思考状态的动画气泡组件。

## 基础用法

<demo vue="../../packages/components/typingbubble/index.vue" />

```vue
<template>
  <!-- 基础打字气泡 -->
  <vai-typing-bubble />
  
  <!-- 自定义文本 -->
  <vai-typing-bubble text="AI 正在思考..." />
  
  <!-- 不同尺寸 -->
  <vai-typing-bubble size="small" />
  <vai-typing-bubble size="large" />
  
  <!-- 自定义颜色 -->
  <vai-typing-bubble color="#42d392" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| text | 提示文本 | `string` | `'AI 正在输入...'` |
| size | 气泡大小 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| color | 主题颜色 | `string` | `'#1890ff'` |
| speed | 动画速度 | `number` | `1.4` |
| dots | 动画点数量 | `number` | `3` |

## 示例

### 对话框中的使用

```vue
<template>
  <div class="chat-container">
    <div class="message user">你好，请帮我分析一下这段代码</div>
    <div class="message ai">
      <vai-typing-bubble text="正在分析代码..." />
    </div>
  </div>
</template>

<style>
.chat-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.message {
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 12px;
  max-width: 80%;
}

.message.user {
  background: #e6f7ff;
  margin-left: auto;
  text-align: right;
}

.message.ai {
  background: #f6f6f6;
}
</style>
```

### 自定义动画样式

```vue
<template>
  <vai-typing-bubble 
    :custom-class="customClass"
    text="AI 正在生成回复..."
  />
</template>

<script setup>
const customClass = 'custom-typing-bubble'
</script>

<style>
.custom-typing-bubble {
  padding: 8px 12px;
  border-radius: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.custom-typing-bubble .typing-dots {
  gap: 4px;
}

.custom-typing-bubble .typing-dot {
  width: 6px;
  height: 6px;
  background: white;
}
</style>
```

### 配合思考过程组件

```vue
<template>
  <div class="thinking-process">
    <div class="step" v-for="(step, index) in steps" :key="index">
      <div class="step-title">{{ step.title }}</div>
      <div class="step-content">
        <vai-typing-bubble 
          v-if="step.loading"
          :text="step.loadingText"
          size="small"
        />
        <div v-else>{{ step.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const steps = ref([
  {
    title: '理解问题',
    loading: false,
    content: '已理解您的需求'
  },
  {
    title: '分析代码',
    loading: true,
    loadingText: '正在分析代码结构...'
  },
  {
    title: '生成建议',
    loading: false,
    content: ''
  }
])
</script>
```

### 不同状态的打字气泡

```vue
<template>
  <div class="typing-states">
    <div class="state">
      <span>思考中：</span>
      <vai-typing-bubble color="#ff7875" text="思考中..." />
    </div>
    <div class="state">
      <span>生成中：</span>
      <vai-typing-bubble color="#52c41a" text="生成中..." />
    </div>
    <div class="state">
      <span>分析中：</span>
      <vai-typing-bubble color="#1890ff" text="分析中..." />
    </div>
  </div>
</template>

<style>
.typing-states .state {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.typing-states span {
  min-width: 80px;
  font-weight: 500;
}
</style>
```