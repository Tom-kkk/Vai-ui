# Skeleton 骨架屏

在内容加载前显示占位图，提升加载过程体验。

<demo vue="../demos/skeleton.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否显示骨架屏 | `boolean` | `true` |
| active | 是否显示动画 | `boolean` | `true` |
| avatar | 是否显示头像占位 | `boolean` | `false` |
| rows | 段落占位行数 | `number` | `3` |
| avatar-shape | 头像占位形状 | `'circle' \| 'square'` | `'circle'` |
| width | 自定义宽度 | `string \| number` | — |
| height | 自定义高度 | `string \| number` | — |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| template | 自定义骨架屏结构 |
