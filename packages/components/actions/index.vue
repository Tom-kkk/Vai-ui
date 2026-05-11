<template>
  <div
    class="vai-actions"
    :class="[`placement-${placement}`, { 'is-visible': visible }]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <button
      v-for="item in computedItems"
      :key="item.type"
      class="action-btn"
      :class="{
        'is-active': (item.type === 'like' && liked) || (item.type === 'dislike' && disliked),
        'is-copied': item.type === 'copy' && copied
      }"
      :title="item.label || getDefaultLabel(item.type)"
      :aria-label="item.label || getDefaultLabel(item.type)"
      @click="handleAction(item)"
    >
      <span v-if="item.icon" class="btn-icon" v-html="item.icon"></span>
      <span v-else class="btn-icon" v-html="getDefaultIcon(item.type, item.type === 'copy' && copied)"></span>
      <span v-if="item.type === 'copy' && copied" class="btn-text">{{ locale.copied }}</span>
    </button>
  </div>
</template>

<script>
const DEFAULT_ICONS = {
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
  copied: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
  like: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>`,
  dislike: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10z"/><path d="M17 2h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"/></svg>`,
  retry: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>`,
  delete: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6m4-6v6"/><path d="M9 6V4h6v2"/></svg>`,
}

const DEFAULT_ITEMS = ['copy', 'like', 'dislike', 'retry']

const ZH_LABELS = {
  copy: '复制',
  copied: '已复制',
  like: '赞',
  dislike: '踩',
  retry: '重试',
  delete: '删除',
}

const EN_LABELS = {
  copy: 'Copy',
  copied: 'Copied',
  like: 'Like',
  dislike: 'Dislike',
  retry: 'Retry',
  delete: 'Delete',
}

export default {
  name: 'VaiActions',

  inject: {
    vaiConfig: {
      default: () => ({ locale: 'zh-CN', theme: 'light', request: null }),
    },
  },

  props: {
    messageId: {
      type: [String, Number],
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
    placement: {
      type: String,
      default: 'hover',
      validator: (v) => ['hover', 'always'].includes(v),
    },
    liked: {
      type: Boolean,
      default: false,
    },
    disliked: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['action'],

  data() {
    return {
      copied: false,
      visible: this.placement === 'always',
      copyTimer: null,
    }
  },

  computed: {
    locale() {
      const lang = this.vaiConfig?.locale || 'zh-CN'
      return lang === 'en-US' ? EN_LABELS : ZH_LABELS
    },

    computedItems() {
      const defaults = DEFAULT_ITEMS.map((type) => ({ type }))
      return [...defaults, ...this.items]
    },
  },

  beforeUnmount() {
    if (this.copyTimer) clearTimeout(this.copyTimer)
  },

  methods: {
    getDefaultLabel(type) {
      if (type === 'copy' && this.copied) return this.locale.copied
      return this.locale[type] || type
    },

    getDefaultIcon(type, isCopied) {
      if (type === 'copy' && isCopied) return DEFAULT_ICONS.copied
      return DEFAULT_ICONS[type] || ''
    },

    handleMouseEnter() {
      if (this.placement === 'hover') this.visible = true
    },

    handleMouseLeave() {
      if (this.placement === 'hover') this.visible = false
    },

    handleAction(item) {
      if (item.type === 'copy') {
        const text = item.text || ''
        this.handleCopy(text)
        return
      }
      this.$emit('action', { type: item.type, messageId: this.messageId })
    },

    async handleCopy(text) {
      try {
        await navigator.clipboard.writeText(text)
        this.onCopySuccess()
      } catch {
        this.fallbackCopy(text)
      }
    },

    fallbackCopy(text) {
      try {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
        this.onCopySuccess()
      } catch {
        this.$emit('action', { type: 'copy-failed', messageId: this.messageId })
      }
    },

    onCopySuccess() {
      this.copied = true
      this.$emit('action', { type: 'copy', messageId: this.messageId })
      if (this.copyTimer) clearTimeout(this.copyTimer)
      this.copyTimer = setTimeout(() => {
        this.copied = false
      }, 2000)
    },
  },
}
</script>

<style scoped>
.vai-actions {
  display: inline-flex;
  align-items: center;
  gap: var(--vai-spacing-xs, 4px);
  padding: 2px var(--vai-spacing-xs, 4px);
  border-radius: var(--vai-radius-md, 6px);
  transition: opacity var(--vai-transition-fast, 0.15s ease), transform var(--vai-transition-fast, 0.15s ease);
}

.vai-actions.placement-hover {
  opacity: 0;
  transform: translateY(4px);
  pointer-events: none;
}

.vai-actions.placement-hover.is-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.vai-actions.placement-always {
  opacity: 1;
  transform: none;
  pointer-events: auto;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  border: none;
  border-radius: var(--vai-radius-sm, 4px);
  background: transparent;
  color: var(--vai-text-color-secondary, #8c8c8c);
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  transition: background var(--vai-transition-fast, 0.15s ease), color var(--vai-transition-fast, 0.15s ease);
}

.action-btn:hover {
  background: var(--vai-fill-color-light, #f0f0f0);
  color: var(--vai-color-primary, #1677ff);
}

.action-btn.is-active {
  color: var(--vai-color-primary, #1677ff);
  background: var(--vai-color-primary-bg, #e6f4ff);
}

.action-btn.is-copied {
  color: var(--vai-color-success, #52c41a);
}

.btn-icon {
  display: inline-flex;
  width: 14px;
  height: 14px;
}

.btn-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.btn-text {
  font-size: 11px;
  white-space: nowrap;
}
</style>
