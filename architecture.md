# Architecture — Vai-ui

> 本文档是 Vai-ui 项目的全局架构上下文，供后续所有变更的设计（design.md）和技术方案（TRD）引用。
> 生成时间：2026-05-11

---

## 1. 项目定位

`Vai-ui`（npm 包名 `@tom1612/vai-ui`）是一个基于 **Vue 3 + Vite** 的 **AI 专属 UI 组件库**，面向需要快速搭建 AI 对话界面的前端开发者。定位类似 Ant Design X（React 生态），但服务于 Vue 3 生态。

---

## 2. Monorepo 结构

```
Vai-ui/
├── packages/
│   ├── components/          # 核心组件包，发布为 @tom1612/vai-ui
│   │   ├── <component>/     # 每个组件一个目录，入口为 index.vue
│   │   ├── index.js         # 统一导出 + Vue Plugin install()
│   │   ├── index.d.ts       # TypeScript 类型声明
│   │   ├── vite.config.js   # 库模式构建：ESM + CJS 双输出
│   │   └── package.json     # 发布配置
│   └── theme/
│       ├── index.css        # CSS 变量设计令牌（Design Tokens）
│       └── package.json
├── src/                     # 本地调试用 App（不发布）
│   ├── App.vue
│   └── main.js
├── docs/                    # VitePress 文档站（npm workspace）
│   ├── .vitepress/
│   │   ├── config.mjs       # 文档站导航/侧边栏配置
│   │   └── theme/           # 自定义主题注入
│   ├── components/          # 各组件 API 文档页（.md）
│   ├── demos/               # 文档内嵌交互 Demo（.vue）
│   └── guide/               # 快速开始指南
├── package.json             # npm workspaces 根配置
└── vite.config.js           # 调试用 Vite 配置
```

---

## 3. 分层架构

本项目为**纯前端组件库**，不涉及后端，采用以下分层：

```
┌─────────────────────────────────────────────────────┐
│  表现层（Presentation Layer）                         │
│  packages/components/<component>/index.vue           │
│  · 组件模板、样式（Scoped CSS）、组件级逻辑           │
├─────────────────────────────────────────────────────┤
│  主题层（Theme Layer）                                │
│  packages/theme/index.css                            │
│  · CSS 变量设计令牌（颜色/间距/圆角/阴影）           │
│  · 暗色主题切换（[data-theme="dark"]）               │
├─────────────────────────────────────────────────────┤
│  类型层（Type Layer）                                 │
│  packages/components/index.d.ts                      │
│  · 组件 Props TypeScript 类型声明                    │
├─────────────────────────────────────────────────────┤
│  导出层（Export Layer）                               │
│  packages/components/index.js                        │
│  · Vue Plugin install()                              │
│  · 具名导出各组件                                    │
├─────────────────────────────────────────────────────┤
│  文档层（Documentation Layer）                        │
│  docs/ (VitePress)                                   │
│  · 组件 API 文档 + 交互 Demo                         │
└─────────────────────────────────────────────────────┘
```

---

## 4. 组件分类

### 4.1 AI 专属组件（8个）

| 组件 | 目录 | 功能 |
|------|------|------|
| `VaiAiChat` | `aichat/` | AI 聊天对话框（消息历史 + 输入框集成体） |
| `VaiTypingBubble` | `typingbubble/` | 三点打字动画气泡 |
| `VaiThinkProcess` | `thinkprocess/` | AI 思考步骤展示（可折叠步骤链） |
| `VaiSkeleton` | `skeleton/` | 骨架屏加载占位 |
| `VaiAttachments` | `attachments/` | 文件附件上传选择器 |
| `VaiSuggestion` | `suggestion/` | 快捷建议/提示词列表 |
| `VaiFileCard` | `filecard/` | 文件卡片展示（含下载/进度/标签） |
| `VaiCodeHighlighter` | `codehighlighter/` | 代码语法高亮展示（当前：自实现正则） |

### 4.2 基础组件（4个）

| 组件 | 目录 | 功能 |
|------|------|------|
| `VaiButton` | `button/` | 多类型/尺寸按钮，loading 态 |
| `VaiDatePicker` | `datepicker/` | 日历面板日期选择，v-model |
| `VaiTree` | `tree/` | 树形结构展示（含 TreeNode.vue） |
| `VaiPageHeader` | `pageheader/` | 页头（返回 + 标题 + 插槽） |

### 4.3 高级组件（1个）

| 组件 | 目录 | 功能 |
|------|------|------|
| `VaiVirtualList` | `virtuallist/` | 固定行高虚拟滚动列表 |

---

## 5. 构建约定

- **库模式构建**：`packages/components/vite.config.js` 使用 Vite `lib` 模式
- **双格式输出**：`dist/index.mjs`（ESM）+ `dist/index.cjs`（CJS）
- **外部化**：Vue 作为 `peerDependency` 不打包进产物
- **类型**：`index.d.ts` 手动维护，每个组件声明为 `DefineComponent<any, any, any>`（待精确化）

---

## 6. 编码约定

| 约定 | 当前状态 |
|------|---------|
| **组件 API 风格** | Options API（全部） |
| **样式方案** | Scoped CSS + CSS 变量（`--vai-*`） |
| **组件命名** | PascalCase：`VaiXxx`，文件名：`index.vue` |
| **事件命名** | `kebab-case`：`update:modelValue`、`change` |
| **组件注册** | `name` 字段手动声明，与 `index.js` 对应 |
| **TypeScript** | 基础声明（`any`），无精确类型 |

---

## 7. 设计令牌（CSS 变量体系）

```css
/* 品牌色（Element Plus 同色系） */
--vai-color-primary: #409eff
--vai-color-success / warning / danger / info

/* 文本三级 */
--vai-text-color-primary / regular / secondary / placeholder

/* 边框三级 */
--vai-border-color / light / lighter

/* 填充三级 */
--vai-fill-color / light / blank

/* 阴影 */
--vai-box-shadow
```

暗色主题通过 `[data-theme="dark"]` 覆盖部分变量。

---

## 8. 已知风险与技术债

| 问题 | 位置 | 严重性 |
|------|------|--------|
| `document click` 监听未清除 | `datepicker/index.vue` mounted | 🔴 高（内存泄漏） |
| 语法高亮用脆弱正则实现 | `codehighlighter/index.vue` | 🟡 中（功能不可靠） |
| AiChat 无真实流式接口 | `aichat/index.vue` | 🔴 高（无法对接业务） |
| Markdown 渲染仅支持粗体/斜体/行内代码 | `aichat/index.vue` render() | 🔴 高（AI 场景需要完整 MD） |
| 所有组件类型声明为 `any` | `index.d.ts` | 🟡 中（TypeScript 用户体验差） |
| 全部使用 Options API | 所有组件 | 🟡 中（无法暴露 composable） |
| 无 ARIA 无障碍支持 | 全部组件 | 🟡 中 |
| 硬编码中文文案 | `aichat/`、`attachments/` 等 | 🟢 低（暂不影响功能） |
