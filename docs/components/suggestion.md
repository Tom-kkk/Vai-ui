# Suggestion 快捷指令

常用于 AI 对话的快捷指令建议，便于快速选择预设指令。

<demo vue="../demos/suggestion.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| suggestions | 建议列表 | `SuggestionItem[]` | `[]` |
| max-show | 最大显示数量 | `number` | `6` |
| searchable | 是否可搜索 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 选择某项时触发 | `(item: SuggestionItem) => void` |
| search | 搜索时触发 | `(keyword: string) => void` |
