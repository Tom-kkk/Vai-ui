# FileCard 文件卡片

文件展示卡片，支持预览、下载与进度显示。

<demo vue="../demos/filecard.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 文件名 | `string` | — |
| size | 文件大小 | `string` | — |
| type | 文件类型 | `string` | — |
| tags | 文件标签 | `string[]` | `[]` |
| show-progress | 是否显示进度 | `boolean` | `false` |
| progress | 上传进度 (0–100) | `number` | `0` |
| deletable | 是否可删除 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| download | 点击下载时触发 | `(file: any) => void` |
| delete | 点击删除时触发 | `(file: any) => void` |
| preview | 点击预览时触发 | `(file: any) => void` |
