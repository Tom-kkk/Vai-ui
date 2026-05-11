<template>
  <div class="demo-wrap">
    <div class="demo-section">
      <div class="demo-label">各 role 气泡</div>
      <VaiBubble role="assistant" content="你好！我是 AI 助手，有什么可以帮助你的？" :timestamp="now" />
      <VaiBubble role="user" content="帮我写一段 JavaScript 代码。" :timestamp="now" />
      <VaiBubble
        role="assistant"
        content="好的，这是一个排序示例：\n```javascript\nconst arr = [3, 1, 4, 1, 5, 9]\narr.sort((a, b) => a - b)\nconsole.log(arr) // [1, 1, 3, 4, 5, 9]\n```"
        :timestamp="now"
      />
    </div>

    <div class="demo-section">
      <div class="demo-label">各 status 状态</div>
      <VaiBubble role="assistant" content="" status="loading" />
      <VaiBubble role="assistant" content="**正在流式输出**中..." status="streaming" />
      <VaiBubble role="assistant" content="请求失败，请稍后重试。" status="error" />
    </div>

    <div class="demo-section">
      <div class="demo-label">自定义 avatar / footer slot</div>
      <VaiBubble role="assistant" content="使用了自定义头像和底部操作区。" :timestamp="now">
        <template #avatar>
          <div class="custom-avatar">🤖</div>
        </template>
        <template #footer>
          <div class="bubble-actions">
            <button class="action-btn">👍</button>
            <button class="action-btn">👎</button>
            <button class="action-btn">📋 复制</button>
          </div>
        </template>
      </VaiBubble>
    </div>
  </div>
</template>

<script setup>
import { VaiBubble } from '../../packages/components'

const now = new Date()
</script>

<style scoped>
.demo-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 8px 0;
}
.demo-section {
  display: flex;
  flex-direction: column;
}
.demo-label {
  font-size: 12px;
  color: var(--vp-c-text-2, #999);
  margin-bottom: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.custom-avatar {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 6px;
  background: #f0f4ff;
}
.bubble-actions {
  display: flex;
  gap: 6px;
  margin-top: 2px;
}
.action-btn {
  padding: 3px 8px;
  font-size: 12px;
  border: 1px solid var(--vai-border-color, #e5e7eb);
  border-radius: 4px;
  background: none;
  cursor: pointer;
  color: var(--vai-text-color-secondary, #6b7280);
  transition: all 0.2s;
}
.action-btn:hover {
  background: var(--vai-fill-color, #f3f4f6);
}
</style>
