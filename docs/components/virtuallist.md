# Virtual List 虚拟列表

高性能虚拟列表，适用于大量数据的流畅滚动渲染。

<demo vue="../demos/virtuallist.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 数据列表 | `any[]` | `[]` |
| item-height | 每项高度 (px) | `number` | `40` |
| height | 容器高度 | `string \| number` | `400` |
| buffer | 缓冲区项数 | `number` | `10` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| scroll | 滚动时触发 | `(scrollTop: number) => void` |
| item-click | 点击某一项时触发 | `(item: any, index: number) => void` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| item | 列表项内容，作用域参数：`{ item, index }` |
