# Bubble 消息气泡

单条消息气泡组件，支持 Markdown 渲染、多种状态、自定义头像和底部插槽。

> **v2 新增组件**：`VaiBubble` 是从 `VaiAiChat` 中拆分出来的原子组件，可独立使用。

<demo vue="../demos/bubble.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| role | 消息角色 | `'user' \| 'assistant' \| 'system'` | `'assistant'` |
| content | 消息内容（支持 Markdown） | `string` | `''` |
| status | 消息状态 | `'loading' \| 'streaming' \| 'success' \| 'error'` | `'success'` |
| streaming | 是否正在流式输出 | `boolean` | `false` |
| typing | 是否显示打字动画 | `boolean` | `false` |
| timestamp | 消息时间戳 | `Date` | `null` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| avatar | 覆盖默认头像 |
| footer | 气泡底部（时间戳下方），适合放操作按钮 |

### 状态说明

| status 值 | 效果 |
| --- | --- |
| `loading` | 显示三点打字动画 |
| `streaming` | 正常渲染内容（content 实时追加） |
| `success` | 正常渲染内容 |
| `error` | 红色气泡样式 |
