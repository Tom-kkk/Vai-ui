<template>
  <div class="vai-code-highlighter" :class="`theme-${theme}`">
    <div v-if="showHeader" class="code-header">
      <span class="code-language">{{ language }}</span>
      <div class="code-actions">
        <button @click="copyCode" class="action-btn" :class="{ 'is-copied': copied }">
          {{ copied ? '✓ 已复制' : '📋 复制' }}
        </button>
      </div>
    </div>

    <div class="code-container" :class="{ 'show-line-numbers': showLineNumbers }">
      <div v-if="showLineNumbers" class="line-numbers">
        <div v-for="n in lineCount" :key="n" class="line-number">{{ n }}</div>
      </div>

      <!-- Shiki 加载中：展示纯文本降级 -->
      <pre v-if="isLoading" class="code-content code-plain"><code>{{ code }}</code></pre>

      <!-- Shiki 加载完成：展示高亮 HTML -->
      <div v-else class="shiki-container" v-html="highlightedHtml"></div>
    </div>
  </div>
</template>

<script>
import { createHighlighter } from 'shiki'

const SUPPORTED_LANGS = [
  'javascript', 'typescript', 'vue', 'python',
  'html', 'css', 'bash', 'json', 'markdown', 'rust', 'go'
]

export default {
  name: 'VaiCodeHighlighter',
  props: {
    code: { type: String, required: true },
    language: { type: String, default: 'javascript' },
    showHeader: { type: Boolean, default: true },
    showLineNumbers: { type: Boolean, default: true },
    theme: { type: String, default: 'dark' }
  },
  data() {
    return {
      copied: false,
      highlighter: null,
      highlightedHtml: '',
      isLoading: true
    }
  },
  computed: {
    lineCount() {
      return this.code.split('\n').length
    },
    currentTheme() {
      return this.theme === 'light' ? 'github-light' : 'one-dark-pro'
    },
    safeLanguage() {
      return SUPPORTED_LANGS.includes(this.language) ? this.language : 'text'
    }
  },
  watch: {
    code() { this.renderCode() },
    language() { this.renderCode() },
    theme() { this.renderCode() }
  },
  methods: {
    async initHighlighter() {
      this.isLoading = true
      try {
        this.highlighter = await createHighlighter({
          themes: ['one-dark-pro', 'github-light'],
          langs: [this.safeLanguage]
        })
        this.renderCode()
      } catch (err) {
        this.highlightedHtml = `<pre class="code-content code-plain"><code>${this.escapeHtml(this.code)}</code></pre>`
      } finally {
        this.isLoading = false
      }
    },
    renderCode() {
      if (!this.highlighter) return
      try {
        this.highlightedHtml = this.highlighter.codeToHtml(this.code, {
          lang: this.safeLanguage,
          theme: this.currentTheme
        })
      } catch (err) {
        this.highlightedHtml = `<pre class="code-content code-plain"><code>${this.escapeHtml(this.code)}</code></pre>`
      }
    },
    escapeHtml(str) {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
    },
    async copyCode() {
      try {
        await navigator.clipboard.writeText(this.code)
        this.copied = true
        setTimeout(() => { this.copied = false }, 2000)
      } catch (err) {
        console.error('复制失败:', err)
      }
    }
  },
  mounted() {
    this.initHighlighter()
  }
}
</script>

<style scoped>
.vai-code-highlighter {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 暗色主题容器背景 */
.theme-dark {
  background: #282c34;
}

/* 亮色主题容器背景 */
.theme-light {
  background: #f6f8fa;
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.theme-dark .code-header {
  background: #21252b;
  border-bottom-color: #181a1f;
}

.theme-light .code-header {
  background: #eaeef2;
  border-bottom-color: #d0d7de;
}

.code-language {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.theme-dark .code-language { color: #abb2bf; }
.theme-light .code-language { color: #57606a; }

.code-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 4px 12px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.theme-dark .action-btn { color: #abb2bf; }
.theme-dark .action-btn:hover { background: rgba(255, 255, 255, 0.1); color: #61afef; }
.theme-light .action-btn { color: #57606a; background: rgba(0, 0, 0, 0.05); }
.theme-light .action-btn:hover { background: rgba(0, 0, 0, 0.1); color: #0969da; }

.theme-dark .action-btn.is-copied { color: #98c379; }
.theme-light .action-btn.is-copied { color: #1a7f37; }

.code-container {
  display: flex;
  overflow-x: auto;
}

.code-container::-webkit-scrollbar { height: 8px; }

.theme-dark .code-container::-webkit-scrollbar-track { background: #21252b; }
.theme-dark .code-container::-webkit-scrollbar-thumb { background: #3e4451; border-radius: 4px; }
.theme-light .code-container::-webkit-scrollbar-track { background: #eaeef2; }
.theme-light .code-container::-webkit-scrollbar-thumb { background: #c8ccd0; border-radius: 4px; }

.line-numbers {
  flex-shrink: 0;
  padding: 16px 0;
  user-select: none;
}

.theme-dark .line-numbers {
  background: #21252b;
  border-right: 1px solid #181a1f;
}

.theme-light .line-numbers {
  background: #eaeef2;
  border-right: 1px solid #d0d7de;
}

.line-number {
  padding: 0 16px;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  text-align: right;
}

.theme-dark .line-number { color: #5c6370; }
.theme-light .line-number { color: #8c959f; }

/* 降级纯文本模式 */
.code-plain {
  flex: 1;
  margin: 0;
  padding: 16px;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  background: transparent;
  overflow-x: auto;
}

.theme-dark .code-plain { color: #abb2bf; }
.theme-light .code-plain { color: #24292f; }

/* Shiki 输出容器：让 shiki 生成的 pre/code 撑满 */
.shiki-container {
  flex: 1;
  overflow-x: auto;
  line-height: 1.5;
}

/* Shiki 输出的 pre 标签样式覆盖 */
.shiki-container :deep(pre) {
  margin: 0;
  padding: 16px;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  background: transparent !important;
  overflow-x: visible;
}

.shiki-container :deep(code) {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  background: transparent !important;
}
</style>
