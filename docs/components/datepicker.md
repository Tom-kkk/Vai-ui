# DatePicker 日期选择器

日期时间选择组件，支持多种选择模式。

## 基础用法

<demo vue="../../packages/components/datepicker/index.vue" />

```vue
<template>
  <vai-date-picker v-model="date" />
  <vai-date-picker 
    v-model="dateRange" 
    type="range" 
    placeholder="选择日期范围"
  />
  <vai-date-picker 
    v-model="dateTime" 
    type="datetime" 
    placeholder="选择日期时间"
  />
</template>

<script setup>
import { ref } from 'vue'

const date = ref('')
const dateRange = ref([])
const dateTime = ref('')
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 选择器类型 | `'date' \| 'range' \| 'datetime'` | `'date'` |
| value | 选中值 | `string \| string[]` | `-` |
| placeholder | 占位文本 | `string` | `'请选择日期'` |
| format | 显示格式 | `string` | `'YYYY-MM-DD'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化事件 | `(value: any) => void` |
| ok | 确认事件 | `(value: any) => void` |