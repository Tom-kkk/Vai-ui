# Button 按钮

基础按钮组件，支持多种类型、尺寸和状态。

## 基础用法

<demo vue="../../packages/components/button/index.vue" />

```vue
<template>
  <vai-button>默认按钮</vai-button>
  <vai-button type="primary">主要按钮</vai-button>
  <vai-button type="success">成功按钮</vai-button>
  <vai-button type="warning">警告按钮</vai-button>
  <vai-button type="danger">危险按钮</vai-button>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 按钮类型 | `'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| size | 按钮尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| round | 是否圆角 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件 | `(event: MouseEvent) => void` |