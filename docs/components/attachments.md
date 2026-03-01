# Attachments 附件输入

文件附件输入组件，支持拖拽上传、多文件选择等。

## 基础用法

<demo vue="../../packages/components/attachments/index.vue" />

```vue
<template>
  <vai-attachments 
    v-model="files"
    :max-count="5"
    :max-size="10"
    accept="image/*,.pdf"
    @change="handleChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const files = ref([])

const handleChange = (newFiles) => {
  console.log('文件变化:', newFiles)
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 文件列表 | `File[]` | `[]` |
| maxCount | 最大文件数 | `number` | `10` |
| maxSize | 最大文件大小(MB) | `number` | `100` |
| accept | 接受的文件类型 | `string` | `-` |
| draggable | 是否支持拖拽 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 文件变化事件 | `(files: File[]) => void` |
| exceed | 超出限制事件 | `(files: File[], limit: number) => void` |