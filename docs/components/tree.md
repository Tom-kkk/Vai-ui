# Tree 树形控件

树形结构展示组件，支持展开折叠、选择等功能。

## 基础用法

<demo vue="../../packages/components/tree/index.vue" />

```vue
<template>
  <vai-tree 
    :data="treeData"
    :default-expanded-keys="['1', '2']"
    @select="handleSelect"
  />
</template>

<script setup>
const treeData = [
  {
    key: '1',
    title: '节点1',
    children: [
      {
        key: '1-1',
        title: '子节点1'
      }
    ]
  },
  {
    key: '2',
    title: '节点2'
  }
]

const handleSelect = (keys, info) => {
  console.log('选中的节点:', keys)
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| data | 树形数据 | `TreeNode[]` | `[]` |
| defaultExpandedKeys | 默认展开的节点 | `string[]` | `[]` |
| defaultSelectedKeys | 默认选中的节点 | `string[]` | `[]` |
| checkable | 是否显示复选框 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| select | 选择事件 | `(keys: string[], info: any) => void` |
| expand | 展开/折叠事件 | `(keys: string[], info: any) => void` |