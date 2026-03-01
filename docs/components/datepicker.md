# DatePicker 日期选择器

日期与时间选择组件，支持日期、日期范围及日期时间等模式。

<demo vue="../demos/datepicker.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue / v-model | 选中值 | `string \| string[]` | — |
| type | 选择器类型 | `'date' \| 'range' \| 'datetime'` | `'date'` |
| placeholder | 占位文本 | `string` | `'请选择日期'` |
| format | 显示格式 | `string` | `'YYYY-MM-DD'` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 值变化时触发 | `(value: any) => void` |
| ok | 确认选择时触发 | `(value: any) => void` |
