<template>
  <div class="tree-node">
    <div class="node-content" @click="handleClick">
      <span class="expand" @click.stop="toggleExpand">
        <svg v-if="hasChildren" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" :style="{ transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }"><polyline points="9 18 15 12 9 6"/></svg>
        <span v-else class="no-children"></span>
      </span>
      <input v-if="showCheckbox" type="checkbox" class="node-checkbox" @click.stop />
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
  padding: 0 6px 0 0;
  cursor: pointer;
  border-radius: var(--vai-radius-sm);
  transition: var(--vai-transition-fast);
}
.node-content:hover {
  background: var(--vai-fill-color-hover);
}
.expand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: var(--vai-text-color-tertiary);
  border-radius: var(--vai-radius-xs);
}
.expand:hover { color: var(--vai-color-primary); }
.no-children { display: inline-block; width: 12px; }
.node-checkbox {
  margin: 0 6px 0 2px;
  accent-color: var(--vai-color-primary);
  cursor: pointer;
}
.label {
  padding: 0 6px;
  font-size: var(--vai-font-size-base);
  color: var(--vai-text-color-primary);
  line-height: 1.4;
}
.children {
  padding-left: 18px;
  margin-top: 1px;
  border-left: 1.5px solid var(--vai-border-color);
  margin-left: 10px;
}
</style>
