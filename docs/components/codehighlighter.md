# CodeHighlighter 代码高亮

代码高亮显示组件，支持多种编程语言的语法高亮。

## 基础用法

<demo vue="../../packages/components/codehighlighter/index.vue" />

```vue
<template>
  <vai-code-highlighter 
    :code="code"
    language="javascript"
    theme="dark"
    :line-numbers="true"
    @copy="handleCopy"
  />
</template>

<script setup>
const code = `
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(result);
`

const handleCopy = (code) => {
  console.log('复制代码:', code)
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| code | 代码内容 | `string` | `-` |
| language | 编程语言 | `string` | `'javascript'` |
| theme | 主题 | `'light' \| 'dark'` | `'light'` |
| lineNumbers | 是否显示行号 | `boolean` | `false` |
| copyable | 是否可复制 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| copy | 复制事件 | `(code: string) => void` |
| ready | 高亮完成 | `(highlightedCode: string) => void` |

### 支持的语言

- javascript
- typescript
- python
- java
- cpp
- css
- html
- json
- xml
- sql
- shell