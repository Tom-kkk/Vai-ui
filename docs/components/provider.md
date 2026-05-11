# Provider 全局配置

`VaiProvider` 是根级配置提供者，通过 Vue `provide/inject` 向所有 Vai 子组件注入全局配置（主题、语言、请求函数）。

**无视觉输出**，仅透传 slot 内容。不使用 `VaiProvider` 时，所有子组件继续正常工作（使用内置默认值）。

## 基础用法

```vue
<template>
  <VaiProvider theme="dark" locale="en-US" :request="myRequest">
    <App />
  </VaiProvider>
</template>
```

## 自动跟随系统主题

```vue
<VaiProvider theme="auto">
  <App />
</VaiProvider>
```

`theme="auto"` 时，组件自动监听 `prefers-color-scheme` 媒体查询，随系统深色/浅色模式切换。卸载时自动清除监听，无内存泄漏。

:::demo
provider
:::

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `locale` | `'zh-CN' \| 'en-US'` | `'zh-CN'` | 全局语言，影响组件内置文案 |
| `theme` | `'light' \| 'dark' \| 'auto'` | `'light'` | 主题模式，设置 `document.documentElement.dataset.theme` |
| `request` | `Function \| null` | `null` | 全局请求函数，注入给 `VaiAiChat` 等需要发起对话请求的组件 |

## request 接口

```typescript
type RequestFunction = (
  messages: any[],
  callbacks: {
    onToken?: (token: string) => void   // 流式 token 回调
    onDone?: () => void                 // 完成回调
    onError?: (error: Error) => void    // 错误回调
  }
) => void
```

## 向下兼容

不包裹 `VaiProvider` 时，子组件通过 inject 获取如下默认配置：

```javascript
{ locale: 'zh-CN', theme: 'light', request: null }
```

现有代码无需任何改动即可正常使用。
