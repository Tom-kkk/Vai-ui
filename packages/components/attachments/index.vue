<template>
  <div class="vai-attachments">
    <input
      ref="fileInput"
      type="file"
      :multiple="multiple"
      :accept="accept"
      @change="handleFileChange"
      style="display: none"
    />
    
    <div class="attachments-list" v-if="fileList.length > 0">
      <div v-for="(file, index) in fileList" :key="index" class="attachment-item">
        <div class="item-icon">{{ getFileIcon(file.name) }}</div>
        <div class="item-info">
          <div class="item-name">{{ file.name }}</div>
          <div class="item-size">{{ formatFileSize(file.size) }}</div>
        </div>
        <button @click="removeFile(index)" class="item-remove">×</button>
      </div>
    </div>
    
    <div class="attachments-actions">
      <button @click="selectFiles" class="action-btn" :disabled="disabled">
        <svg class="btn-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
        <span>{{ buttonText }}</span>
      </button>
      <div v-if="tip" class="action-tip">{{ tip }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaiAttachments',
  props: {
    modelValue: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: true },
    accept: { type: String, default: '*' },
    maxSize: { type: Number, default: 10 * 1024 * 1024 }, // 10MB
    maxCount: { type: Number, default: 5 },
    buttonText: { type: String, default: '添加附件' },
    tip: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
  },
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    selectFiles() {
      this.$refs.fileInput.click()
    },
    handleFileChange(e) {
      const files = Array.from(e.target.files)
      
      if (this.fileList.length + files.length > this.maxCount) {
        alert(`最多只能上传 ${this.maxCount} 个文件`)
        return
      }
      
      const validFiles = files.filter(file => {
        if (file.size > this.maxSize) {
          alert(`文件 ${file.name} 超过大小限制`)
          return false
        }
        return true
      })
      
      this.fileList = [...this.fileList, ...validFiles]
      this.$emit('update:modelValue', this.fileList)
      this.$emit('change', this.fileList)
      
      e.target.value = ''
    },
    removeFile(index) {
      this.fileList.splice(index, 1)
      this.$emit('update:modelValue', this.fileList)
      this.$emit('change', this.fileList)
    },
    getFileIcon(filename) {
      const ext = filename.split('.').pop().toLowerCase()
      const icons = {
        pdf: '📄',
        doc: '📝',
        docx: '📝',
        xls: '📊',
        xlsx: '📊',
        ppt: '📈',
        pptx: '📈',
        zip: '📦',
        rar: '📦',
        jpg: '🖼️',
        jpeg: '🖼️',
        png: '🖼️',
        gif: '🖼️',
        mp4: '🎬',
        mp3: '🎵',
        txt: '📃'
      }
      return icons[ext] || '📎'
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 B'
      const k = 1024
      const sizes = ['B', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]
    }
  },
  watch: {
    modelValue: {
      handler(val) {
        this.fileList = val || []
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.vai-attachments {
  padding: 10px;
  background: var(--vai-fill-color-light);
  border: 1px solid var(--vai-border-color);
  border-radius: var(--vai-radius-lg);
  font-family: var(--vai-font-family);
}

.attachments-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
}

.attachment-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  background: var(--vai-bg-base);
  border: 1px solid var(--vai-border-color);
  border-radius: var(--vai-radius-md);
  transition: var(--vai-transition-fast);
}
.attachment-item:hover {
  border-color: var(--vai-color-primary-light-3);
  box-shadow: var(--vai-shadow-xs);
}

.item-icon {
  font-size: 20px;
  flex-shrink: 0;
  width: 32px;
  text-align: center;
}

.item-info {
  flex: 1;
  min-width: 0;
}

.item-name {
  font-size: var(--vai-font-size-base);
  font-weight: 500;
  color: var(--vai-text-color-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-size {
  font-size: var(--vai-font-size-xs);
  color: var(--vai-text-color-tertiary);
  margin-top: 2px;
}

.item-remove {
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
.item-remove:hover {
  color: var(--vai-color-danger);
  background: var(--vai-color-danger-bg);
}

.attachments-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  font-size: var(--vai-font-size-base);
  font-family: var(--vai-font-family);
  font-weight: 500;
  color: var(--vai-color-primary);
  background: var(--vai-bg-base);
  border: 1.5px dashed var(--vai-color-primary-light-3);
  border-radius: var(--vai-radius-md);
  cursor: pointer;
  transition: var(--vai-transition-fast);
}
.action-btn:hover {
  background: var(--vai-color-primary-light-1);
  border-color: var(--vai-color-primary);
  border-style: solid;
}
.action-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-icon {
  flex-shrink: 0;
  opacity: 0.85;
}

.action-tip {
  font-size: var(--vai-font-size-sm);
  color: var(--vai-text-color-tertiary);
}
</style>
