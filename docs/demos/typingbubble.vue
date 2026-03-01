<template>
  <div class="doc">
    <h1>TypingBubble 打字气泡</h1>
    <p class="desc">AI 回复时的打字动画效果</p>
    
    <h2>基础用法</h2>
    <div class="demo">
      <vai-typing-bubble />
    </div>
    
    <h2>自定义文本</h2>
    <div class="demo">
      <vai-typing-bubble text="正在生成回复..." />
    </div>
    
    <h2>不同类型</h2>
    <div class="demo">
      <vai-typing-bubble type="primary" text="AI 思考中" />
      <vai-typing-bubble type="secondary" text="处理中..." />
    </div>
  </div>
</template>
<style scoped>@import './style.css';</style>
