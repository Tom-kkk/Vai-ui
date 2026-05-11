<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  loading: { type: Boolean, default: false },
  streaming: { type: Boolean, default: false },
  placeholder: { type: String, default: '发送消息...' },
  disabled: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue', 'submit', 'abort'])

const isFocused = ref(false)
const isComposing = ref(false)

const showAbort = computed(() => props.streaming)
const sendDisabled = computed(() =>
  !props.modelValue.trim() || props.loading || props.disabled
)

function handleKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey && !isComposing.value) {
    e.preventDefault()
    handleSubmit()
  }
}

function handleSubmit() {
  const text = props.modelValue.trim()
  if (!text || props.loading || props.streaming || props.disabled) return
  emit('submit', text)
}
</script>

<template>
  <div class="chat-footer">
    <div
      class="input-wrapper"
      :class="{ 'is-focused': isFocused, 'is-disabled': loading || streaming || disabled }"
    >
      <slot name="prefix" />
      <textarea
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        @keydown="handleKeydown"
        @compositionstart="isComposing = true"
        @compositionend="isComposing = false"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :disabled="loading || streaming || disabled"
        :placeholder="placeholder"
        rows="1"
      ></textarea>
      <div class="input-actions">
        <slot name="suffix">
          <button v-if="showAbort" @click="emit('abort')" class="send-btn abort-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="6" width="12" height="12" rx="2"/>
            </svg>
          </button>
          <button
            v-else
            @click="handleSubmit"
            :disabled="sendDisabled"
            class="send-btn"
            :class="{ 'is-ready': !sendDisabled }"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </slot>
      </div>
    </div>
    <div class="footer-hint">按 Enter 发送 · Shift+Enter 换行</div>
  </div>
</template>

<style scoped>
.chat-footer {
  flex-shrink: 0;
  padding: 14px 18px 10px;
  background: var(--vai-bg-base);
  border-top: 1px solid var(--vai-border-color);
}
.input-wrapper {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 10px 12px 10px 14px;
  background: var(--vai-fill-color-light);
  border: 1.5px solid var(--vai-border-color);
  border-radius: var(--vai-radius-lg);
  transition: var(--vai-transition-fast);
}
.input-wrapper.is-focused {
  border-color: var(--vai-color-primary);
  background: var(--vai-bg-base);
  box-shadow: 0 0 0 3px var(--vai-color-primary-light-1);
}
.input-wrapper.is-disabled {
  opacity: 0.6;
}
.input-wrapper textarea {
  flex: 1;
  padding: 0;
  font-size: var(--vai-font-size-base);
  font-family: var(--vai-font-family);
  line-height: 1.6;
  color: var(--vai-text-color-primary);
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  max-height: 120px;
  min-height: 22px;
  overflow-y: auto;
}
.input-wrapper textarea::placeholder {
  color: var(--vai-text-color-placeholder);
}
.input-actions {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
}
.send-btn {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vai-fill-color);
  border: none;
  border-radius: var(--vai-radius-sm);
  color: var(--vai-text-color-tertiary);
  cursor: pointer;
  transition: var(--vai-transition-fast);
}
.send-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.send-btn.is-ready {
  background: var(--vai-gradient-primary);
  color: #fff;
  box-shadow: var(--vai-shadow-primary-sm);
}
.send-btn.is-ready:hover {
  background: linear-gradient(135deg, #4096ff 0%, #9254de 100%);
  box-shadow: var(--vai-shadow-primary);
  transform: translateY(-1px);
}
.send-btn.abort-btn {
  background: var(--vai-color-danger-bg);
  color: var(--vai-color-danger);
}
.send-btn.abort-btn:hover {
  background: var(--vai-color-danger);
  color: #fff;
}
.footer-hint {
  margin-top: 7px;
  font-size: var(--vai-font-size-xs);
  color: var(--vai-text-color-tertiary);
  text-align: center;
}
</style>
