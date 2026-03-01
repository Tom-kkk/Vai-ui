<template>
  <div class="doc">
    <h1>CodeHighlighter 代码高亮</h1>
    <p class="desc">带语法高亮的代码展示组件</p>
    
    <h2>JavaScript</h2>
    <div class="demo" style="display: block">
      <vai-code-highlighter :code="jsCode" language="javascript" />
    </div>
    
    <h2>Python</h2>
    <div class="demo" style="display: block">
      <vai-code-highlighter :code="pyCode" language="python" />
    </div>
    
    <h2>HTML</h2>
    <div class="demo" style="display: block">
      <vai-code-highlighter :code="htmlCode" language="html" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsCode: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 计算前 10 个斐波那契数
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}`,
      pyCode: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 测试
numbers = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(numbers))`,
      htmlCode: `<div class="container">
  <h1>Hello World</h1>
  <p class="description">This is a demo</p>
</div>`
    }
  }
}
</script>
<style scoped>@import './style.css';</style>
