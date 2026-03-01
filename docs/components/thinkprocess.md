# ThinkProcess 思考过程

展示 AI 思考过程的组件，支持步骤展示与折叠展开。

<demo vue="../demos/thinkprocess.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| steps | 思考步骤列表 | `Step[]` | `[]` |
| default-expanded | 是否默认展开 | `boolean` | `false` |
| collapsible | 是否可折叠 | `boolean` | `true` |
| show-duration | 是否显示执行时间 | `boolean` | `true` |
| max-height | 展开时的最大高度 | `string \| number` | `'400px'` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| expand | 展开/折叠时触发 | `(expanded: boolean) => void` |
| step-click | 点击步骤时触发 | `(step: Step) => void` |

### Step 类型

```typescript
interface Step {
  id: number | string
  title: string
  content: string
  status: 'pending' | 'processing' | 'completed' | 'error'
  duration?: string
  timestamp?: number
  details?: string
}
```
