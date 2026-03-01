# Vai Site

基于 Vue 3 + Vite 的组件库演示网站

## 简介

Vai Site 是一个现代化的组件库演示项目，使用 Vue 3 和 Vite 构建，展示了 Vai 组件库的各种组件功能。

## 技术栈

- Vue 3.5
- Vite 6
- VitePress（文档站点）
- Workspace 架构

## 组件

目前包含以下组件：

- **VaiButton** - 按钮组件
- **VaiDatePicker** - 日期选择器
- **VaiAiChat** - AI 聊天组件

## 快速开始

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 开发模式

\`\`\`bash
npm run dev
\`\`\`

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

### 预览生产构建

\`\`\`bash
npm run preview
\`\`\`

## 项目结构

\`\`\`
vai-site/
├── packages/          # 组件包
│   ├── components/    # 组件库
│   └── theme/         # 主题配置
├── src/               # 源代码
├── docs/              # 文档
└── public/            # 静态资源
\`\`\`

## 工作区

本项目采用 npm workspaces 架构，组件和主题都在 packages 目录下独立管理。
