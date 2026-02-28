<template>
  <div ref="container" class="vai-virtuallist" :style="{ height: `${height}px` }" @scroll="onScroll">
    <div class="phantom" :style="{ height: `${totalHeight}px` }"></div>
    <div class="content" :style="{ transform: `translateY(${offsetY}px)` }">
      <div
        v-for="(item, index) in visibleData"
        :key="getKey(item, startIndex + index)"
        class="item"
        :style="{ height: `${itemHeight}px` }"
      >
        <slot :item="item" :index="startIndex + index">{{ item }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaiVirtualList',
  props: {
    data: { type: Array, required: true },
    height: { type: Number, default: 600 },
    itemHeight: { type: Number, default: 50 },
    bufferSize: { type: Number, default: 5 },
    itemKey: { type: [String, Function], default: 'id' }
  },
  data() {
    return { scrollTop: 0 }
  },
  computed: {
    startIndex() {
      const index = Math.floor(this.scrollTop / this.itemHeight)
      return Math.max(0, index - this.bufferSize)
    },
    endIndex() {
      const index = Math.ceil((this.scrollTop + this.height) / this.itemHeight)
      return Math.min(this.data.length - 1, index + this.bufferSize)
    },
    visibleData() {
      return this.data.slice(this.startIndex, this.endIndex + 1)
    },
    offsetY() {
      return this.startIndex * this.itemHeight
    },
    totalHeight() {
      return this.data.length * this.itemHeight
    }
  },
  methods: {
    onScroll(e) {
      requestAnimationFrame(() => {
        this.scrollTop = e.target.scrollTop
      })
    },
    getKey(item, index) {
      if (typeof this.itemKey === 'function') return this.itemKey(item, index)
      return item[this.itemKey] ?? index
    }
  }
}
</script>

<style scoped>
.vai-virtuallist {
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
}
.vai-virtuallist::-webkit-scrollbar { width: 8px; }
.vai-virtuallist::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 4px; }
.vai-virtuallist::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
.vai-virtuallist::-webkit-scrollbar-thumb:hover { background: #555; }
.phantom {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  will-change: transform;
}
.item { box-sizing: border-box; }
</style>
