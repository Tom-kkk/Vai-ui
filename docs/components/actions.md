# Actions 消息操作栏

`VaiActions` 是附着于消息气泡下方的轻量操作工具栏，提供复制、点赞、点踩、重试等快捷操作。完全受控，操作状态由外部宿主管理。

## 基础用法

:::demo
actions
:::

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `messageId` | `string \| number` | `null` | 消息唯一标识，随 `action` 事件一起发出 |
| `items` | `ActionItem[]` | `[]` | 自定义操作项，追加到预置项之后 |
| `placement` | `'hover' \| 'always'` | `'hover'` | 显示时机：`hover` 悬停时显示，`always` 始终显示 |
| `liked` | `boolean` | `false` | 受控：点赞激活态 |
| `disliked` | `boolean` | `false` | 受控：点踩激活态 |

### ActionItem

| 字段 | 类型 | 说明 |
|------|------|------|
| `type` | `string` | 操作类型标识，预置值：`copy` / `like` / `dislike` / `retry` / `delete` |
| `icon` | `string` | SVG 字符串，可选 |
| `label` | `string` | tooltip 文案，可选 |
| `text` | `string` | 复制操作时传入的文本内容 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `action` | `{ type: string, messageId?: string \| number }` | 点击操作项时触发；`type` 为操作类型，复制失败时 `type='copy-failed'` |

## 预置操作

默认展示 `copy`、`like`、`dislike`、`retry` 四个操作按钮。通过 `:items` 可在末尾追加自定义按钮。

## 说明

- 复制操作优先使用 `navigator.clipboard.writeText`，不支持时自动降级为 `document.execCommand('copy')`
- 两种方式均失败时发出 `action({ type: 'copy-failed' })` 事件，宿主可展示 Toast 提示
- `liked` / `disliked` 为受控属性，需宿主监听 `action` 事件后自行更新
