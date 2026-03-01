# 快速开始

快速开始使用 Vue3 AI UI 组件库。

## 安装

### 环境要求

- Vue 3.4+
- Node.js 16+
- 现代浏览器

### 安装组件库

```bash
# 使用 npm
npm install vue3-ai-ui

# 使用 yarn
yarn add vue3-ai-ui

# 使用 pnpm
pnpm add vue3-ai-ui
```

## 基础使用

### 1. 完整引入

```javascript
import { createApp } from 'vue'
import Vue3AIUI from 'vue3-ai-ui'
import 'vue3-ai-ui/dist/style.css'

const app = createApp(App)
app.use(Vue3AIUI)
app.mount('#app')
```

### 2. 按需引入

```javascript
import { createApp } from 'vue'
import { 
  VaiAichat, 
  VaiSkeleton, 
  VaiTypingBubble,
  VaiThinkProcess 
} from 'vue3-ai-ui'
import 'vue3-ai-ui/dist/style.css'

const app = createApp(App)

app.component('vai-aichat', VaiAichat)
app.component('vai-skeleton', VaiSkeleton)
app.component('vai-typing-bubble', VaiTypingBubble)
app.component('vai-think-process', VaiThinkProcess)

app.mount('#app')
```

## 第一个示例

下面是一个基于 **AI Chat** 组件的智能对话示例，可直接体验流式对话与 Markdown 展示。

<demo vue="../demos/aichat.vue" />

## 主题定制

### CSS 变量

Vue3 AI UI 使用 CSS 变量来管理主题，你可以通过覆盖这些变量来定制主题：

```css
:root {
  /* 主色调 */
  --vai-primary-color: #1890ff;
  --vai-success-color: #52c41a;
  --vai-warning-color: #faad14;
  --vai-error-color: #ff4d4f;
  
  /* 文本颜色 */
  --vai-text-color: #333;
  --vai-text-color-secondary: #666;
  --vai-text-color-disabled: #999;
  
  /* 边框和背景 */
  --vai-border-color: #d9d9d9;
  --vai-background-color: #fff;
  --vai-background-color-light: #fafafa;
  
  /* 圆角 */
  --vai-border-radius: 6px;
  --vai-border-radius-sm: 4px;
  --vai-border-radius-lg: 8px;
  
  /* 阴影 */
  --vai-shadow: 0 2px 8px rgba(0,0,0,0.15);
  --vai-shadow-sm: 0 2px 4px rgba(0,0,0,0.12);
}
```

### 暗色主题

```css
:root[data-theme="dark"] {
  --vai-text-color: #fff;
  --vai-text-color-secondary: #ccc;
  --vai-border-color: #434343;
  --vai-background-color: #141414;
  --vai-background-color-light: #1f1f1f;
}
```

## 下一步

- 查看 [组件列表](/components/) 了解所有可用组件
- 在各组件文档中查看 **API** 表格了解属性与事件说明