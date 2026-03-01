<template>
  <div class="doc">
    <h1>FileCard 文件卡片</h1>
    <p class="desc">展示文件信息的卡片组件</p>
    
    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-file-card
        name="项目文档.pdf"
        size="2.5 MB"
        time="2024-12-24"
        icon="📄"
        @click="handleClick"
        @download="handleDownload"
      />
    </div>
    
    <h2>带标签</h2>
    <div class="demo" style="display: block">
      <vai-file-card
        name="设计稿.sketch"
        size="15.8 MB"
        description="UI 设计稿最终版"
        icon="🎨"
        :tags="['设计', '重要']"
        @click="handleClick"
      />
    </div>
    
    <h2>上传进度</h2>
    <div class="demo" style="display: block">
      <vai-file-card
        name="视频文件.mp4"
        size="125 MB"
        icon="🎬"
        :progress="68"
        show-progress
        :clickable="false"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('点击了文件卡片')
    },
    handleDownload() {
      alert('下载文件')
    }
  }
}
</script>
<style scoped>@import './style.css';</style>
