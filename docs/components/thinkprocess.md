# ThinkProcess 思考过程

展示 AI 思考过程的组件，支持步骤展示、折叠展开等功能。

## 基础用法

<demo vue="../../packages/components/thinkprocess/index.vue" />

```vue
<template>
  <vai-think-process :steps="steps" />
  
  <!-- 默认展开 -->
  <vai-think-process :steps="steps" default-expanded />
  
  <!-- 可折叠 -->
  <vai-think-process 
    :steps="steps" 
    collapsible
    @expand="handleExpand"
  />
</template>

<script setup>
const steps = [
  {
    id: 1,
    title: '理解问题',
    content: '我需要分析用户提出的问题...',
    status: 'completed',
    duration: '2s'
  },
  {
    id: 2,
    title: '分析代码',
    content: '正在检查代码结构和逻辑...',
    status: 'processing',
    duration: '5s'
  },
  {
    id: 3,
    title: '生成建议',
    content: '基于分析结果生成优化建议...',
    status: 'pending',
    duration: '3s'
  }
]
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| steps | 思考步骤列表 | `Step[]` | `[]` |
| defaultExpanded | 是否默认展开 | `boolean` | `false` |
| collapsible | 是否可折叠 | `boolean` | `true` |
| showDuration | 是否显示执行时间 | `boolean` | `true` |
| maxHeight | 展开时的最大高度 | `string \| number` | `'400px'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| expand | 展开时触发 | `(expanded: boolean) => void` |
| stepClick | 点击步骤时触发 | `(step: Step) => void` |

### Step 类型

```typescript
interface Step {
  id: number | string
  title: string
  content: string
  status: 'pending' | 'processing' | 'completed' | 'error'
  duration?: string
  timestamp?: number
  details?: string
}
```

## 示例

### 代码分析场景

```vue
<template>
  <vai-think-process 
    :steps="analysisSteps"
    default-expanded
    :show-duration="true"
  >
    <template #step-details="{ step }">
      <div v-if="step.details" class="step-details">
        <pre><code>{{ step.details }}</code></pre>
      </div>
    </template>
  </vai-think-process>
</template>

<script setup>
const analysisSteps = ref([
  {
    id: 1,
    title: '代码结构分析',
    content: '分析文件结构、导入导出关系',
    status: 'completed',
    duration: '1.2s',
    details: `
src/
├── components/
│   ├── Button.vue
│   └── Input.vue
└── utils/
    └── helpers.js
    `
  },
  {
    id: 2,
    title: '依赖检查',
    content: '检查组件依赖关系和循环引用',
    status: 'processing',
    duration: '2.1s'
  },
  {
    id: 3,
    title: '性能分析',
    content: '分析组件渲染性能和优化建议',
    status: 'pending'
  }
])
</script>

<style>
.step-details {
  margin-top: 12px;
  padding: 12px;
  background: #f6f6f6;
  border-radius: 6px;
}

.step-details pre {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
}
</style>
```

### 复杂问题分解

```vue
<template>
  <div class="problem-solving">
    <h3>问题解决流程</h3>
    <vai-think-process 
      :steps="problemSteps"
      collapsible
      @step-click="handleStepClick"
    >
      <template #step-icon="{ step }">
        <span v-if="step.status === 'completed'" class="check-icon">✓</span>
        <span v-else-if="step.status === 'processing'" class="loading-icon">⏳</span>
        <span v-else-if="step.status === 'error'" class="error-icon">✗</span>
        <span v-else class="pending-icon">○</span>
      </template>
    </vai-think-process>
  </div>
</template>

<script setup>
const problemSteps = ref([
  {
    id: 'analyze',
    title: '问题分析',
    content: '拆解复杂问题，识别关键要素',
    status: 'completed',
    details: '识别出3个主要问题点'
  },
  {
    id: 'research',
    title: '资料调研',
    content: '查找相关文档和最佳实践',
    status: 'completed',
    details: '查阅了5个相关文档'
  },
  {
    id: 'design',
    title: '方案设计',
    content: '设计解决方案的技术架构',
    status: 'processing',
    details: '正在设计架构图...'
  },
  {
    id: 'implement',
    title: '方案实施',
    content: '实现解决方案',
    status: 'pending'
  },
  {
    id: 'validate',
    title: '效果验证',
    content: '验证方案的有效性',
    status: 'pending'
  }
])

const handleStepClick = (step) => {
  console.log('点击步骤:', step)
}
</script>

<style>
.problem-solving {
  max-width: 800px;
  margin: 0 auto;
}

.check-icon { color: #52c41a; }
.error-icon { color: #ff4d4f; }
.loading-icon { color: #1890ff; }
.pending-icon { color: #d9d9d9; }
</style>
```

### 自定义样式

```vue
<template>
  <vai-think-process 
    :steps="customSteps"
    :custom-class="'custom-think-process'"
  >
    <template #step-content="{ step, index }">
      <div class="custom-step-content">
        <div class="step-header">
          <span class="step-number">步骤 {{ index + 1 }}</span>
          <span class="step-status" :class="step.status">
            {{ getStatusText(step.status) }}
          </span>
        </div>
        <div class="step-body">
          <h4>{{ step.title }}</h4>
          <p>{{ step.content }}</p>
        </div>
      </div>
    </template>
  </vai-think-process>
</template>

<script setup>
const customSteps = [
  {
    id: 1,
    title: '数据收集',
    content: '收集相关数据和资料',
    status: 'completed'
  },
  {
    id: 2,
    title: '数据处理',
    content: '清洗和处理收集到的数据',
    status: 'processing'
  },
  {
    id: 3,
    title: '结果分析',
    content: '分析处理后的结果',
    status: 'pending'
  }
]

const getStatusText = (status) => {
  const statusMap = {
    completed: '已完成',
    processing: '进行中',
    pending: '待处理',
    error: '出错'
  }
  return statusMap[status] || status
}
</script>

<style>
.custom-think-process {
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
}

.custom-step-content {
  padding: 16px;
}

.step-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.step-number {
  font-weight: 500;
  color: #666;
}

.step-status.completed { color: #52c41a; }
.step-status.processing { color: #1890ff; }
.step-status.pending { color: #d9d9d9; }
.step-status.error { color: #ff4d4f; }

.step-body h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
}

.step-body p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}
</style>
```