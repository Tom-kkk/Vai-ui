# Suggestion 快捷指令

快捷指令建议组件，常用于AI对话的快捷输入。

## 基础用法

<demo vue="../../packages/components/suggestion/index.vue" />

```vue
<template>
  <vai-suggestion 
    :suggestions="suggestions"
    @select="handleSelect"
  />
</template>

<script setup>
const suggestions = [
  {
    id: 1,
    label: '生成代码',
    description: '根据描述生成代码',
    icon: '💻'
  },
  {
    id: 2,
    label: '总结内容',
    description: '对内容进行总结',
    icon: '📝'
  }
]

const handleSelect = (suggestion) => {
  console.log('选择的指令:', suggestion)
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| suggestions | 建议列表 | `SuggestionItem[]` | `[]` |
| maxShow | 最大显示数量 | `number` | `6` |
| searchable | 是否可搜索 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| select | 选择事件 | `(item: SuggestionItem) => void` |
| search | 搜索事件 | `(keyword: string) => void` |