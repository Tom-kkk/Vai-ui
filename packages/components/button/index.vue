<template>
  <button
    :class="classList"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="loading">⟳</span>
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
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: #fff;
  border: 1px solid var(--vai-border-color);
  border-radius: 4px;
  color: var(--vai-text-color-regular);
  transition: all 0.3s;
}
.vai-btn:hover { 
  color: var(--vai-color-primary);
  border-color: var(--vai-color-primary);
}
.vai-btn-primary {
  background: var(--vai-color-primary);
  color: #fff;
  border-color: var(--vai-color-primary);
}
.vai-btn-success {
  background: var(--vai-color-success);
  color: #fff;
  border-color: var(--vai-color-success);
}
.vai-btn-warning {
  background: var(--vai-color-warning);
  color: #fff;
  border-color: var(--vai-color-warning);
}
.vai-btn-danger {
  background: var(--vai-color-danger);
  color: #fff;
  border-color: var(--vai-color-danger);
}
.vai-btn-info {
  background: var(--vai-color-info);
  color: #fff;
  border-color: var(--vai-color-info);
}
.vai-btn-large { padding: 12px 20px; font-size: 16px; }
.vai-btn-small { padding: 5px 12px; font-size: 12px; }
.vai-btn.is-disabled { cursor: not-allowed; opacity: 0.6; }
.loading { 
  display: inline-block; 
  animation: spin 1s linear infinite; 
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
