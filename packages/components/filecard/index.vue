<template>
  <div class="vai-file-card" :class="[`card-${type}`, { 'is-clickable': clickable }]" @click="handleClick">
    <div class="card-icon">
      <span class="file-icon">{{ icon }}</span>
    </div>
    
    <div class="card-content">
      <div class="card-header">
        <div class="file-name">{{ name }}</div>
        <button v-if="showDownload" @click.stop="handleDownload" class="download-btn">⬇</button>
      </div>
      
      <div class="card-meta">
        <span class="file-size">{{ size }}</span>
        <span v-if="time" class="file-time">{{ time }}</span>
      </div>
      
      <div v-if="description" class="card-description">{{ description }}</div>
      
      <div v-if="showProgress" class="card-progress">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
        </div>
        <span class="progress-text">{{ progress }}%</span>
      </div>
      
      <div v-if="tags && tags.length" class="card-tags">
        <span v-for="(tag, index) in tags" :key="index" class="tag">{{ tag }}</span>
      </div>
    </div>
    
    <button v-if="closable" @click.stop="handleClose" class="close-btn">×</button>
  </div>
</template>

<script>
export default {
  name: 'VaiFileCard',
  props: {
    type: { type: String, default: 'default' }, // default, compact, detailed
    name: { type: String, required: true },
    size: { type: String, default: '' },
    time: { type: String, default: '' },
    description: { type: String, default: '' },
    icon: { type: String, default: '📄' },
    tags: { type: Array, default: () => [] },
    progress: { type: Number, default: 0 },
    showProgress: { type: Boolean, default: false },
    showDownload: { type: Boolean, default: true },
    clickable: { type: Boolean, default: true },
    closable: { type: Boolean, default: false }
  },
  methods: {
    handleClick() {
      if (this.clickable) {
        this.$emit('click')
      }
    },
    handleDownload() {
      this.$emit('download')
    },
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.vai-file-card {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #fff;
  border: 1px solid var(--vai-border-color-lighter);
  border-radius: 8px;
  transition: all 0.3s;
}

.is-clickable {
  cursor: pointer;
}

.is-clickable:hover {
  border-color: var(--vai-color-primary);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
  transform: translateY(-2px);
}

.card-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 8px;
}

.file-icon {
  font-size: 24px;
}

.card-content {
  flex: 1;
  min-width: 0;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
}

.file-name {
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  color: var(--vai-text-color-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.download-btn {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--vai-text-color-secondary);
  background: var(--vai-fill-color-light);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.download-btn:hover {
  color: var(--vai-color-primary);
  background: var(--vai-color-primary-light-9);
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: var(--vai-text-color-secondary);
  margin-bottom: 8px;
}

.card-description {
  font-size: 12px;
  color: var(--vai-text-color-secondary);
  line-height: 1.6;
  margin-bottom: 8px;
}

.card-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: var(--vai-fill-color-light);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 3px;
  transition: width 0.3s;
}

.progress-text {
  flex-shrink: 0;
  font-size: 12px;
  color: var(--vai-text-color-secondary);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  padding: 2px 8px;
  font-size: 12px;
  color: var(--vai-color-primary);
  background: var(--vai-color-primary-light-9);
  border-radius: 4px;
}

.close-btn {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--vai-text-color-placeholder);
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.close-btn:hover {
  color: var(--vai-color-danger);
  background: var(--vai-fill-color-light);
}

/* Compact type */
.card-compact {
  padding: 12px;
}

.card-compact .card-icon {
  width: 36px;
  height: 36px;
}

.card-compact .file-icon {
  font-size: 20px;
}

/* Detailed type */
.card-detailed {
  flex-direction: column;
}

.card-detailed .card-icon {
  width: 64px;
  height: 64px;
}

.card-detailed .file-icon {
  font-size: 32px;
}
</style>
