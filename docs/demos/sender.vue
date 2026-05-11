<template>
  <div class="demo-wrap">
    <div class="demo-section">
      <div class="demo-label">基础用法</div>
      <VaiSender v-model="input" @submit="onSubmit" />
      <div v-if="lastSubmit" class="submit-log">已发送：{{ lastSubmit }}</div>
    </div>

    <div class="demo-section">
      <div class="demo-label">流式生成中（streaming=true，显示停止按钮）</div>
      <VaiSender
        v-model="streamInput"
        :streaming="true"
        @abort="onAbort"
      />
    </div>

    <div class="demo-section">
      <div class="demo-label">禁用状态（loading=true）</div>
      <VaiSender v-model="loadingInput" :loading="true" />
    </div>

    <div class="demo-section">
      <div class="demo-label">prefix / suffix slot 自定义</div>
      <VaiSender v-model="slotInput" @submit="onSubmit">
        <template #prefix>
          <button class="slot-btn" title="上传附件">📎</button>
        </template>
        <template #suffix>
          <button class="slot-btn send-custom" @click="onSubmit(slotInput)">发送</button>
        </template>
      </VaiSender>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VaiSender } from '../../packages/components'

const input = ref('')
const streamInput = ref('')
const loadingInput = ref('')
const slotInput = ref('')
const lastSubmit = ref('')

function onSubmit(text) {
  lastSubmit.value = text || input.value
  input.value = ''
  slotInput.value = ''
}

function onAbort() {
  lastSubmit.value = '[已停止]'
}
</script>

<style scoped>
.demo-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.demo-label {
  font-size: 12px;
  color: var(--vp-c-text-2, #999);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.submit-log {
  font-size: 13px;
  color: var(--vai-color-success, #67c23a);
  padding: 6px 10px;
  background: var(--vai-fill-color, #f3f4f6);
  border-radius: 4px;
}
.slot-btn {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 6px;
  transition: background 0.2s;
}
.slot-btn:hover {
  background: var(--vai-fill-color, #f3f4f6);
}
.send-custom {
  width: auto;
  padding: 0 14px;
  font-size: 13px;
  background: var(--vai-gradient-primary, linear-gradient(135deg, #6366f1, #8b5cf6));
  color: #fff;
  border-radius: 6px;
}
</style>
