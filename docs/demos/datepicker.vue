<template>
  <div class="doc">
    <h1>DatePicker 日期选择器</h1>
    <p class="desc">用于选择或输入日期</p>
    
    <h2>基础用法</h2>
    <div class="demo">
      <vai-date-picker v-model="date" @change="handleChange" />
      <p style="margin-top: 12px; width: 100%">选择的日期：{{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { date: '' }
  },
  methods: {
    handleChange(val) {
      console.log('选择:', val)
    }
  }
}
</script>
<style scoped>@import './style.css';</style>
