<template>
  <div class="demo-welcome">
    <div class="controls">
      <label>
        布局：
        <select v-model="layout">
          <option value="vertical">vertical（垂直）</option>
          <option value="horizontal">horizontal（水平）</option>
        </select>
      </label>
      <label>
        <input type="checkbox" v-model="showIcon" /> 显示图标
      </label>
    </div>

    <div class="preview">
      <VaiWelcome
        :key="layout"
        title="你好，我是 Vai AI"
        description="你可以向我提问任何问题，或从下方选择一个话题开始。"
        :icon="showIcon ? aiIcon : ''"
        :layout="layout"
        :prompts="prompts"
        @prompt-select="handleSelect"
      />
    </div>

    <div v-if="selected" class="selected-log">
      已选择：<strong>{{ selected.title }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: 'vertical',
      showIcon: true,
      selected: null,
      aiIcon: `<svg viewBox="0 0 48 48" fill="none"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1677ff"/><stop offset="100%" stop-color="#722ed1"/></linearGradient></defs><circle cx="24" cy="24" r="24" fill="url(#g)"/><path d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><circle cx="19" cy="22" r="1.5" fill="#fff"/><circle cx="29" cy="22" r="1.5" fill="#fff"/></svg>`,
      prompts: [
        {
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
          title: '帮我写一封邮件',
          description: '自动生成正式的商务邮件',
        },
        {
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
          title: '代码审查',
          description: '分析代码质量并给出建议',
        },
        {
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
          title: '资料调研',
          description: '快速整理相关知识点',
        },
        {
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>`,
          title: '内容总结',
          description: '提炼文章或文档的核心要点',
        },
      ],
    }
  },
  methods: {
    handleSelect(prompt) {
      this.selected = prompt
    },
  },
}
</script>

<style scoped>
.demo-welcome {
  padding: 16px;
}
.controls {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
  font-size: 13px;
  color: #555;
}
.controls select {
  margin-left: 4px;
  padding: 2px 6px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 13px;
}
.preview {
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  background: #fafafa;
  min-height: 200px;
  overflow: hidden;
}
.selected-log {
  margin-top: 12px;
  padding: 8px 12px;
  background: #f0f7ff;
  border-radius: 6px;
  font-size: 13px;
  color: #1677ff;
}
</style>
