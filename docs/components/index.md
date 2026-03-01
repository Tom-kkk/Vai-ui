# 组件总览

Vue3 AI UI 提供了 13 个核心组件，分为三大类别：AI 专属组件、基础组件和高级组件。

## 🤖 AI 专属组件（8个）

专为 AI 应用场景设计的交互组件

| 组件 | 描述 | 状态 |
|------|------|------|
| [AI Chat](./aichat.md) | AI 对话组件 | ✅ 已完成 |
| [Skeleton](./skeleton.md) | 骨架屏加载 | ✅ 已完成 |
| [TypingBubble](./typingbubble.md) | 打字气泡动画 | ✅ 已完成 |
| [ThinkProcess](./thinkprocess.md) | AI 思考过程展示 | ✅ 已完成 |
| [Attachments](./attachments.md) | 文件附件输入 | ✅ 已完成 |
| [Suggestion](./suggestion.md) | 快捷指令建议 | ✅ 已完成 |
| [FileCard](./filecard.md) | 文件卡片展示 | ✅ 已完成 |
| [CodeHighlighter](./codehighlighter.md) | 代码高亮显示 | ✅ 已完成 |

## 📦 基础组件（4个）

通用的 UI 基础组件

| 组件 | 描述 | 状态 |
|------|------|------|
| [Button](./button.md) | 按钮组件 | ✅ 已完成 |
| [Tree](./tree.md) | 树形控件 | ✅ 已完成 |
| [DatePicker](./datepicker.md) | 日期选择器 | ✅ 已完成 |
| [PageHeader](./pageheader.md) | 页头组件 | ✅ 已完成 |

## ⚡ 高级组件（1个）

性能优化的高级组件

| 组件 | 描述 | 状态 |
|------|------|------|
| [Virtual List](./virtuallist.md) | 虚拟列表（支持百万级数据） | ✅ 已完成 |

## 🚀 快速体验

### 基础使用

```vue
<template>
  <div>
    <!-- AI 组件示例 -->
    <vai-skeleton avatar :rows="4" />
    <vai-typing-bubble text="AI 正在思考..." />
    <vai-think-process :steps="steps" default-expanded />
    
    <!-- 基础组件示例 -->
    <vai-button type="primary" @click="handleClick">
      点击我
    </vai-button>
    
    <!-- 高级组件示例 -->
    <vai-virtual-list :items="largeData" :item-height="50" />
  </div>
</template>
```

### 引入组件库

```javascript
import { createApp } from 'vue'
import Vue3AIUI from 'vue3-ai-ui'
import 'vue3-ai-ui/dist/style.css'

const app = createApp(App)
app.use(Vue3AIUI)
app.mount('#app')
```

## 🎯 设计理念

Vue3 AI UI 参考了 Ant Design X 的设计理念，专注于 AI 应用场景：

1. **AI 优先** - 所有组件都考虑了 AI 交互的特殊需求
2. **完整生态** - 提供从基础到高级的完整组件体系
3. **性能至上** - 虚拟列表等技术确保大数据场景的性能
4. **易于使用** - 简洁的 API 设计，开箱即用

## 📊 组件对比

| 功能 | Vue3 AI UI | Ant Design X |
|------|------------|--------------|
| AI Chat | ✅ | ✅ |
| Skeleton | ✅ | ✅ |
| TypingBubble | ✅ | ✅ |
| ThinkProcess | ✅ | ✅ |
| Attachments | ✅ | ✅ |
| Suggestion | ✅ | ✅ |
| FileCard | ✅ | ✅ |
| CodeHighlighter | ✅ | ✅ |
| Virtual List | ✅ | ❌ |