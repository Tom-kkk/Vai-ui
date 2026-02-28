<template>
  <div class="vai-skeleton">
    <div v-if="avatar" class="skeleton-avatar" :class="`skeleton-avatar-${avatarShape}`"></div>
    <div class="skeleton-content">
      <div v-if="title" class="skeleton-title" :style="{ width: titleWidth }"></div>
      <div v-for="i in rows" :key="i" class="skeleton-row" :style="getRowStyle(i)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaiSkeleton',
  props: {
    avatar: { type: Boolean, default: false },
    avatarShape: { type: String, default: 'circle' }, // circle, square
    title: { type: Boolean, default: true },
    titleWidth: { type: String, default: '40%' },
    rows: { type: Number, default: 3 },
    loading: { type: Boolean, default: true }
  },
  methods: {
    getRowStyle(index) {
      const widths = ['100%', '90%', '80%', '70%', '60%']
      return { width: widths[index - 1] || '100%' }
    }
  }
}
</script>

<style scoped>
.vai-skeleton {
  display: flex;
  gap: 16px;
  padding: 16px;
}

.skeleton-avatar {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
}

.skeleton-avatar-circle {
  border-radius: 50%;
}

.skeleton-avatar-square {
  border-radius: 4px;
}

.skeleton-content {
  flex: 1;
}

.skeleton-title,
.skeleton-row {
  height: 16px;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: skeleton-loading 1.5s ease-in-out infinite;
}

.skeleton-title {
  height: 20px;
  margin-bottom: 16px;
}

.skeleton-row:last-child {
  margin-bottom: 0;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
