<template>
  <button
    :class="classList"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="loading"></span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VaiButton',
  props: {
    type: { type: String, default: 'default' },
    size: { type: String, default: 'default' },
    disabled: Boolean,
    loading: Boolean
  },
  computed: {
    classList() {
      return [
        'vai-btn',
        `vai-btn-${this.type}`,
        `vai-btn-${this.size}`,
        { 'is-disabled': this.disabled, 'is-loading': this.loading }
      ]
    }
  },
  methods: {
    handleClick(e) {
      if (!this.disabled && !this.loading) {
        this.$emit('click', e)
      }
    }
  }
}
</script>

<style scoped>
.vai-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 18px;
  font-size: var(--vai-font-size-base);
  font-family: var(--vai-font-family);
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  background: var(--vai-bg-base);
  border: 1px solid var(--vai-border-color);
  border-radius: var(--vai-radius-sm);
  color: var(--vai-text-color-regular);
  transition: var(--vai-transition-fast);
  outline: none;
  user-select: none;
  white-space: nowrap;
  letter-spacing: 0.01em;
}
.vai-btn:hover {
  color: var(--vai-color-primary);
  border-color: var(--vai-color-primary);
  background: var(--vai-color-primary-light-1);
}
.vai-btn:active {
  transform: scale(0.98);
}
.vai-btn-primary {
  background: var(--vai-gradient-primary);
  color: #fff;
  border-color: transparent;
  box-shadow: var(--vai-shadow-primary-sm);
}
.vai-btn-primary:hover {
  background: linear-gradient(135deg, #4096ff 0%, #9254de 100%);
  color: #fff;
  border-color: transparent;
  box-shadow: var(--vai-shadow-primary);
}
.vai-btn-success {
  background: var(--vai-color-success);
  color: #fff;
  border-color: transparent;
}
.vai-btn-success:hover {
  background: #059669;
  color: #fff;
  border-color: transparent;
}
.vai-btn-warning {
  background: var(--vai-color-warning);
  color: #fff;
  border-color: transparent;
}
.vai-btn-warning:hover {
  background: #d97706;
  color: #fff;
  border-color: transparent;
}
.vai-btn-danger {
  background: var(--vai-color-danger);
  color: #fff;
  border-color: transparent;
}
.vai-btn-danger:hover {
  background: #dc2626;
  color: #fff;
  border-color: transparent;
}
.vai-btn-info {
  background: var(--vai-color-info);
  color: #fff;
  border-color: transparent;
}
.vai-btn-info:hover {
  background: #7c3aed;
  color: #fff;
  border-color: transparent;
}
.vai-btn-large {
  padding: 11px 24px;
  font-size: var(--vai-font-size-lg);
  border-radius: var(--vai-radius-md);
}
.vai-btn-small {
  padding: 5px 12px;
  font-size: var(--vai-font-size-sm);
  border-radius: var(--vai-radius-xs);
}
.vai-btn.is-disabled {
  cursor: not-allowed;
  opacity: 0.45;
  pointer-events: none;
}
.vai-btn.is-loading {
  cursor: wait;
}
.loading {
  display: inline-flex;
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: btn-spin 0.7s linear infinite;
}
@keyframes btn-spin {
  to { transform: rotate(360deg); }
}
</style>
