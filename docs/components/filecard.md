# FileCard 文件卡片

文件展示卡片组件，支持文件预览、下载、进度显示等。

## 基础用法

<demo vue="../../packages/components/filecard/index.vue" />

```vue
<template>
  <vai-file-card
    name="document.pdf"
    size="2.5 MB"
    type="pdf"
    :tags="['重要', '工作']"
    show-progress
    :progress="68"
    @download="handleDownload"
    @delete="handleDelete"
  />
</template>

<script setup>
const handleDownload = (file) => {
  console.log('下载文件:', file)
}

const handleDelete = (file) => {
  console.log('删除文件:', file)
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 文件名 | `string` | `-` |
| size | 文件大小 | `string` | `-` |
| type | 文件类型 | `string` | `-` |
| tags | 文件标签 | `string[]` | `[]` |
| showProgress | 是否显示进度 | `boolean` | `false` |
| progress | 上传进度 | `number` | `0` |
| deletable | 是否可删除 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| download | 下载事件 | `(file: any) => void` |
| delete | 删除事件 | `(file: any) => void` |
| preview | 预览事件 | `(file: any) => void` |