# Skeleton 骨架屏

骨架屏组件，用于在内容加载时显示占位效果，提升用户体验。

## 基础用法

<demo vue="../../packages/components/skeleton/index.vue" />

```vue
<template>
  <!-- 基础骨架屏 -->
  <vai-skeleton />
  
  <!-- 带头像的骨架屏 -->
  <vai-skeleton avatar />
  
  <!-- 自定义行数 -->
  <vai-skeleton :rows="4" />
  
  <!-- 完整配置 -->
  <vai-skeleton 
    avatar 
    :rows="3" 
    :loading="loading"
    animated
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| loading | 是否显示骨架屏 | `boolean` | `true` |
| active | 是否显示动画效果 | `boolean` | `true` |
| avatar | 是否显示头像占位 | `boolean` | `false` |
| rows | 段落占位行数 | `number` | `3` |
| width | 自定义宽度 | `string \| number` | `-` |
| height | 自定义高度 | `string \| number` | `-` |

## 示例

### 文章骨架屏

```vue
<template>
  <div class="article-skeleton">
    <vai-skeleton avatar :rows="5" />
  </div>
</template>

<style>
.article-skeleton {
  padding: 20px;
  border-radius: 8px;
  background: #fff;
}
</style>
```

### 卡片骨架屏

```vue
<template>
  <div class="card">
    <vai-skeleton 
      avatar 
      :rows="2"
      :row-width="['100%', '60%']"
    />
  </div>
</template>

<style>
.card {
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
}
</style>
```

### 列表骨架屏

```vue
<template>
  <div class="list">
    <div v-for="i in 3" :key="i" class="list-item">
      <vai-skeleton avatar :rows="2" />
    </div>
  </div>
</template>

<style>
.list-item {
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}
</style>
```

## 自定义样式

```vue
<template>
  <vai-skeleton>
    <template #template>
      <div class="custom-skeleton">
        <div class="avatar"></div>
        <div class="content">
          <div class="title"></div>
          <div class="description"></div>
        </div>
      </div>
    </template>
  </vai-skeleton>
</template>

<style>
.custom-skeleton {
  display: flex;
  gap: 16px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 50%, #f2f2f2 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

.title {
  height: 16px;
  width: 200px;
  margin-bottom: 8px;
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 50%, #f2f2f2 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

.description {
  height: 14px;
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 50%, #f2f2f2 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
```