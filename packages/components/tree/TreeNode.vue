<template>
  <div class="tree-node">
    <div class="node-content" @click="handleClick">
      <span class="expand" @click.stop="toggleExpand">
        <span v-if="hasChildren">{{ expanded ? '▼' : '▶' }}</span>
      </span>
      <input v-if="showCheckbox" type="checkbox" @click.stop />
      <span class="label">{{ node.label }}</span>
    </div>
    <div v-if="expanded && hasChildren" class="children">
      <tree-node
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        :show-checkbox="showCheckbox"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    node: Object,
    showCheckbox: Boolean
  },
  data() {
    return { expanded: false }
  },
  computed: {
    hasChildren() {
      return this.node.children && this.node.children.length > 0
    }
  },
  methods: {
    toggleExpand() {
      if (this.hasChildren) this.expanded = !this.expanded
    },
    handleClick() {
      this.$parent.$emit('node-click', this.node)
    }
  }
}
</script>

<style scoped>
.tree-node { white-space: nowrap; }
.node-content {
  display: flex;
  align-items: center;
  height: 32px;
  padding-right: 8px;
  cursor: pointer;
}
.node-content:hover { background: var(--vai-fill-color-light); }
.expand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 12px;
  cursor: pointer;
}
.label { padding: 0 8px; font-size: 14px; }
.children { padding-left: 20px; }
</style>
