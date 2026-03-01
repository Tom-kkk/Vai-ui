---
layout: home

hero:
  name: "Vue3 AI UI"
  text: "AI 专属组件库"
  tagline: 类似 Ant Design X 的 AI 驱动企业级组件库
  image:
    src: /logo.jpg
    alt: Vue3 AI UI
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 组件列表
      link: /components

features:
  - title: 🤖 AI 专属组件
    details: 8个专为AI应用设计的组件，包括对话、思考过程、打字动画等，完美适配AI交互场景
  - title: 📦 企业级基础组件
    details: 4个高质量基础组件，包括按钮、树形控件、日期选择器和页头组件，满足日常开发需求
  - title: ⚡ 高级性能组件
    details: 虚拟列表支持百万级数据渲染，极致性能优化，让大数据展示游刃有余
  - title: 🎨 统一设计语言
    details: 参考Ant Design X设计理念，提供完整的设计系统，确保视觉一致性和用户体验
  - title: 🚀 开箱即用
    details: 基于Vue 3.4+开发，支持TypeScript，提供完整的文档和示例，快速集成到项目中
  - title: 📱 响应式设计
    details: 完美适配各种设备和屏幕尺寸，确保在不同平台都有出色的展示效果
---
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 添加一些动态效果
  const hero = document.querySelector('.VPHero')
  if (hero) {
    hero.classList.add('animate-fade-in')
  }
})
</script>

<style>
.VPHero {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.VPFeature {
  transition: all 0.3s ease;
}

.VPFeature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.VPHero .name {
  background: linear-gradient(120deg, #42d392 0%, #647eff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.VPHero .text {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.VPHero .tagline {
  color: var(--vp-c-text-2);
  font-size: 1.2em;
  line-height: 1.5;
}

.VPButton {
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.VPButton:hover {
  transform: scale(1.05);
}

.VPFeatures {
  margin-top: 2rem;
}

.VPFeature h2 {
  font-size: 1.2em;
  margin-bottom: 0.5rem;
  color: var(--vp-c-brand);
}

.VPFeature p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
