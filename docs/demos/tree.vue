<template>
  <div class="doc">
    <h1>Tree 树形控件</h1>
    <p class="desc">用清晰的层级结构展示信息</p>
    
    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-tree :data="data" />
    </div>
    
    <h2>带复选框</h2>
    <div class="demo" style="display: block">
      <vai-tree :data="data" show-checkbox />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { id: 1, label: '一级节点 1', children: [
          { id: 11, label: '二级节点 1-1' },
          { id: 12, label: '二级节点 1-2' }
        ]},
        { id: 2, label: '一级节点 2', children: [
          { id: 21, label: '二级节点 2-1' },
          { id: 22, label: '二级节点 2-2', children: [
            { id: 221, label: '三级节点 2-2-1' }
          ]}
        ]}
      ]
    }
  }
}
</script>
<style scoped>@import './style.css';</style>
