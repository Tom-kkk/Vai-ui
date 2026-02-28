<template>
  <div class="vai-pageheader">
    <div class="left" @click="$emit('back')">
      <i class="back">← 返回</i>
      <div class="title"><slot name="title">{{ title }}</slot></div>
    </div>
    <div v-if="$slots.content" class="content"><slot name="content"></slot></div>
    <div v-if="$slots.extra" class="extra"><slot name="extra"></slot></div>
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
  padding: 16px 24px;
  background: #fff;
  border-bottom: 1px solid var(--vai-border-color-lighter);
}
.left {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}
.back {
  font-size: 14px;
  font-style: normal;
  color: var(--vai-text-color-regular);
  transition: color 0.3s;
}
.back:hover { color: var(--vai-color-primary); }
.title { font-size: 20px; font-weight: 600; color: var(--vai-text-color-primary); }
.content { flex: 1; padding: 0 24px; font-size: 14px; }
.extra { display: flex; gap: 12px; }
</style>
