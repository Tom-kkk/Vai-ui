<template>
  <div class="demo-wrap">
    <div class="demo-controls">
      <label>主题：</label>
      <button
        v-for="t in ['dark', 'light']"
        :key="t"
        :class="['theme-btn', { active: currentTheme === t }]"
        @click="currentTheme = t"
      >{{ t === 'dark' ? '🌙 暗色' : '☀️ 亮色' }}</button>

      <label style="margin-left: 16px">语言：</label>
      <select v-model="currentLang">
        <option v-for="lang in langs" :key="lang" :value="lang">{{ lang }}</option>
      </select>
    </div>

    <VaiCodeHighlighter
      :code="demoCode[currentLang] || demoCode.javascript"
      :language="currentLang"
      :theme="currentTheme"
      :show-line-numbers="true"
    />
  </div>
</template>

<script>
import { VaiCodeHighlighter } from '../../packages/components'

export default {
  components: { VaiCodeHighlighter },
  data() {
    return {
      currentTheme: 'dark',
      currentLang: 'javascript',
      langs: ['javascript', 'typescript', 'vue', 'python', 'bash', 'css', 'json'],
      demoCode: {
        javascript: `// JavaScript 示例
const fetchData = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (err) {
    console.error('请求失败:', err.message)
    return null
  }
}`,
        typescript: `// TypeScript 示例
interface User {
  id: number
  name: string
  email: string
}

async function getUser(id: number): Promise<User | null> {
  const res = await fetch(\`/api/users/\${id}\`)
  if (!res.ok) return null
  return res.json()
}`,
        python: `# Python 示例
def fibonacci(n: int) -> list[int]:
    """生成斐波那契数列"""
    seq = [0, 1]
    for i in range(2, n):
        seq.append(seq[-1] + seq[-2])
    return seq[:n]

print(fibonacci(10))`,
        bash: `#!/bin/bash
# 部署脚本
set -e

echo "开始构建..."
npm run build

echo "上传到服务器..."
rsync -avz dist/ user@server:/var/www/app/

echo "部署完成 ✅"`,
        css: `/* CSS 示例 */
.vai-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.vai-button:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}`,
        json: `{
  "name": "@tom1612/vai-ui",
  "version": "1.0.0",
  "description": "AI 专属 Vue 3 UI 组件库",
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "dependencies": {
    "shiki": "^1.0.0",
    "markdown-it": "^14.0.0"
  }
}`,
        vue: `<template>
  <VaiAiChat
    title="我的 AI 助手"
    :on-request="handleRequest"
    :streaming="true"
    @send="onSend"
    @abort="onAbort"
  />
</template>

<script setup>
function handleRequest(message, { onChunk, onComplete, onError }) {
  // 接入真实 API...
  onChunk('Hello from AI!')
  onComplete()
}
<\/script>`
      }
    }
  }
}
</script>

<style scoped>
.demo-wrap { display: flex; flex-direction: column; gap: 12px; }
.demo-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.demo-controls label { font-size: 14px; color: var(--vai-text-color-regular); }
.theme-btn {
  padding: 4px 12px;
  font-size: 13px;
  border: 1px solid var(--vai-border-color);
  border-radius: 4px;
  cursor: pointer;
  background: #fff;
  transition: all 0.2s;
}
.theme-btn.active {
  background: var(--vai-color-primary);
  color: #fff;
  border-color: var(--vai-color-primary);
}
.demo-controls select {
  padding: 4px 8px;
  font-size: 13px;
  border: 1px solid var(--vai-border-color);
  border-radius: 4px;
}
</style>
