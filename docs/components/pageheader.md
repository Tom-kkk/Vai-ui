# PageHeader 页头组件

页面头部导航组件，支持面包屑、操作按钮等。

## 基础用法

<demo vue="../../packages/components/pageheader/index.vue" />

```vue
<template>
  <vai-page-header 
    title="页面标题"
    sub-title="页面副标题"
    :breadcrumb="breadcrumb"
  >
    <template #extra>
      <vai-button type="primary">操作按钮</vai-button>
    </template>
  </vai-page-header>
</template>

<script setup>
const breadcrumb = [
  { title: '首页', path: '/' },
  { title: '组件', path: '/components' },
  { title: '当前页面' }
]
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 页面标题 | `string` | `-` |
| sub-title | 页面副标题 | `string` | `-` |
| breadcrumb | 面包屑数据 | `BreadcrumbItem[]` | `[]` |
| show-back | 是否显示返回按钮 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| back | 返回按钮点击 | `() => void` |