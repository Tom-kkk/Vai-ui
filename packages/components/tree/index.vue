<template>
  <div class="vai-tree">
    <tree-node
      v-for="node in data"
      :key="node.id"
      :node="node"
      :show-checkbox="showCheckbox"
    />
  </div>
</template>

<script>
import TreeNode from './TreeNode.vue'
export default {
  name: 'VaiTree',
  components: { TreeNode },
  props: {
    data: { type: Array, default: () => [] },
    showCheckbox: Boolean
  }
}
</script>

<style scoped>
.vai-tree { font-size: 14px; color: var(--vai-text-color-regular); }
</style>
