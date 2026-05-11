---
layout: home

hero:
  name: "Vai-ui"
  text: "Vue 3 AI 组件库"
  tagline: 专为 AI 对话场景打造 · 21 个开箱即用的组件 · 快速构建智能对话界面
  image:
    src: /logo.jpg
    alt: Vai-ui
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 组件列表
      link: /components/

features:
  - icon: 🤖
    title: AI 场景优先
    details: 16 个专属 AI 组件，覆盖消息气泡、流式打字、思考过程、引用来源、会话列表等对话全流程，开箱即用。
  - icon: 🎯
    title: 完全受控
    details: 所有状态由外部驱动，无内置请求逻辑，轻松对接 OpenAI、Claude、自建 LLM 等任意 AI 接口。
  - icon: 🎨
    title: 主题定制
    details: 基于 CSS 变量的设计令牌体系，一键切换暗色模式，支持品牌色覆盖，满足企业级定制需求。
  - icon: ⚡
    title: 极致性能
    details: 虚拟列表支持百万级数据渲染，流式消息增量更新，骨架屏与懒加载让 AI 等待体验丝滑流畅。
  - icon: 📦
    title: 开箱即用
    details: 一行代码全局注册，ESM / CJS 双格式输出，支持按需引入，TypeScript 类型声明随包附带。
  - icon: 🔌
    title: Provider 配置
    details: 通过 VaiProvider 统一管理语言（中 / 英）和主题，无需逐组件配置，全局一致。
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const hero = document.querySelector('.VPHero')
  if (hero) hero.classList.add('vai-hero-animate')
})
</script>

<style>
.VPHero {
  animation: vaiFadeUp 0.7s ease both;
}

@keyframes vaiFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.VPFeature {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.VPFeature:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.VPHero .name {
  background: linear-gradient(135deg, #1677ff 0%, #722ed1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.VPButton {
  border-radius: 8px;
  font-weight: 500;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.VPButton:hover {
  transform: scale(1.04);
}
</style>
