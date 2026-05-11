<template>
  <div class="vai-pageheader">
    <div class="header-left">
      <button class="back-btn" @click="$emit('back')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        <span>返回</span>
      </button>
      <div class="header-divider"></div>
      <div class="header-title"><slot name="title">{{ title }}</slot></div>
    </div>
    <div v-if="$slots.content" class="header-content"><slot name="content"></slot></div>
    <div v-if="$slots.extra" class="header-extra"><slot name="extra"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'VaiPageHeader',
  props: { title: { type: String, default: '' } }
}
</script>

<style scoped>
.vai-pageheader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  background: var(--vai-bg-base);
  border-bottom: 1px solid var(--vai-border-color);
  font-family: var(--vai-font-family);
  min-height: 56px;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 14px;
}
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  font-size: var(--vai-font-size-sm);
  font-family: var(--vai-font-family);
  font-weight: 500;
  color: var(--vai-text-color-secondary);
  background: none;
  border: 1px solid var(--vai-border-color);
  border-radius: var(--vai-radius-sm);
  cursor: pointer;
  transition: var(--vai-transition-fast);
}
.back-btn:hover {
  color: var(--vai-color-primary);
  border-color: var(--vai-color-primary-light-3);
  background: var(--vai-color-primary-light-1);
}
.header-divider {
  width: 1px;
  height: 18px;
  background: var(--vai-border-color);
}
.header-title {
  font-size: var(--vai-font-size-xl);
  font-weight: 600;
  color: var(--vai-text-color-primary);
  letter-spacing: -0.01em;
}
.header-content {
  flex: 1;
  padding: 0 24px;
  font-size: var(--vai-font-size-base);
  color: var(--vai-text-color-secondary);
}
.header-extra {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
