<template>
  <div class="vai-think-process" :class="{ 'is-expanded': expanded }">
    <div class="think-header" @click="toggle">
      <div class="think-header-left">
        <div class="think-icon-wrap">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <span class="think-title">{{ title }}</span>
        <span v-if="steps.length" class="think-badge">{{ steps.length }}</span>
      </div>
      <div class="think-chevron" :class="{ 'is-open': expanded }">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>

    <transition name="think-expand">
      <div v-if="expanded" class="think-content">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="think-step"
          :class="{ 'is-active': step.status === 'active', 'is-done': step.status === 'done' }"
        >
          <div class="step-track">
            <div class="step-node">
              <svg v-if="step.status === 'done'" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              <span v-else-if="step.status === 'active'" class="step-spinner"></span>
              <span v-else class="step-number">{{ index + 1 }}</span>
            </div>
            <div v-if="index < steps.length - 1" class="step-line"></div>
          </div>
          <div class="step-body">
            <div class="step-title">{{ step.title }}</div>
            <div v-if="step.description" class="step-description">{{ step.description }}</div>
            <div v-if="step.time" class="step-time">{{ step.time }}</div>
          </div>
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
  border: 1px solid var(--vai-border-color);
  border-radius: var(--vai-radius-lg);
  background: var(--vai-bg-base);
  overflow: hidden;
  font-family: var(--vai-font-family);
}

.think-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  background: var(--vai-gradient-primary-soft);
  transition: var(--vai-transition-fast);
  user-select: none;
}
.think-header:hover {
  background: linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.12) 100%);
}
.think-header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.think-icon-wrap {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vai-gradient-primary);
  border-radius: var(--vai-radius-sm);
  color: #fff;
  flex-shrink: 0;
}
.think-title {
  font-size: var(--vai-font-size-base);
  font-weight: 600;
  color: var(--vai-text-color-primary);
}
.think-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  font-size: 11px;
  font-weight: 600;
  background: var(--vai-color-primary-light-2);
  color: var(--vai-color-primary);
  border-radius: var(--vai-radius-full);
}
.think-chevron {
  color: var(--vai-text-color-tertiary);
  transition: transform 0.25s ease;
}
.think-chevron.is-open {
  transform: rotate(180deg);
}

.think-content {
  padding: 8px 16px 16px;
  border-top: 1px solid var(--vai-border-color);
}

.think-step {
  display: flex;
  gap: 12px;
  padding: 10px 0;
}

.step-track {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}
.step-node {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--vai-fill-color);
  border: 1.5px solid var(--vai-border-color);
  color: var(--vai-text-color-secondary);
  font-size: 11px;
  font-weight: 600;
  flex-shrink: 0;
  transition: var(--vai-transition-base);
}
.is-active .step-node {
  background: var(--vai-gradient-primary);
  border-color: transparent;
  color: #fff;
  box-shadow: var(--vai-shadow-primary-sm);
}
.is-done .step-node {
  background: var(--vai-color-success);
  border-color: transparent;
  color: #fff;
}
.step-line {
  width: 1.5px;
  flex: 1;
  min-height: 12px;
  background: var(--vai-border-color);
  margin: 4px 0;
}
.step-spinner {
  display: block;
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: step-spin 0.7s linear infinite;
}
.step-number {
  display: block;
}

.step-body {
  flex: 1;
  padding-top: 4px;
  min-width: 0;
}
.step-title {
  font-size: var(--vai-font-size-base);
  font-weight: 500;
  color: var(--vai-text-color-primary);
  line-height: 1.4;
  margin-bottom: 3px;
}
.is-active .step-title {
  color: var(--vai-color-primary);
}
.is-done .step-title {
  color: var(--vai-text-color-secondary);
}
.step-description {
  font-size: var(--vai-font-size-sm);
  color: var(--vai-text-color-secondary);
  line-height: var(--vai-line-height-base);
}
.step-time {
  display: inline-flex;
  margin-top: 4px;
  font-size: var(--vai-font-size-xs);
  color: var(--vai-text-color-tertiary);
  background: var(--vai-fill-color);
  padding: 1px 6px;
  border-radius: var(--vai-radius-xs);
}

.think-expand-enter-active,
.think-expand-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.think-expand-enter-from,
.think-expand-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@keyframes step-spin {
  to { transform: rotate(360deg); }
}
</style>
