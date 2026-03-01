# PageHeader 页头组件

页面头部导航组件，支持标题、副标题、面包屑与右侧操作区。

<demo vue="../demos/pageheader.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 页面标题 | `string` | — |
| sub-title | 副标题 | `string` | — |
| breadcrumb | 面包屑数据 | `BreadcrumbItem[]` | `[]` |
| show-back | 是否显示返回按钮 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| back | 点击返回时触发 | `() => void` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| extra | 标题右侧操作区内容 |
