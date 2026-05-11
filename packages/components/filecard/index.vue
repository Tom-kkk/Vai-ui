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
  gap: 14px;
  padding: 16px;
  background: var(--vai-bg-base);
  border: 1px solid var(--vai-border-color);
  border-radius: var(--vai-radius-lg);
  transition: var(--vai-transition-fast);
  font-family: var(--vai-font-family);
}

.is-clickable {
  cursor: pointer;
}
.is-clickable:hover {
  border-color: var(--vai-color-primary-light-3);
  box-shadow: var(--vai-shadow-sm), 0 0 0 3px var(--vai-color-primary-light-1);
  transform: translateY(-2px);
}
.is-clickable:active {
  transform: translateY(0);
}

.card-icon {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vai-gradient-primary-soft);
  border: 1px solid var(--vai-color-primary-light-2);
  border-radius: var(--vai-radius-md);
}
.file-icon { font-size: 22px; }

.card-content {
  flex: 1;
  min-width: 0;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 5px;
}

.file-name {
  flex: 1;
  font-size: var(--vai-font-size-base);
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
  color: var(--vai-text-color-secondary);
  background: var(--vai-fill-color);
  border: 1px solid var(--vai-border-color);
  border-radius: var(--vai-radius-sm);
  cursor: pointer;
  transition: var(--vai-transition-fast);
}
.download-btn:hover {
  color: var(--vai-color-primary);
  background: var(--vai-color-primary-light-1);
  border-color: var(--vai-color-primary-light-3);
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--vai-font-size-sm);
  color: var(--vai-text-color-secondary);
  margin-bottom: 8px;
}
.card-meta span + span::before {
  content: '·';
  margin-right: 10px;
  opacity: 0.5;
}

.card-description {
  font-size: var(--vai-font-size-sm);
  color: var(--vai-text-color-secondary);
  line-height: var(--vai-line-height-base);
  margin-bottom: 8px;
}

.card-progress {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.progress-bar {
  flex: 1;
  height: 5px;
  background: var(--vai-fill-color);
  border-radius: var(--vai-radius-full);
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: var(--vai-gradient-primary);
  border-radius: var(--vai-radius-full);
  transition: width 0.4s ease;
}
.progress-text {
  flex-shrink: 0;
  font-size: var(--vai-font-size-sm);
  font-weight: 500;
  color: var(--vai-color-primary);
  min-width: 34px;
  text-align: right;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.tag {
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 500;
  color: var(--vai-color-primary);
  background: var(--vai-color-primary-light-1);
  border: 1px solid var(--vai-color-primary-light-2);
  border-radius: var(--vai-radius-full);
}

.close-btn {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: var(--vai-text-color-tertiary);
  background: none;
  border: none;
  border-radius: var(--vai-radius-sm);
  cursor: pointer;
  transition: var(--vai-transition-fast);
  line-height: 1;
}
.close-btn:hover {
  color: var(--vai-color-danger);
  background: var(--vai-color-danger-bg);
}

/* Compact */
.card-compact { padding: 11px 14px; }
.card-compact .card-icon { width: 36px; height: 36px; }
.card-compact .file-icon { font-size: 18px; }

/* Detailed */
.card-detailed { flex-direction: column; }
.card-detailed .card-icon { width: 60px; height: 60px; }
.card-detailed .file-icon { font-size: 28px; }
</style>
