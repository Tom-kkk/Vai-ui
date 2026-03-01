# 组件总览

以下是 Vue3 AI UI 提供的所有组件，按类别分组展示。

## AI 专属组件 (8)

专为 AI 应用场景设计的交互组件。

- [AI Chat 对话组件](./aichat.md)
- [Skeleton 骨架屏](./skeleton.md)
- [TypingBubble 打字气泡](./typingbubble.md)
- [ThinkProcess 思考过程](./thinkprocess.md)
- [Attachments 附件输入](./attachments.md)
- [Suggestion 快捷指令](./suggestion.md)
- [FileCard 文件卡片](./filecard.md)
- [CodeHighlighter 代码高亮](./codehighlighter.md)

## 基础组件 (4)

通用 UI 基础组件。

- [Button 按钮](./button.md)
- [Tree 树形控件](./tree.md)
- [DatePicker 日期选择器](./datepicker.md)
- [PageHeader 页头组件](./pageheader.md)

## 高级组件 (1)

面向性能与大数据场景的组件。

- [Virtual List 虚拟列表](./virtuallist.md)

---

### 快速引入

```javascript
import { createApp } from 'vue'
import Vue3AIUI from 'vue3-ai-ui'
import 'vue3-ai-ui/dist/style.css'

const app = createApp(App)
app.use(Vue3AIUI)
app.mount('#app')
```
