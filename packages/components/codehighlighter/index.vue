<template>
  <div class="vai-code-highlighter">
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
      
      <pre class="code-content"><code :class="`language-${language}`" v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaiCodeHighlighter',
  props: {
    code: { type: String, required: true },
    language: { type: String, default: 'javascript' },
    showHeader: { type: Boolean, default: true },
    showLineNumbers: { type: Boolean, default: true },
    theme: { type: String, default: 'dark' } // dark, light
  },
  data() {
    return {
      copied: false
    }
  },
  computed: {
    lineCount() {
      return this.code.split('\n').length
    },
    highlightedCode() {
      // 简单的语法高亮实现
      return this.highlightSyntax(this.code, this.language)
    }
  },
  methods: {
    async copyCode() {
      try {
        await navigator.clipboard.writeText(this.code)
        this.copied = true
        setTimeout(() => {
          this.copied = false
        }, 2000)
      } catch (err) {
        console.error('复制失败:', err)
      }
    },
    highlightSyntax(code, lang) {
      // 基础语法高亮
      let highlighted = code
      
      if (lang === 'javascript' || lang === 'typescript') {
        // 关键字
        highlighted = highlighted.replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|try|catch)\b/g, '<span class="keyword">$1</span>')
        // 字符串
        highlighted = highlighted.replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>')
        // 注释
        highlighted = highlighted.replace(/\/\/.*/g, '<span class="comment">$&</span>')
        highlighted = highlighted.replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>')
        // 数字
        highlighted = highlighted.replace(/\b\d+\b/g, '<span class="number">$&</span>')
      } else if (lang === 'python') {
        highlighted = highlighted.replace(/\b(def|class|import|from|return|if|else|for|while|try|except|with|as)\b/g, '<span class="keyword">$1</span>')
        highlighted = highlighted.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>')
        highlighted = highlighted.replace(/#.*/g, '<span class="comment">$&</span>')
        highlighted = highlighted.replace(/\b\d+\b/g, '<span class="number">$&</span>')
      } else if (lang === 'html') {
        highlighted = highlighted.replace(/&lt;(\/?[\w-]+)/g, '&lt;<span class="tag">$1</span>')
        highlighted = highlighted.replace(/([\w-]+)=/g, '<span class="attr">$1</span>=')
        highlighted = highlighted.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>')
      } else if (lang === 'css') {
        highlighted = highlighted.replace(/([.#]?[\w-]+)\s*\{/g, '<span class="selector">$1</span> {')
        highlighted = highlighted.replace(/([\w-]+):/g, '<span class="property">$1</span>:')
        highlighted = highlighted.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>')
        highlighted = highlighted.replace(/\/\*.+?\*\//g, '<span class="comment">$&</span>')
      }
      
      return highlighted
    }
  }
}
</script>

<style scoped>
.vai-code-highlighter {
  background: #282c34;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #21252b;
  border-bottom: 1px solid #181a1f;
}

.code-language {
  font-size: 12px;
  font-weight: 600;
  color: #abb2bf;
  text-transform: uppercase;
}

.code-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 4px 12px;
  font-size: 12px;
  color: #abb2bf;
  background: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #61afef;
}

.action-btn.is-copied {
  color: #98c379;
}

.code-container {
  display: flex;
  overflow-x: auto;
}

.code-container::-webkit-scrollbar {
  height: 8px;
}

.code-container::-webkit-scrollbar-track {
  background: #21252b;
}

.code-container::-webkit-scrollbar-thumb {
  background: #3e4451;
  border-radius: 4px;
}

.line-numbers {
  flex-shrink: 0;
  padding: 16px 0;
  background: #21252b;
  border-right: 1px solid #181a1f;
  user-select: none;
}

.line-number {
  padding: 0 16px;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #5c6370;
  text-align: right;
}

.code-content {
  flex: 1;
  margin: 0;
  padding: 16px;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #abb2bf;
  background: transparent;
  overflow-x: auto;
}

.code-content code {
  display: block;
  white-space: pre;
}

/* 语法高亮颜色 */
:deep(.keyword) {
  color: #c678dd;
  font-weight: 600;
}

:deep(.string) {
  color: #98c379;
}

:deep(.comment) {
  color: #5c6370;
  font-style: italic;
}

:deep(.number) {
  color: #d19a66;
}

:deep(.tag) {
  color: #e06c75;
}

:deep(.attr) {
  color: #d19a66;
}

:deep(.selector) {
  color: #e5c07b;
}

:deep(.property) {
  color: #61afef;
}
</style>
