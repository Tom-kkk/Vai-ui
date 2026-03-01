# AI Chat 对话组件

AI 对话组件，支持多轮对话、消息类型、快捷操作等功能。

## 基础用法

<demo vue="../../packages/components/aichat/index.vue" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| messages | 消息列表 | `Message[]` | `[]` |
| placeholder | 输入框占位文本 | `string` | `'请输入消息...'` |
| disabled | 是否禁用输入 | `boolean` | `false` |
| loading | 是否显示加载状态 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| send | 发送消息时触发 | `(message: string) => void` |
| retry | 重试消息时触发 | `(messageId: number) => void` |

### Message 类型

```typescript
interface Message {
  id: number
  type: 'user' | 'ai' | 'system'
  content: string
  timestamp?: number
  status?: 'sending' | 'sent' | 'failed'
}
```

## 示例

### 自定义消息样式

```vue
<template>
  <vai-aichat 
    :messages="messages"
    @send="handleSend"
    :message-render="messageRender"
  />
</template>

<script setup>
const messageRender = (message) => {
  if (message.type === 'ai') {
    return h('div', { class: 'ai-message' }, message.content)
  }
  return null
}
</script>
```

### 快捷操作

```vue
<template>
  <vai-aichat 
    :messages="messages"
    @send="handleSend"
    :quick-actions="quickActions"
  />
</template>

<script setup>
const quickActions = [
  { label: '生成代码', action: 'generate-code' },
  { label: '总结内容', action: 'summarize' },
  { label: '翻译', action: 'translate' }
]
</script>
```