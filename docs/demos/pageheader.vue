<template>
  <div class="doc">
    <h1>PageHeader 页头</h1>
    <p class="desc">页面的顶部导航</p>
    
    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-page-header title="详情页面" @back="handleBack">
        <template #content>这是内容描述</template>
        <template #extra>
          <vai-button type="primary">操作</vai-button>
        </template>
      </vai-page-header>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleBack() {
      alert('返回上一页')
    }
  }
}
</script>
<style scoped>@import './style.css';</style>
