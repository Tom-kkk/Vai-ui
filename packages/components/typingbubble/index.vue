<template>
  <div class="vai-typing-bubble" :class="[`bubble-${type}`, { 'bubble-animated': animated }]">
    <div class="typing-dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <span v-if="text" class="typing-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'VaiTypingBubble',
  props: {
    type: { type: String, default: 'primary' }, // primary, secondary
    text: { type: String, default: 'AI 正在思考...' },
    animated: { type: Boolean, default: true }
  }
}
</script>

<style scoped>
.vai-typing-bubble {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.bubble-secondary {
  background: #f5f7fa;
  color: var(--vai-text-color-regular);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.bubble-animated {
  animation: bubble-float 2s ease-in-out infinite;
}

.typing-dots {
  display: flex;
  gap: 4px;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  background: currentColor;
  border-radius: 50%;
  opacity: 0.6;
  animation: dot-pulse 1.4s ease-in-out infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

.typing-text {
  font-weight: 500;
  white-space: nowrap;
}

@keyframes dot-pulse {
  0%, 60%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  30% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bubble-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
</style>
