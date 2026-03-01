<template>
  <div class="doc">
    <h1>Suggestion 快捷指令</h1>
    <p class="desc">提供常用的快捷操作建议</p>
    
    <h2>网格布局</h2>
    <div class="demo" style="display: block">
      <vai-suggestion title="你可以问我：" :suggestions="suggestions" @select="handleSelect" />
    </div>
    
    <h2>列表布局</h2>
    <div class="demo" style="display: block">
      <vai-suggestion :suggestions="suggestions" layout="list" @select="handleSelect" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      suggestions: [
        { icon: '💡', title: '写一篇文章', description: '关于 AI 技术的发展' },
        { icon: '🎨', title: '设计方案', description: '产品界面设计建议' },
        { icon: '📊', title: '数据分析', description: '分析销售数据趋势' },
        { icon: '🔍', title: '问题解答', description: '解答技术相关问题' }
      ]
    }
  },
  methods: {
    handleSelect(item) {
      alert(`选择了：${item.title}`)
    }
  }
}
</script>
<style scoped>@import './style.css';</style>
