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
  gap: 14px;
  padding: 4px 0;
  font-family: var(--vai-font-family);
}

.skeleton-avatar {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}
.skeleton-avatar-circle { border-radius: 50%; }
.skeleton-avatar-square { border-radius: var(--vai-radius-sm); }

.skeleton-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skeleton-title,
.skeleton-row {
  height: 14px;
  border-radius: var(--vai-radius-full);
}
.skeleton-title {
  height: 18px;
  width: 40%;
}

/* Shimmer animation using CSS custom property for color */
.skeleton-title,
.skeleton-row,
.skeleton-avatar {
  background: linear-gradient(
    90deg,
    var(--vai-fill-color) 0%,
    var(--vai-border-color) 40%,
    var(--vai-fill-color) 80%
  );
  background-size: 300% 100%;
  animation: skeleton-shimmer 1.8s ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  0%   { background-position: 100% 50%; }
  100% { background-position: -100% 50%; }
}
</style>
