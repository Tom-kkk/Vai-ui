<template>
  <div class="vai-suggestion">
    <div v-if="title" class="suggestion-title">{{ title }}</div>
    <div class="suggestion-list" :class="[`layout-${layout}`]">
      <div
        v-for="(item, index) in suggestions"
        :key="index"
        class="suggestion-item"
        @click="handleSelect(item)"
      >
        <div v-if="item.icon" class="item-icon">{{ item.icon }}</div>
        <div class="item-content">
          <div class="item-title">{{ item.title }}</div>
          <div v-if="item.description" class="item-description">{{ item.description }}</div>
        </div>
        <div v-if="showArrow" class="item-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaiSuggestion',
  props: {
    title: { type: String, default: '' },
    suggestions: { type: Array, default: () => [] },
    layout: { type: String, default: 'grid' }, // grid, list
    showArrow: { type: Boolean, default: true }
  },
  methods: {
    handleSelect(item) {
      this.$emit('select', item)
    }
  }
}
</script>

<style scoped>
.vai-suggestion {
  padding: 4px 0;
  font-family: var(--vai-font-family);
}

.suggestion-title {
  font-size: var(--vai-font-size-sm);
  font-weight: 600;
  color: var(--vai-text-color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 10px;
  padding: 0 4px;
}

.suggestion-list {
  display: grid;
  gap: 8px;
}

.layout-grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.layout-list {
  grid-template-columns: 1fr;
}

.suggestion-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: var(--vai-bg-base);
  border: 1px solid var(--vai-border-color);
  border-radius: var(--vai-radius-md);
  cursor: pointer;
  transition: var(--vai-transition-fast);
  position: relative;
  overflow: hidden;
}
.suggestion-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--vai-gradient-primary-soft);
  opacity: 0;
  transition: var(--vai-transition-fast);
}

.suggestion-item:hover {
  border-color: var(--vai-color-primary-light-3);
  transform: translateY(-2px);
  box-shadow: var(--vai-shadow-sm), 0 0 0 3px var(--vai-color-primary-light-1);
}
.suggestion-item:hover::before {
  opacity: 1;
}
.suggestion-item:active {
  transform: translateY(0);
}

.item-icon {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: var(--vai-gradient-primary);
  border-radius: var(--vai-radius-sm);
  position: relative;
  z-index: 1;
  box-shadow: var(--vai-shadow-primary-sm);
}

.item-content {
  flex: 1;
  min-width: 0;
  position: relative;
  z-index: 1;
}

.item-title {
  font-size: var(--vai-font-size-base);
  font-weight: 500;
  color: var(--vai-text-color-primary);
  margin-bottom: 2px;
  line-height: 1.4;
}

.item-description {
  font-size: var(--vai-font-size-sm);
  color: var(--vai-text-color-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-arrow {
  flex-shrink: 0;
  color: var(--vai-color-primary);
  opacity: 0;
  transform: translateX(-4px);
  transition: var(--vai-transition-fast);
  position: relative;
  z-index: 1;
}
.suggestion-item:hover .item-arrow {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 640px) {
  .layout-grid {
    grid-template-columns: 1fr;
  }
}
</style>
