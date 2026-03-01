# Virtual List 虚拟列表

高性能虚拟列表组件，支持百万级数据的流畅渲染。

## 基础用法

<demo vue="../../packages/components/virtuallist/index.vue" />

```vue
<template>
  <vai-virtual-list 
    :items="largeData"
    :item-height="50"
    :height="400"
  >
    <template #item="{ item, index }">
      <div class="list-item">
        {{ index + 1 }}. {{ item.name }}
      </div>
    </template>
  </vai-virtual-list>
</template>

<script setup>
import { ref } from 'vue'

// 生成100万条数据
const largeData = ref(Array.from({ length: 1000000 }, (_, i) => ({
  id: i,
  name: `Item ${i + 1}`
})))
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| items | 数据列表 | `any[]` | `[]` |
| itemHeight | 每项高度 | `number` | `40` |
| height | 容器高度 | `string \| number` | `400` |
| buffer | 缓冲区大小 | `number` | `10` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| scroll | 滚动事件 | `(scrollTop: number) => void` |
| itemClick | 点击项事件 | `(item: any, index: number) => void` |