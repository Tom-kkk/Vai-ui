<template>
  <div class="demo-sources">
    <div class="controls">
      <label>
        <input type="checkbox" v-model="numbered" /> 显示编号
      </label>
      <label>
        预览条数：
        <select v-model.number="previewCount">
          <option :value="2">2</option>
          <option :value="3">3（默认）</option>
          <option :value="5">5</option>
        </select>
      </label>
    </div>

    <VaiSources
      :sources="sources"
      :preview-count="previewCount"
      :numbered="numbered"
      @source-click="handleClick"
    />

    <div v-if="clicked" class="click-log">
      已点击：<strong>{{ clicked.title }}</strong>
      <span class="domain">{{ clicked.url }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbered: false,
      previewCount: 3,
      clicked: null,
      sources: [
        {
          id: 1,
          title: 'Vue 3 官方文档 - 组合式 API',
          url: 'https://cn.vuejs.org/guide/extras/composition-api-faq',
          snippet: '组合式 API (Composition API) 是一系列 API 的集合，使我们可以使用函数而不是声明选项的方式书写 Vue 组件。',
        },
        {
          id: 2,
          title: 'MDN Web Docs - CSS Grid Layout',
          url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout',
          snippet: 'CSS 网格布局擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系。',
        },
        {
          id: 3,
          title: 'GitHub - vuejs/core',
          url: 'https://github.com/vuejs/core',
          snippet: 'This is the monorepo for Vue 3. It contains packages that are intended to be used together.',
        },
        {
          id: 4,
          title: 'Ant Design X - AI Components',
          url: 'https://x.ant.design',
          snippet: '面向 AI 交互场景设计的 React 组件库，提供对话、思考、操作等专属组件。',
        },
        {
          id: 5,
          title: 'TypeScript Handbook',
          url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
          snippet: 'TypeScript is a strongly typed programming language that builds on JavaScript.',
        },
      ],
    }
  },
  methods: {
    handleClick(source) {
      this.clicked = source
    },
  },
}
</script>

<style scoped>
.demo-sources {
  padding: 16px;
  max-width: 520px;
}
.controls {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
  font-size: 13px;
  color: #555;
}
.controls select {
  margin-left: 4px;
  padding: 2px 6px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 13px;
}
.click-log {
  margin-top: 12px;
  padding: 8px 12px;
  background: #f0f7ff;
  border-radius: 6px;
  font-size: 13px;
  color: #1677ff;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.domain {
  font-size: 11px;
  color: #888;
  word-break: break-all;
}
</style>
