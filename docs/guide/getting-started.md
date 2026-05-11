# 快速开始

快速上手 Vai-ui 组件库。

## 环境要求

- Vue 3.4+
- Node.js 16+
- 现代浏览器（Chrome / Firefox / Safari / Edge）

## 安装

```bash
# npm
npm install @tom1612/vai-ui

# yarn
yarn add @tom1612/vai-ui

# pnpm
pnpm add @tom1612/vai-ui
```

## 基础使用

### 全局注册

在项目入口文件中一次性注册所有组件：

```javascript
import { createApp } from 'vue'
import VaiUi from '@tom1612/vai-ui'
import '@tom1612/vai-ui/dist/index.css'
import App from './App.vue'

createApp(App).use(VaiUi).mount('#app')
```

### 按需引入

只引入需要的组件，减少打包体积：

```javascript
import { VaiBubble, VaiBubbleList, VaiSender } from '@tom1612/vai-ui'
import '@tom1612/vai-ui/dist/index.css'
```

## 第一个示例

下面是一个基于 **VaiAiChat** 组件的智能对话示例，可直接体验流式对话与 Markdown 展示。

<demo vue="../demos/aichat.vue" />

## 主题定制

### CSS 变量

Vai-ui 使用 CSS 变量管理主题，可通过覆盖变量定制样式：

```css
:root {
  /* 品牌色 */
  --vai-color-primary: #1677ff;
  --vai-color-success: #52c41a;
  --vai-color-warning: #faad14;
  --vai-color-danger:  #ff4d4f;

  /* 文本三级 */
  --vai-text-color-primary:     #1a1a1a;
  --vai-text-color-regular:     #333;
  --vai-text-color-secondary:   #8c8c8c;
  --vai-text-color-placeholder: #bfbfbf;

  /* 边框 */
  --vai-border-color:       #d9d9d9;
  --vai-border-color-light: #e8e8e8;

  /* 圆角 */
  --vai-radius-sm: 4px;
  --vai-radius-md: 6px;
  --vai-radius-lg: 8px;

  /* 阴影 */
  --vai-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}
```

### 暗色主题

```css
[data-theme="dark"] {
  --vai-text-color-primary:   #f0f0f0;
  --vai-text-color-secondary: #8c8c8c;
  --vai-border-color:         #434343;
  --vai-fill-color:           #1f1f1f;
  --vai-fill-color-light:     #2a2a2a;
}
```

切换暗色模式只需在 `<html>` 上添加属性：

```javascript
document.documentElement.setAttribute('data-theme', 'dark')
```

## 下一步

- 查看 [组件总览](/components/) 了解全部 21 个组件
- 在各组件文档中查看 **API** 表格了解属性与事件说明
