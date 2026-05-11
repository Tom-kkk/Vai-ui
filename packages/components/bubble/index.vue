<script>
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import json from 'highlight.js/lib/languages/json'
import 'highlight.js/styles/atom-one-dark.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', bash)
hljs.registerLanguage('css', css)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('json', json)

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs-block"><code class="hljs language-${lang}">${
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
        }</code></pre>`
      } catch {}
    }
    return `<pre class="hljs-block"><code>${md.utils.escapeHtml(str)}</code></pre>`
  }
})
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  role: {
    type: String,
    default: 'assistant',
    validator: (v) => ['user', 'assistant', 'system'].includes(v)
  },
  content: { type: String, default: '' },
  status: {
    type: String,
    default: 'success',
    validator: (v) => ['loading', 'streaming', 'success', 'error'].includes(v)
  },
  streaming: { type: Boolean, default: false },
  typing: { type: Boolean, default: false },
  timestamp: { type: Date, default: null }
})

const showTyping = computed(() => props.typing || props.status === 'loading')

function renderMarkdown(text) {
  if (!text) return ''
  const rawHtml = md.render(text)
  if (typeof window === 'undefined') return rawHtml
  return DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'del', 'code', 'pre',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li', 'blockquote',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'a', 'img', 'hr', 'span', 'div'
    ],
    ALLOWED_ATTR: ['class', 'href', 'src', 'alt', 'title', 'target'],
    ALLOWED_URI_REGEXP: /^https?:/i,
    FORCE_BODY: true
  })
}

function formatTime(date) {
  if (!date) return ''
  const d = new Date(date)
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}
</script>

<template>
  <div :class="['message', `message-${role}`]">
    <div class="msg-avatar">
      <slot name="avatar">
        <template v-if="role === 'user'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </template>
        <template v-else>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/>
          </svg>
        </template>
      </slot>
    </div>
    <div class="msg-body">
      <div class="msg-bubble" :class="{ 'bubble-error': status === 'error' }">
        <div v-if="showTyping" class="typing-indicator">
          <span></span><span></span><span></span>
        </div>
        <div v-else class="bubble-content" v-html="renderMarkdown(content)"></div>
      </div>
      <div v-if="timestamp" class="msg-meta">{{ formatTime(timestamp) }}</div>
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.message {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  animation: msg-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.message-user {
  flex-direction: row-reverse;
}

.msg-avatar {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--vai-radius-sm);
  font-size: 14px;
  margin-top: 2px;
}
.message-assistant .msg-avatar {
  background: var(--vai-gradient-primary);
  color: #fff;
  box-shadow: var(--vai-shadow-primary-sm);
}
.message-user .msg-avatar {
  background: var(--vai-fill-color);
  color: var(--vai-text-color-secondary);
  border: 1px solid var(--vai-border-color);
}

.msg-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 72%;
}
.message-user .msg-body {
  align-items: flex-end;
}

.msg-bubble {
  padding: 11px 15px;
  border-radius: var(--vai-radius-lg);
  font-size: var(--vai-font-size-base);
  line-height: var(--vai-line-height-base);
  color: var(--vai-text-color-primary);
  background: var(--vai-bg-base);
  border: 1px solid var(--vai-border-color);
  box-shadow: var(--vai-shadow-xs);
  word-break: break-word;
}
.message-user .msg-bubble {
  background: var(--vai-gradient-primary);
  color: #fff;
  border-color: transparent;
  box-shadow: var(--vai-shadow-primary-sm);
  border-bottom-right-radius: var(--vai-radius-xs);
}
.message-assistant .msg-bubble {
  border-bottom-left-radius: var(--vai-radius-xs);
}
.msg-bubble.bubble-error {
  border-color: var(--vai-color-danger-light);
  background: var(--vai-color-danger-bg);
  color: var(--vai-color-danger);
}

.msg-meta {
  font-size: var(--vai-font-size-xs);
  color: var(--vai-text-color-tertiary);
  padding: 0 4px;
}

/* ---- Typing Indicator ---- */
.typing-indicator {
  display: flex;
  gap: 4px;
  align-items: center;
  height: 20px;
  padding: 0 2px;
}
.typing-indicator span {
  width: 6px;
  height: 6px;
  background: var(--vai-text-color-tertiary);
  border-radius: 50%;
  animation: typing-bounce 1.4s ease-in-out infinite;
}
.typing-indicator span:nth-child(2) { animation-delay: 0.16s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.32s; }

/* ---- Markdown Content ---- */
.bubble-content :deep(p) { margin: 0 0 8px; }
.bubble-content :deep(p:last-child) { margin-bottom: 0; }
.bubble-content :deep(ul),
.bubble-content :deep(ol) { margin: 4px 0 8px; padding-left: 20px; }
.bubble-content :deep(li) { margin-bottom: 3px; }
.bubble-content :deep(h1),
.bubble-content :deep(h2),
.bubble-content :deep(h3) { margin: 10px 0 5px; font-weight: 600; }
.bubble-content :deep(blockquote) {
  margin: 8px 0;
  padding: 8px 14px;
  border-left: 3px solid var(--vai-color-primary-light-3);
  background: var(--vai-color-primary-light-1);
  border-radius: 0 var(--vai-radius-sm) var(--vai-radius-sm) 0;
  color: var(--vai-text-color-secondary);
}
.bubble-content :deep(code) {
  padding: 2px 6px;
  font-size: var(--vai-font-size-sm);
  font-family: var(--vai-font-mono);
  background: rgba(99, 102, 241, 0.08);
  border-radius: var(--vai-radius-xs);
  color: var(--vai-color-primary);
}
.bubble-content :deep(.hljs-block) {
  margin: 8px 0;
  border-radius: var(--vai-radius-sm);
  overflow: auto;
  font-size: 13px;
}
.bubble-content :deep(.hljs-block code) {
  padding: 0;
  background: transparent;
  border-radius: 0;
  color: inherit;
}
.bubble-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 8px 0;
  font-size: 13px;
}
.bubble-content :deep(th),
.bubble-content :deep(td) {
  padding: 7px 12px;
  border: 1px solid var(--vai-border-color);
  text-align: left;
}
.bubble-content :deep(th) {
  background: var(--vai-fill-color-light);
  font-weight: 600;
}
.bubble-content :deep(a) {
  color: var(--vai-color-primary);
  text-decoration: none;
}
.bubble-content :deep(a:hover) { text-decoration: underline; }
.bubble-content :deep(hr) {
  border: none;
  border-top: 1px solid var(--vai-border-color);
  margin: 10px 0;
}

/* Override for user bubble (white text) */
.message-user .bubble-content :deep(code) {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.message-user .bubble-content :deep(blockquote) {
  border-left-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.85);
}
.message-user .bubble-content :deep(a) { color: #fff; text-decoration: underline; }
.message-user .bubble-content :deep(th) { background: rgba(255, 255, 255, 0.15); }
.message-user .bubble-content :deep(th),
.message-user .bubble-content :deep(td) { border-color: rgba(255, 255, 255, 0.25); }

@keyframes msg-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes typing-bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.35; }
  30%            { transform: translateY(-5px); opacity: 1; }
}
</style>
