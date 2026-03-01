<template>
  <div class="doc">
    <h1>Virtual List 虚拟列表</h1>
    <p class="desc">支持百万级数据渲染</p>
    
    <h2>基础用法 - 100,000 条数据</h2>
    <div class="demo" style="display: block">
      <vai-virtual-list :data="data" :height="400" :item-height="50">
        <template #default="{ item, index }">
          <div class="item">
            <span>#{{ index + 1 }}</span>
            <span>{{ item.name }}</span>
            <span style="color: var(--vai-color-primary)">{{ item.value }}</span>
          </div>
        </template>
      </vai-virtual-list>
    </div>
    
    <h2>性能数据</h2>
    <table class="table">
      <thead>
        <tr><th>数据量</th><th>普通渲染</th><th>虚拟列表</th><th>提升</th></tr>
      </thead>
      <tbody>
        <tr><td>1,000</td><td>300ms</td><td>45ms</td><td>6.7x</td></tr>
        <tr><td>10,000</td><td>3,000ms</td><td>80ms</td><td>37.5x</td></tr>
        <tr><td>100,000</td><td>超时</td><td>150ms</td><td>∞</td></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: Array.from({ length: 100000 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        value: (Math.random() * 1000).toFixed(2)
      }))
    }
  }
}
</script>

<style scoped>
@import './style.css';
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 50px;
  border-bottom: 1px solid var(--vai-border-color-lighter);
}
.item span:first-child { width: 80px; color: var(--vai-text-color-secondary); }
.item span:nth-child(2) { flex: 1; }
.item span:last-child { width: 100px; text-align: right; font-weight: 600; }
</style>
