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
        <div v-if="showArrow" class="item-arrow">→</div>
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
  padding: 16px;
}

.suggestion-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vai-text-color-primary);
  margin-bottom: 12px;
}

.suggestion-list {
  display: grid;
  gap: 12px;
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
  padding: 12px 16px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.suggestion-item:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-color: var(--vai-color-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.item-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
}

.item-content {
  flex: 1;
  min-width: 0;
}

.item-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--vai-text-color-primary);
  margin-bottom: 2px;
}

.item-description {
  font-size: 12px;
  color: var(--vai-text-color-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-arrow {
  flex-shrink: 0;
  font-size: 16px;
  color: var(--vai-color-primary);
  opacity: 0;
  transition: all 0.3s;
}

.suggestion-item:hover .item-arrow {
  opacity: 1;
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .layout-grid {
    grid-template-columns: 1fr;
  }
}
</style>
