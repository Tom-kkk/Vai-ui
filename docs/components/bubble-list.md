# BubbleList 消息列表

消息列表容器组件，内部使用 `VaiBubble` 渲染每条消息，支持自动滚底和 ref 暴露。

> **v2 新增组件**：`VaiBubbleList` 是从 `VaiAiChat` 中拆分出来的原子组件，可独立使用。

<demo vue="../demos/bubble-list.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| messages | 消息数组 | `Message[]` | `[]`（required） |
| autoScroll | 新消息或内容变化时是否自动滚底 | `boolean` | `true` |

### Exposed Methods

通过模板 ref 可调用以下方法：

| 方法名 | 说明 |
| --- | --- |
| `scrollToBottom()` | 滚动到消息列表底部 |

### Message 对象结构

```typescript
interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
  status?: 'loading' | 'streaming' | 'success' | 'error'
  streaming?: boolean
  typing?: boolean
  timestamp?: Date
}
```

### 用法示例

```vue
<template>
  <VaiBubbleList ref="listRef" :messages="messages" />
</template>

<script setup>
import { ref } from 'vue'
import { VaiBubbleList } from '@tom1612/vai-ui'

const listRef = ref(null)
const messages = ref([])

function scrollToBottom() {
  listRef.value?.scrollToBottom()
}
</script>
```
