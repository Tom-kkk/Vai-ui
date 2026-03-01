# AI Chat 对话组件

基于流式 API 的智能对话组件，支持多轮对话、Markdown 与对话历史管理。

<demo vue="../demos/aichat.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| messages | 消息列表 | `Message[]` | `[]` |
| placeholder | 输入框占位文本 | `string` | `'请输入消息...'` |
| disabled | 是否禁用输入 | `boolean` | `false` |
| loading | 是否显示加载状态 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| send | 发送消息时触发 | `(message: string) => void` |
| retry | 重试消息时触发 | `(messageId: number) => void` |

### Message 类型

```typescript
interface Message {
  id: number
  type: 'user' | 'ai' | 'system'
  content: string
  timestamp?: number
  status?: 'sending' | 'sent' | 'failed'
}
```
