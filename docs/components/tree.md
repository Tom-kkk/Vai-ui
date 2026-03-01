# Tree 树形控件

树形结构展示与选择，支持展开折叠与勾选。

<demo vue="../demos/tree.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 树形数据 | `TreeNode[]` | `[]` |
| default-expanded-keys | 默认展开的节点 key | `string[]` | `[]` |
| default-selected-keys | 默认选中的节点 key | `string[]` | `[]` |
| checkable | 是否显示复选框 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 节点选择时触发 | `(keys: string[], info: any) => void` |
| expand | 展开/折叠时触发 | `(keys: string[], info: any) => void` |
