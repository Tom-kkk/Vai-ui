<template>
  <div
    class="vai-welcome"
    :class="[layoutClass, { 'is-visible': isVisible }]"
  >
    <div class="welcome-icon" v-if="icon">
      <img v-if="iconType === 'url'" :src="icon" class="icon-img" alt="welcome icon" />
      <span v-else class="icon-svg" v-html="icon"></span>
    </div>

    <div class="welcome-content">
      <h2 v-if="title" class="welcome-title">{{ title }}</h2>
      <p v-if="description" class="welcome-description">{{ description }}</p>
    </div>

    <slot />

    <div v-if="prompts && prompts.length" class="prompt-grid">
      <button
        v-for="(prompt, index) in prompts"
        :key="index"
        class="prompt-card"
        @click="$emit('prompt-select', prompt)"
      >
        <span v-if="prompt.icon" class="prompt-icon" v-html="prompt.icon"></span>
        <div class="prompt-text">
          <span class="prompt-title">{{ prompt.title }}</span>
          <span v-if="prompt.description" class="prompt-desc">{{ prompt.description }}</span>
        </div>
        <span class="prompt-arrow" v-html="arrowIcon"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaiWelcome',

  inject: {
    vaiConfig: {
      default: () => ({ locale: 'zh-CN', theme: 'light', request: null }),
    },
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    prompts: {
      type: Array,
      default: () => [],
    },
    layout: {
      type: String,
      default: 'vertical',
      validator: (v) => ['vertical', 'horizontal'].includes(v),
    },
  },

  emits: ['prompt-select'],

  data() {
    return {
      isVisible: false,
      arrowIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    }
  },

  computed: {
    iconType() {
      if (!this.icon) return 'none'
      return /^(https?:|data:)/i.test(this.icon) ? 'url' : 'svg'
    },

    layoutClass() {
      return `layout-${this.layout}`
    },
  },

  mounted() {
    this.$nextTick(() => {
      requestAnimationFrame(() => {
        this.isVisible = true
      })
    })
  },
}
</script>

<style scoped>
.vai-welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--vai-spacing-xl, 40px) var(--vai-spacing-lg, 24px);
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 300ms ease, transform 300ms ease;
  font-family: var(--vai-font-family, sans-serif);
  color: var(--vai-text-color-primary, #1a1a1a);
}

.vai-welcome.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.vai-welcome.layout-horizontal {
  flex-direction: row;
  align-items: flex-start;
  gap: var(--vai-spacing-lg, 24px);
}

.vai-welcome.layout-horizontal .welcome-content {
  text-align: left;
}

.welcome-icon {
  margin-bottom: var(--vai-spacing-md, 16px);
}

.vai-welcome.layout-horizontal .welcome-icon {
  margin-bottom: 0;
  flex-shrink: 0;
}

.icon-img {
  width: 64px;
  height: 64px;
  border-radius: var(--vai-radius-lg, 12px);
  object-fit: cover;
}

.icon-svg {
  display: inline-flex;
  width: 64px;
  height: 64px;
  color: var(--vai-color-primary, #1677ff);
}

.icon-svg :deep(svg) {
  width: 100%;
  height: 100%;
}

.welcome-content {
  text-align: center;
  margin-bottom: var(--vai-spacing-md, 16px);
}

.welcome-title {
  margin: 0 0 var(--vai-spacing-xs, 8px);
  font-size: var(--vai-font-size-xl, 20px);
  font-weight: 700;
  background: var(--vai-gradient-primary, linear-gradient(135deg, #1677ff, #722ed1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: var(--vai-line-height-tight, 1.3);
}

.welcome-description {
  margin: 0;
  font-size: var(--vai-font-size-base, 14px);
  color: var(--vai-text-color-secondary, #666);
  line-height: var(--vai-line-height-base, 1.6);
}

.prompt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--vai-spacing-sm, 8px);
  width: 100%;
  max-width: 720px;
  margin-top: var(--vai-spacing-md, 16px);
}

.vai-welcome.layout-horizontal .prompt-grid {
  flex: 1;
  margin-top: 0;
}

.prompt-card {
  display: flex;
  align-items: flex-start;
  gap: var(--vai-spacing-sm, 8px);
  padding: var(--vai-spacing-md, 14px) var(--vai-spacing-md, 16px);
  border: 1px solid var(--vai-border-color, #d9d9d9);
  border-radius: var(--vai-radius-lg, 12px);
  background: var(--vai-bg-container, #fff);
  cursor: pointer;
  text-align: left;
  transition: border-color var(--vai-transition-fast, 0.15s), box-shadow var(--vai-transition-fast, 0.15s), background var(--vai-transition-fast, 0.15s);
  position: relative;
  overflow: hidden;
}

.prompt-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--vai-gradient-primary-soft, linear-gradient(135deg, rgba(22,119,255,0.04), rgba(114,46,209,0.04)));
  opacity: 0;
  transition: opacity var(--vai-transition-fast, 0.15s);
}

.prompt-card:hover {
  border-color: var(--vai-color-primary, #1677ff);
  box-shadow: 0 2px 12px rgba(22, 119, 255, 0.1);
}

.prompt-card:hover::before {
  opacity: 1;
}

.prompt-icon {
  display: inline-flex;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--vai-color-primary, #1677ff);
  margin-top: 1px;
  position: relative;
  z-index: 1;
}

.prompt-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.prompt-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  z-index: 1;
}

.prompt-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--vai-text-color-primary, #1a1a1a);
  line-height: 1.4;
}

.prompt-desc {
  font-size: 12px;
  color: var(--vai-text-color-secondary, #888);
  line-height: 1.4;
}

.prompt-arrow {
  display: inline-flex;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: var(--vai-text-color-secondary, #888);
  opacity: 0;
  transition: opacity var(--vai-transition-fast, 0.15s), color var(--vai-transition-fast, 0.15s);
  align-self: center;
  position: relative;
  z-index: 1;
}

.prompt-arrow :deep(svg) {
  width: 100%;
  height: 100%;
}

.prompt-card:hover .prompt-arrow {
  opacity: 1;
  color: var(--vai-color-primary, #1677ff);
}
</style>
