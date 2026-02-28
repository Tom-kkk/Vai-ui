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
        <span class="btn-icon">📎</span>
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
  padding: 12px;
  background: var(--vai-fill-color-light);
  border-radius: 8px;
}

.attachments-list {
  margin-bottom: 12px;
}

.attachment-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid var(--vai-border-color-lighter);
  border-radius: 6px;
  margin-bottom: 8px;
  transition: all 0.3s;
}

.attachment-item:hover {
  border-color: var(--vai-color-primary);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
}

.item-icon {
  font-size: 24px;
}

.item-info {
  flex: 1;
  min-width: 0;
}

.item-name {
  font-size: 14px;
  color: var(--vai-text-color-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-size {
  font-size: 12px;
  color: var(--vai-text-color-secondary);
  margin-top: 2px;
}

.item-remove {
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

.item-remove:hover {
  color: var(--vai-color-danger);
  background: var(--vai-fill-color-light);
}

.attachments-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 14px;
  color: var(--vai-color-primary);
  background: #fff;
  border: 1px dashed var(--vai-color-primary);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.action-btn:hover {
  background: var(--vai-color-primary-light-9);
  border-color: var(--vai-color-primary);
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-icon {
  font-size: 16px;
}

.action-tip {
  font-size: 12px;
  color: var(--vai-text-color-secondary);
}
</style>
