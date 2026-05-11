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
  gap: 10px;
  padding: 10px 16px;
  border-radius: var(--vai-radius-xl);
  background: var(--vai-gradient-primary);
  color: #fff;
  font-size: var(--vai-font-size-base);
  font-family: var(--vai-font-family);
  box-shadow: var(--vai-shadow-primary-sm);
}

.bubble-secondary {
  background: var(--vai-fill-color-light);
  color: var(--vai-text-color-secondary);
  border: 1px solid var(--vai-border-color);
  box-shadow: var(--vai-shadow-xs);
}

.bubble-animated {
  animation: bubble-float 2.4s ease-in-out infinite;
}

.typing-dots {
  display: flex;
  gap: 4px;
  align-items: center;
}

.dot {
  width: 7px;
  height: 7px;
  background: currentColor;
  border-radius: 50%;
  animation: dot-wave 1.4s ease-in-out infinite;
}

.dot:nth-child(2) { animation-delay: 0.16s; }
.dot:nth-child(3) { animation-delay: 0.32s; }

.typing-text {
  font-size: var(--vai-font-size-sm);
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.01em;
  opacity: 0.92;
}

@keyframes dot-wave {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-5px);
    opacity: 1;
  }
}

@keyframes bubble-float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-4px); }
}
</style>
