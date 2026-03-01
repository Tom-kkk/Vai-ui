<template>
  <div class="doc">
    <h1>Skeleton 骨架屏</h1>
    <p class="desc">在内容加载前显示占位图，提升用户体验</p>
    
    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-skeleton />
    </div>
    
    <h2>带头像</h2>
    <div class="demo" style="display: block">
      <vai-skeleton avatar :rows="4" />
    </div>
    
    <h2>不同形状</h2>
    <div class="demo" style="display: block">
      <vai-skeleton avatar avatar-shape="square" :rows="3" />
    </div>
  </div>
</template>
<style scoped>@import './style.css';</style>
