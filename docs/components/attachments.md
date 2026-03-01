# Attachments 附件输入

文件附件输入组件，支持拖拽上传与多文件选择。

<demo vue="../demos/attachments.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue / v-model | 文件列表 | `File[]` | `[]` |
| max-count | 最大文件数 | `number` | `10` |
| max-size | 单文件最大大小 (MB) | `number` | `100` |
| accept | 接受的文件类型 | `string` | — |
| draggable | 是否支持拖拽 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 文件变化时触发 | `(files: File[]) => void` |
| exceed | 超出数量或大小时触发 | `(files: File[], limit: number) => void` |
