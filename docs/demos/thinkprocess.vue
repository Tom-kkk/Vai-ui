<template>
  <div class="doc">
    <h1>ThinkProcess 思考过程</h1>
    <p class="desc">展示 AI 的思考和推理步骤</p>
    
    <h2>基础用法</h2>
    <div class="demo" style="display: block">
      <vai-think-process :steps="steps" />
    </div>
    
    <h2>展开状态</h2>
    <div class="demo" style="display: block">
      <vai-think-process :steps="steps" default-expanded />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        { title: '分析问题', description: '理解用户的问题意图', status: 'done', time: '0.5s' },
        { title: '检索知识库', description: '查找相关信息和资料', status: 'done', time: '1.2s' },
        { title: '生成回复', description: '组织语言并生成回答', status: 'active' }
      ]
    }
  }
}
</script>
<style scoped>@import './style.css';</style>
