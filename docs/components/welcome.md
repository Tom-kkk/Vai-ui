# Welcome 欢迎页

`VaiWelcome` 是 AI 对话界面无消息时的引导入口页，展示品牌信息和快捷 Prompt 卡片。纯展示组件，附带优雅的进入动画。

## 基础用法

<demo vue="../demos/welcome.vue" />

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `title` | `string` | `''` | 标题文字 |
| `description` | `string` | `''` | 描述文字 |
| `icon` | `string` | `''` | 图标：URL 字符串（`http://` / `data:`）渲染为 `<img>`，其他渲染为内联 SVG |
| `prompts` | `WelcomePrompt[]` | `[]` | 快捷 Prompt 卡片列表 |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | 布局方向 |

### WelcomePrompt

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | `string` | 卡片标题（必填） |
| `description` | `string` | 卡片描述（可选） |
| `icon` | `string` | 卡片图标 SVG 字符串（可选） |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `prompt-select` | `prompt: WelcomePrompt` | 点击 Prompt 卡片时触发 |

## Slots

| 插槽名 | 说明 |
|--------|------|
| `default` | 自定义内容，插入在 Prompt 网格上方 |

## 注意

- `icon` 传入 SVG 字符串时，内容将通过 `v-html` 直接渲染，请确保来源可信
- 进入动画在组件挂载后自动触发，无需额外配置
