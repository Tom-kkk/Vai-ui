import { defineConfig } from "vitepress";

import { vitepressDemoPlugin } from "vitepress-demo-plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue3 AI UI",
  description: "AI 专属组件库 - 类似 Ant Design X 的 AI 驱动企业级组件库",

  head: [
    // 替换浏览器标签页图标
    ["link", { rel: "icon", href: "/../logo.png" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/getting-started" },
      { text: "组件", link: "/components/" },
    ],

    sidebar: [
      {
        text: "开始",
        items: [{ text: "快速开始", link: "/guide/getting-started" }],
      },
      {
        text: "组件",
        items: [
          { text: "组件总览", link: "/components/" },
          {
            text: "AI 专属组件",
            items: [
              { text: "AI Chat 对话组件", link: "/components/aichat" },
              { text: "Skeleton 骨架屏", link: "/components/skeleton" },
              {
                text: "TypingBubble 打字气泡",
                link: "/components/typingbubble",
              },
              {
                text: "ThinkProcess 思考过程",
                link: "/components/thinkprocess",
              },
              { text: "Attachments 附件输入", link: "/components/attachments" },
              { text: "Suggestion 快捷指令", link: "/components/suggestion" },
              { text: "FileCard 文件卡片", link: "/components/filecard" },
              {
                text: "CodeHighlighter 代码高亮",
                link: "/components/codehighlighter",
              },
            ],
          },
          {
            text: "基础组件",
            items: [
              { text: "Button 按钮", link: "/components/button" },
              { text: "Tree 树形控件", link: "/components/tree" },
              { text: "DatePicker 日期选择器", link: "/components/datepicker" },
              { text: "PageHeader 页头组件", link: "/components/pageheader" },
            ],
          },
          {
            text: "高级组件",
            items: [
              {
                text: "Virtual List 虚拟列表",
                link: "/components/virtuallist",
              },
            ],
          },
        ],
      },
    ],

    footer: {
      message: "基于 Vue 3.4+ 构建的 AI 专属组件库",
    },

    search: {
      provider: "local",
    },
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin);
    },
  },
});
