# Sender 消息输入框

消息输入区组件，支持 v-model 双向绑定、IME 中文输入防误触、流式停止按钮和自定义前后缀插槽。

> **v2 新增组件**：`VaiSender` 是从 `VaiAiChat` 中拆分出来的原子组件，可独立使用。

<demo vue="../demos/sender.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue (v-model) | 输入框内容 | `string` | `''` |
| loading | 是否处于非流式请求中（禁用输入） | `boolean` | `false` |
| streaming | 是否正在流式生成中（显示停止按钮） | `boolean` | `false` |
| placeholder | 输入框占位文本 | `string` | `'发送消息...'` |
| disabled | 是否禁用 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 输入内容变化 | `(value: string) => void` |
| submit | 用户按 Enter 或点击发送按钮 | `(text: string) => void` |
| abort | 用户点击停止按钮 | `() => void` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| prefix | 输入框左侧，适合放附件、语音按钮 |
| suffix | 输入框右侧，默认为发送/停止按钮（可覆盖） |

### 用法示例

```vue
<template>
  <VaiSender
    v-model="inputText"
    :streaming="isStreaming"
    @submit="handleSend"
    @abort="handleAbort"
  >
    <template #prefix>
      <button>📎</button>
    </template>
  </VaiSender>
</template>

<script setup>
import { ref } from 'vue'
import { VaiSender } from '@tom1612/vai-ui'

const inputText = ref('')
const isStreaming = ref(false)

function handleSend(text) {
  console.log('发送:', text)
}

function handleAbort() {
  isStreaming.value = false
}
</script>
```
