<template>
  <div class="demo-conversations">
    <div class="conv-container">
      <VaiConversations
        :items="items"
        :active-id="activeId"
        :searchable="true"
        @select="handleSelect"
        @new="handleNew"
        @rename="handleRename"
        @delete="handleDelete"
        @pin="handlePin"
      />
    </div>
    <div class="log-panel">
      <div class="log-title">事件日志</div>
      <div v-for="(log, i) in logs" :key="i" class="log-item">{{ log }}</div>
      <div v-if="!logs.length" class="log-empty">（暂无操作）</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeId: '1',
      items: [
        { id: '1', title: '如何优化 Vue 3 性能', time: '10:30', pinned: true },
        { id: '2', title: 'CSS Grid 布局完整指南', time: '昨天' },
        { id: '3', title: 'TypeScript 泛型详解', time: '昨天' },
        { id: '4', title: 'Node.js 流式数据处理', time: '周一' },
        { id: '5', title: 'WebSocket 实时通信方案', time: '上周' },
      ],
      logs: [],
    }
  },
  methods: {
    addLog(msg) {
      this.logs.unshift(msg)
      if (this.logs.length > 10) this.logs.pop()
    },
    handleSelect(id) {
      this.activeId = id
      this.addLog(`select: ${id}`)
    },
    handleNew() {
      const newId = String(Date.now())
      this.items.unshift({ id: newId, title: '新对话', time: '刚刚' })
      this.activeId = newId
      this.addLog('new conversation created')
    },
    handleRename(id, newTitle) {
      const item = this.items.find((i) => i.id === id)
      if (item) item.title = newTitle
      this.addLog(`rename: ${id} → "${newTitle}"`)
    },
    handleDelete(id) {
      this.items = this.items.filter((i) => i.id !== id)
      this.addLog(`delete: ${id}`)
    },
    handlePin(id, pinned) {
      const item = this.items.find((i) => i.id === id)
      if (item) item.pinned = pinned
      this.addLog(`pin: ${id} = ${pinned}`)
    },
  },
}
</script>

<style scoped>
.demo-conversations {
  display: flex;
  gap: 16px;
  height: 400px;
}
.conv-container {
  width: 240px;
  flex-shrink: 0;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
}
.log-panel {
  flex: 1;
  padding: 12px;
  background: #fafafa;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  overflow-y: auto;
}
.log-title {
  font-size: 12px;
  font-weight: 600;
  color: #888;
  margin-bottom: 8px;
}
.log-item {
  font-size: 12px;
  color: #555;
  padding: 3px 0;
  border-bottom: 1px solid #f0f0f0;
  font-family: monospace;
}
.log-empty {
  font-size: 12px;
  color: #bbb;
}
</style>
