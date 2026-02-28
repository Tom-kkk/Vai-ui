<template>
  <div class="vai-think-process" :class="{ 'is-expanded': expanded }">
    <div class="think-header" @click="toggle">
      <span class="think-icon">🤔</span>
      <span class="think-title">{{ title }}</span>
      <span class="think-expand">{{ expanded ? '▼' : '▶' }}</span>
    </div>
    
    <transition name="think-expand">
      <div v-if="expanded" class="think-content">
        <div v-for="(step, index) in steps" :key="index" class="think-step" :class="{ 'is-active': step.status === 'active', 'is-done': step.status === 'done' }">
          <div class="step-icon">
            <span v-if="step.status === 'done'">✓</span>
            <span v-else-if="step.status === 'active'" class="loading">⟳</span>
            <span v-else>{{ index + 1 }}</span>
          </div>
          <div class="step-content">
            <div class="step-title">{{ step.title }}</div>
            <div v-if="step.description" class="step-description">{{ step.description }}</div>
          </div>
          <div v-if="step.time" class="step-time">{{ step.time }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'VaiThinkProcess',
  props: {
    title: { type: String, default: '思考过程' },
    steps: { type: Array, default: () => [] },
    defaultExpanded: { type: Boolean, default: false }
  },
  data() {
    return {
      expanded: this.defaultExpanded
    }
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style scoped>
.vai-think-process {
  border: 1px solid var(--vai-border-color-lighter);
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
}

.think-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  cursor: pointer;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  transition: background 0.3s;
}

.think-header:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
}

.think-icon {
  font-size: 18px;
}

.think-title {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: var(--vai-text-color-primary);
}

.think-expand {
  font-size: 12px;
  color: var(--vai-text-color-secondary);
  transition: transform 0.3s;
}

.is-expanded .think-expand {
  transform: rotate(0deg);
}

.think-content {
  padding: 16px;
  border-top: 1px solid var(--vai-border-color-lighter);
}

.think-step {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  position: relative;
}

.think-step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 15px;
  top: 40px;
  width: 2px;
  height: calc(100% - 20px);
  background: var(--vai-border-color-lighter);
}

.step-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--vai-fill-color-light);
  color: var(--vai-text-color-secondary);
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
}

.is-active .step-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.is-done .step-icon {
  background: var(--vai-color-success);
  color: #fff;
}

.step-icon .loading {
  display: inline-block;
  animation: spin 1s linear infinite;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--vai-text-color-primary);
  margin-bottom: 4px;
}

.step-description {
  font-size: 12px;
  color: var(--vai-text-color-secondary);
  line-height: 1.6;
}

.step-time {
  flex-shrink: 0;
  font-size: 12px;
  color: var(--vai-text-color-placeholder);
}

.think-expand-enter-active,
.think-expand-leave-active {
  transition: all 0.3s ease;
}

.think-expand-enter-from,
.think-expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.think-expand-enter-to,
.think-expand-leave-from {
  opacity: 1;
  max-height: 1000px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
