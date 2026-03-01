<template>
  <div class="doc">
    <h1>Button 按钮</h1>
    <p class="desc">常用的操作按钮</p>
    
    <h2>基础用法</h2>
    <div class="demo">
      <vai-button>默认按钮</vai-button>
      <vai-button type="primary">主要按钮</vai-button>
      <vai-button type="success">成功按钮</vai-button>
      <vai-button type="warning">警告按钮</vai-button>
      <vai-button type="danger">危险按钮</vai-button>
      <vai-button type="info">信息按钮</vai-button>
    </div>
    
    <h2>禁用和加载</h2>
    <div class="demo">
      <vai-button disabled>禁用按钮</vai-button>
      <vai-button loading>加载中</vai-button>
      <vai-button type="primary" loading>加载中</vai-button>
    </div>
    
    <h2>不同尺寸</h2>
    <div class="demo" style="align-items: center">
      <vai-button size="large" type="primary">大型按钮</vai-button>
      <vai-button type="primary">默认按钮</vai-button>
      <vai-button size="small" type="primary">小型按钮</vai-button>
    </div>
  </div>
</template>
<style scoped>@import './style.css';</style>
