<template>
  <div class="doc">
    <h1>Attachments 附件输入</h1>
    <p class="desc">用于上传和管理文件附件</p>
    
    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-attachments v-model="files" tip="支持多文件上传，单个文件不超过 10MB" />
    </div>
    
    <h2>已选择的文件</h2>
    <div v-if="files.length" style="margin-top: 12px">
      <p style="font-size: 14px; color: var(--vai-text-color-secondary)">
        已选择 {{ files.length }} 个文件
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: []
    }
  }
}
</script>
<style scoped>@import './style.css';</style>
