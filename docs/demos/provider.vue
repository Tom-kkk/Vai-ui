<template>
  <div class="demo-provider">
    <div class="controls">
      <label>
        主题：
        <select v-model="theme">
          <option value="light">light（浅色）</option>
          <option value="dark">dark（深色）</option>
          <option value="auto">auto（跟随系统）</option>
        </select>
      </label>
      <label>
        语言：
        <select v-model="locale">
          <option value="zh-CN">zh-CN（中文）</option>
          <option value="en-US">en-US（英文）</option>
        </select>
      </label>
    </div>

    <div class="preview-area" :data-theme="previewTheme">
      <VaiProvider :theme="theme" :locale="locale">
        <div class="preview-inner">
          <VaiActions
            message-id="demo-1"
            placement="always"
            :liked="liked"
            @action="handleAction"
          />
          <p class="hint-text">
            ↑ 操作按钮文案已跟随语言切换。
            <template v-if="theme === 'dark'">（深色模式需在 theme/index.css 中定义 [data-theme="dark"] 变量）</template>
            <template v-else-if="theme === 'auto'">（跟随系统，当前系统：{{ systemTheme }}）</template>
          </p>
        </div>
      </VaiProvider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light',
      locale: 'zh-CN',
      liked: false,
      systemTheme: 'light',
    }
  },
  computed: {
    previewTheme() {
      if (this.theme === 'auto') return this.systemTheme
      return this.theme
    },
  },
  mounted() {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    this.systemTheme = mq.matches ? 'dark' : 'light'
    mq.addEventListener('change', (e) => {
      this.systemTheme = e.matches ? 'dark' : 'light'
    })
  },
  methods: {
    handleAction(e) {
      if (e.type === 'like') this.liked = !this.liked
    },
  },
}
</script>

<style scoped>
.demo-provider {
  padding: 16px;
}
.controls {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
  font-size: 13px;
  color: #555;
  flex-wrap: wrap;
}
.controls select {
  margin-left: 4px;
  padding: 2px 6px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 13px;
}
.preview-area {
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  overflow: hidden;
  transition: background 0.3s;
}
.preview-area[data-theme="dark"] {
  background: #1a1a2e;
  border-color: #333;
}
.preview-inner {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.hint-text {
  font-size: 12px;
  color: #888;
  margin: 0;
  line-height: 1.5;
}
.preview-area[data-theme="dark"] .hint-text {
  color: #aaa;
}
</style>
