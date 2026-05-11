# Sources 引用来源

`VaiSources` 展示 AI 回答的引用来源列表，默认折叠只显示前 N 条，点击可展开全部。自动获取网站 favicon，失败时降级为占位图标。

## 基础用法

:::demo
sources
:::

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `sources` | `Source[]` | `[]` | 来源数据列表 |
| `previewCount` | `number` | `3` | 默认展示条数，超出部分折叠 |
| `numbered` | `boolean` | `false` | 是否在卡片左侧显示编号 |

### Source

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | `string \| number` | 唯一标识（必填） |
| `title` | `string` | 来源标题（必填） |
| `url` | `string` | 来源 URL（必填） |
| `favicon` | `string` | 自定义 favicon URL，不提供时自动获取 |
| `snippet` | `string` | 摘要文本，展开后显示 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `source-click` | `source: Source` | 点击来源卡片时触发（已阻止默认跳转） |

## Favicon 说明

默认使用 Google S2 服务自动获取网站 favicon（`https://www.google.com/s2/favicons?domain=<hostname>&sz=32`）。

如需在生产环境替换为自托管服务，可通过 `:sources` 数据的 `favicon` 字段直接指定图片 URL，组件将优先使用 `favicon` 字段而非自动获取。

favicon 加载失败时自动降级显示通用文档图标，不会出现破碎图片。
