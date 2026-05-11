# Conversations 会话列表

`VaiConversations` 是侧边栏会话历史列表组件，类似 ChatGPT 左侧边栏。完全受控，列表数据由 `:items` prop 驱动，所有增删改操作通过事件上报给宿主。

## 基础用法

<demo vue="../demos/conversations.vue" />

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `items` | `ConversationItem[]` | `[]` | 会话列表数据 |
| `activeId` | `string \| number` | `null` | 当前激活的会话 ID（受控） |
| `searchable` | `boolean` | `false` | 是否显示搜索框 |
| `showNewButton` | `boolean` | `true` | 是否显示「新建对话」按钮 |

### ConversationItem

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | `string \| number` | 唯一标识（必填） |
| `title` | `string` | 会话标题（必填） |
| `time` | `string` | 显示用时间字符串，由宿主格式化 |
| `active` | `boolean` | 激活态（与 `activeId` prop 二选一） |
| `pinned` | `boolean` | 是否置顶 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `select` | `id: string \| number` | 点击会话项时触发 |
| `new` | — | 点击「新建对话」按钮时触发 |
| `rename` | `id, newTitle: string` | 重命名确认后触发 |
| `delete` | `id: string \| number` | 点击删除菜单项后触发 |
| `pin` | `id, pinned: boolean` | 置顶/取消置顶后触发 |

## 功能说明

- **搜索**：启用 `searchable` 后，搜索词实时过滤列表，匹配文字高亮显示（内置 XSS 防护）
- **置顶分组**：`pinned: true` 的会话展示在「已置顶」分组，其余在「最近」分组
- **右键菜单**：右键点击或悬停时点击「…」图标弹出操作菜单（重命名、置顶、删除）
- **重命名**：内联 input 编辑，回车/失焦确认，ESC 取消
