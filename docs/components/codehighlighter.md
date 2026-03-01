# CodeHighlighter 代码高亮

代码高亮显示组件，支持多种编程语言与主题。

<demo vue="../demos/codehighlighter.vue" />

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| code | 代码内容 | `string` | — |
| language | 编程语言 | `string` | `'javascript'` |
| theme | 主题 | `'light' \| 'dark'` | `'light'` |
| line-numbers | 是否显示行号 | `boolean` | `false` |
| copyable | 是否可复制 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| copy | 复制时触发 | `(code: string) => void` |
| ready | 高亮完成时触发 | `(highlightedCode: string) => void` |

### 支持的语言

javascript、typescript、python、java、cpp、css、html、json、xml、sql、shell
