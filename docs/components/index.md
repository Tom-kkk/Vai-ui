# 组件总览

Vai-ui 提供 **21 个**开箱即用的组件，涵盖 AI 对话全流程场景及通用基础场景。

## 快速引入

```bash
npm install @tom1612/vai-ui
```

```javascript
import { createApp } from 'vue'
import VaiUi from '@tom1612/vai-ui'
import '@tom1612/vai-ui/dist/index.css'

createApp(App).use(VaiUi).mount('#app')
```

---

## AI 专属组件 (16)

专为 AI 对话场景设计，覆盖消息展示、交互操作、会话管理等全流程。

| 组件 | 说明 | 文档 |
|------|------|------|
| `VaiAiChat` | AI 聊天对话框（消息历史 + 输入框一体化） | [查看](./aichat.md) |
| `VaiBubble` | 单条消息气泡，支持 Markdown、多状态、自定义头像 | [查看](./bubble.md) |
| `VaiBubbleList` | 消息列表容器，支持自动滚底 | [查看](./bubble-list.md) |
| `VaiSender` | 消息输入框，支持附件、快捷键 | [查看](./sender.md) |
| `VaiTypingBubble` | 三点打字动画，流式输出等待态 | [查看](./typingbubble.md) |
| `VaiThinkProcess` | AI 思考步骤展示，可折叠步骤链 | [查看](./thinkprocess.md) |
| `VaiSkeleton` | 骨架屏加载占位 | [查看](./skeleton.md) |
| `VaiAttachments` | 文件附件选择器 | [查看](./attachments.md) |
| `VaiSuggestion` | 快捷建议 / 提示词列表 | [查看](./suggestion.md) |
| `VaiFileCard` | 文件卡片，支持下载、进度、标签 | [查看](./filecard.md) |
| `VaiCodeHighlighter` | 代码语法高亮展示 | [查看](./codehighlighter.md) |
| `VaiActions` | 消息操作栏（复制、点赞、点踩、重试） | [查看](./actions.md) |
| `VaiConversations` | 侧边栏会话历史列表 | [查看](./conversations.md) |
| `VaiWelcome` | 欢迎引导页，展示品牌信息和快捷 Prompt | [查看](./welcome.md) |
| `VaiSources` | AI 回答引用来源列表 | [查看](./sources.md) |
| `VaiProvider` | 全局配置提供者（语言、主题） | [查看](./provider.md) |

---

## 基础组件 (4)

通用 UI 基础组件，满足日常开发需求。

| 组件 | 说明 | 文档 |
|------|------|------|
| `VaiButton` | 多类型、多尺寸按钮，支持 loading 态 | [查看](./button.md) |
| `VaiTree` | 树形结构展示 | [查看](./tree.md) |
| `VaiDatePicker` | 日历面板日期选择，v-model | [查看](./datepicker.md) |
| `VaiPageHeader` | 页头（返回 + 标题 + 插槽） | [查看](./pageheader.md) |

---

## 高级组件 (1)

面向性能与大数据场景的组件。

| 组件 | 说明 | 文档 |
|------|------|------|
| `VaiVirtualList` | 固定行高虚拟滚动列表，支持百万级数据 | [查看](./virtuallist.md) |
