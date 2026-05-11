<template>
  <div class="vai-sources">
    <div class="sources-header">
      <span class="sources-icon" v-html="sourcesIcon"></span>
      <span class="sources-label">{{ locale.sources }}{{ sources.length > 0 ? ` (${sources.length})` : '' }}</span>
    </div>

    <div class="source-list">
      <a
        v-for="(source, index) in visibleSources"
        :key="source.id"
        class="source-card"
        :href="source.url"
        target="_blank"
        rel="noopener noreferrer"
        :title="source.title"
        @click.prevent="$emit('source-click', source)"
      >
        <span v-if="numbered" class="source-number">{{ index + 1 }}</span>
        <span class="source-favicon">
          <img
            v-if="!faviconErrors[source.id]"
            :src="source.favicon || getFaviconUrl(source.url)"
            :alt="source.title"
            class="favicon-img"
            @error="handleFaviconError(source.id)"
          />
          <span v-else class="favicon-fallback" v-html="docIcon"></span>
        </span>
        <div class="source-info">
          <span class="source-title">{{ source.title }}</span>
          <span class="source-domain">{{ getDomain(source.url) }}</span>
          <span v-if="expanded && source.snippet" class="snippet-text">{{ source.snippet }}</span>
        </div>
        <span class="source-link-icon" v-html="linkIcon"></span>
      </a>
    </div>

    <button v-if="hasMore" class="expand-btn" @click="expanded = true">
      <span v-html="chevronIcon"></span>
      {{ locale.showAll.replace('{n}', sources.length) }}
    </button>
  </div>
</template>

<script>
function getFaviconUrl(url) {
  try {
    const hostname = new URL(url).hostname
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`
  } catch {
    return ''
  }
}

function getDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

const ZH = {
  sources: '参考来源',
  showAll: '查看全部 {n} 个来源',
}

const EN = {
  sources: 'Sources',
  showAll: 'Show all {n} sources',
}

export default {
  name: 'VaiSources',

  inject: {
    vaiConfig: {
      default: () => ({ locale: 'zh-CN', theme: 'light', request: null }),
    },
  },

  props: {
    sources: {
      type: Array,
      default: () => [],
    },
    previewCount: {
      type: Number,
      default: 3,
    },
    numbered: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['source-click'],

  data() {
    return {
      expanded: false,
      faviconErrors: {},
      sourcesIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`,
      docIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
      linkIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
      chevronIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
    }
  },

  computed: {
    locale() {
      const lang = this.vaiConfig?.locale || 'zh-CN'
      return lang === 'en-US' ? EN : ZH
    },

    visibleSources() {
      return this.expanded ? this.sources : this.sources.slice(0, this.previewCount)
    },

    hasMore() {
      return this.sources.length > this.previewCount && !this.expanded
    },
  },

  methods: {
    getFaviconUrl,
    getDomain,

    handleFaviconError(id) {
      this.faviconErrors = { ...this.faviconErrors, [id]: true }
    },
  },
}
</script>

<style scoped>
.vai-sources {
  display: flex;
  flex-direction: column;
  gap: var(--vai-spacing-xs, 6px);
  font-family: var(--vai-font-family, sans-serif);
}

.sources-header {
  display: flex;
  align-items: center;
  gap: var(--vai-spacing-xs, 6px);
  margin-bottom: 2px;
}

.sources-icon {
  display: inline-flex;
  width: 14px;
  height: 14px;
  color: var(--vai-color-primary, #1677ff);
}

.sources-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.sources-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--vai-text-color-secondary, #666);
  letter-spacing: 0.3px;
}

.source-list {
  display: flex;
  flex-direction: column;
  gap: var(--vai-spacing-xs, 4px);
}

.source-card {
  display: flex;
  align-items: flex-start;
  gap: var(--vai-spacing-sm, 8px);
  padding: var(--vai-spacing-sm, 8px) var(--vai-spacing-md, 12px);
  border: 1px solid var(--vai-border-color-lighter, #f0f0f0);
  border-radius: var(--vai-radius-md, 8px);
  background: var(--vai-bg-container, #fff);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: border-color var(--vai-transition-fast, 0.15s), box-shadow var(--vai-transition-fast, 0.15s), background var(--vai-transition-fast, 0.15s);
}

.source-card:hover {
  border-color: var(--vai-color-primary, #1677ff);
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.08);
  background: var(--vai-color-primary-bg, #f0f7ff);
}

.source-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  min-width: 18px;
  border-radius: 50%;
  background: var(--vai-color-primary, #1677ff);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  margin-top: 2px;
}

.source-favicon {
  display: inline-flex;
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-top: 2px;
  border-radius: 3px;
  overflow: hidden;
}

.favicon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.favicon-fallback {
  display: inline-flex;
  width: 100%;
  height: 100%;
  color: var(--vai-text-color-secondary, #888);
}

.favicon-fallback :deep(svg) {
  width: 100%;
  height: 100%;
}

.source-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.source-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--vai-text-color-primary, #1a1a1a);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.4;
}

.source-domain {
  font-size: 11px;
  color: var(--vai-text-color-secondary, #888);
}

.snippet-text {
  font-size: 12px;
  color: var(--vai-text-color-regular, #555);
  line-height: 1.5;
  margin-top: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.source-link-icon {
  display: inline-flex;
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  color: var(--vai-text-color-secondary, #aaa);
  margin-top: 2px;
  opacity: 0;
  transition: opacity var(--vai-transition-fast, 0.15s);
}

.source-link-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.source-card:hover .source-link-icon {
  opacity: 1;
}

.expand-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px var(--vai-spacing-sm, 8px);
  border: none;
  background: transparent;
  color: var(--vai-color-primary, #1677ff);
  font-size: 12px;
  cursor: pointer;
  border-radius: var(--vai-radius-sm, 4px);
  transition: background var(--vai-transition-fast, 0.15s);
  align-self: flex-start;
}

.expand-btn:hover {
  background: var(--vai-color-primary-bg, #e6f4ff);
}

.expand-btn :deep(svg) {
  width: 12px;
  height: 12px;
}
</style>
