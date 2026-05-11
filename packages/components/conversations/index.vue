<template>
  <div class="vai-conversations" @click="closeMenu">
    <div class="conv-header">
      <button
        v-if="showNewButton"
        class="new-btn"
        :title="locale.newConversation"
        @click.stop="$emit('new')"
      >
        <span class="new-btn-icon" v-html="icons.plus"></span>
        {{ locale.newConversation }}
      </button>
    </div>

    <div v-if="searchable" class="search-bar">
      <span class="search-icon" v-html="icons.search"></span>
      <input
        v-model="searchQuery"
        class="search-input"
        :placeholder="locale.searchPlaceholder"
        @click.stop
      />
    </div>

    <div class="conv-list">
      <template v-if="pinnedItems.length">
        <div class="group-label">{{ locale.pinned }}</div>
        <div
          v-for="item in pinnedItems"
          :key="item.id"
          class="conversation-item"
          :class="{ 'is-active': item.id === resolvedActiveId, 'is-renaming': renamingId === item.id }"
          @click.stop="handleSelect(item.id)"
          @contextmenu.prevent="openMenu($event, item.id)"
        >
          <template v-if="renamingId === item.id">
            <input
              ref="renameInput"
              v-model="renameValue"
              class="rename-input"
              @click.stop
              @keydown.enter.prevent="confirmRename"
              @keydown.esc.prevent="cancelRename"
              @blur="confirmRename"
            />
          </template>
          <template v-else>
            <span class="item-pin" v-html="icons.pin"></span>
            <span class="item-title" v-html="highlightTitle(item.title)"></span>
            <span v-if="item.time" class="item-time">{{ item.time }}</span>
            <button class="item-menu-btn" :title="locale.more" @click.stop="openMenu($event, item.id)">
              <span v-html="icons.more"></span>
            </button>
          </template>
        </div>
        <div class="group-divider"></div>
      </template>

      <template v-if="normalItems.length">
        <div v-if="pinnedItems.length" class="group-label">{{ locale.recent }}</div>
        <div
          v-for="item in normalItems"
          :key="item.id"
          class="conversation-item"
          :class="{ 'is-active': item.id === resolvedActiveId, 'is-renaming': renamingId === item.id }"
          @click.stop="handleSelect(item.id)"
          @contextmenu.prevent="openMenu($event, item.id)"
        >
          <template v-if="renamingId === item.id">
            <input
              ref="renameInput"
              v-model="renameValue"
              class="rename-input"
              @click.stop
              @keydown.enter.prevent="confirmRename"
              @keydown.esc.prevent="cancelRename"
              @blur="confirmRename"
            />
          </template>
          <template v-else>
            <span class="item-title" v-html="highlightTitle(item.title)"></span>
            <span v-if="item.time" class="item-time">{{ item.time }}</span>
            <button class="item-menu-btn" :title="locale.more" @click.stop="openMenu($event, item.id)">
              <span v-html="icons.more"></span>
            </button>
          </template>
        </div>
      </template>

      <div v-if="filteredItems.length === 0" class="empty-state">
        {{ locale.noResults }}
      </div>
    </div>

    <div
      v-show="menuVisible"
      class="action-menu"
      :style="{ top: menuPosition.top + 'px', left: menuPosition.left + 'px' }"
      @click.stop
    >
      <button class="menu-item" @click="handleMenuAction('rename')">
        <span v-html="icons.edit"></span>{{ locale.rename }}
      </button>
      <button class="menu-item" @click="handleMenuAction('pin')">
        <span v-html="icons.pin"></span>{{ menuTargetPinned ? locale.unpin : locale.pin }}
      </button>
      <button class="menu-item menu-item--danger" @click="handleMenuAction('delete')">
        <span v-html="icons.trash"></span>{{ locale.delete }}
      </button>
    </div>
  </div>
</template>

<script>
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const ICONS = {
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  more: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6m4-6v6"/><path d="M9 6V4h6v2"/></svg>`,
}

const ZH = {
  newConversation: '新建对话',
  searchPlaceholder: '搜索对话...',
  pinned: '已置顶',
  recent: '最近',
  noResults: '暂无对话',
  more: '更多',
  rename: '重命名',
  pin: '置顶',
  unpin: '取消置顶',
  delete: '删除',
}

const EN = {
  newConversation: 'New Chat',
  searchPlaceholder: 'Search...',
  pinned: 'Pinned',
  recent: 'Recent',
  noResults: 'No conversations',
  more: 'More',
  rename: 'Rename',
  pin: 'Pin',
  unpin: 'Unpin',
  delete: 'Delete',
}

export default {
  name: 'VaiConversations',

  inject: {
    vaiConfig: {
      default: () => ({ locale: 'zh-CN', theme: 'light', request: null }),
    },
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    activeId: {
      type: [String, Number],
      default: null,
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    showNewButton: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['select', 'new', 'rename', 'delete', 'pin'],

  data() {
    return {
      searchQuery: '',
      menuVisible: false,
      menuTargetId: null,
      menuPosition: { top: 0, left: 0 },
      renamingId: null,
      renameValue: '',
      icons: ICONS,
    }
  },

  computed: {
    locale() {
      const lang = this.vaiConfig?.locale || 'zh-CN'
      return lang === 'en-US' ? EN : ZH
    },

    filteredItems() {
      if (!this.searchQuery.trim()) return this.items
      const q = this.searchQuery.toLowerCase()
      return this.items.filter((item) => item.title.toLowerCase().includes(q))
    },

    pinnedItems() {
      return this.filteredItems.filter((item) => item.pinned)
    },

    normalItems() {
      return this.filteredItems.filter((item) => !item.pinned)
    },

    resolvedActiveId() {
      if (this.activeId !== null) return this.activeId
      const active = this.items.find((i) => i.active)
      return active ? active.id : null
    },

    menuTargetPinned() {
      const item = this.items.find((i) => i.id === this.menuTargetId)
      return item ? item.pinned : false
    },
  },

  methods: {
    highlightTitle(title) {
      const q = this.searchQuery.trim()
      if (!q) return escapeHtml(title)
      const escaped = escapeHtml(title)
      const escapedQ = escapeHtml(q)
      const re = new RegExp(`(${escapedQ.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
      return escaped.replace(re, '<mark>$1</mark>')
    },

    handleSelect(id) {
      this.closeMenu()
      this.$emit('select', id)
    },

    openMenu(event, id) {
      this.menuTargetId = id
      const rect = event.currentTarget.getBoundingClientRect
        ? event.currentTarget.getBoundingClientRect()
        : { bottom: event.clientY, left: event.clientX }
      const containerRect = this.$el.getBoundingClientRect()
      this.menuPosition = {
        top: event.clientY - containerRect.top,
        left: Math.min(event.clientX - containerRect.left, containerRect.width - 140),
      }
      this.menuVisible = true
    },

    closeMenu() {
      this.menuVisible = false
      this.menuTargetId = null
    },

    handleMenuAction(action) {
      const id = this.menuTargetId
      this.closeMenu()
      if (action === 'rename') {
        const item = this.items.find((i) => i.id === id)
        this.renameValue = item ? item.title : ''
        this.renamingId = id
        this.$nextTick(() => {
          const input = this.$refs.renameInput
          if (input) {
            const el = Array.isArray(input) ? input[0] : input
            if (el) el.focus()
          }
        })
      } else if (action === 'delete') {
        this.$emit('delete', id)
      } else if (action === 'pin') {
        this.$emit('pin', id, !this.menuTargetPinned)
      }
    },

    confirmRename() {
      const id = this.renamingId
      const val = this.renameValue.trim()
      this.renamingId = null
      if (val) this.$emit('rename', id, val)
    },

    cancelRename() {
      this.renamingId = null
    },
  },
}
</script>

<style scoped>
.vai-conversations {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--vai-bg-container, #fff);
  font-size: var(--vai-font-size-base, 14px);
  font-family: var(--vai-font-family, sans-serif);
  color: var(--vai-text-color-primary, #1a1a1a);
  user-select: none;
}

.conv-header {
  padding: var(--vai-spacing-sm, 8px) var(--vai-spacing-md, 12px);
}

.new-btn {
  display: flex;
  align-items: center;
  gap: var(--vai-spacing-xs, 4px);
  width: 100%;
  padding: var(--vai-spacing-xs, 6px) var(--vai-spacing-sm, 8px);
  border: 1px dashed var(--vai-border-color, #d9d9d9);
  border-radius: var(--vai-radius-md, 6px);
  background: transparent;
  color: var(--vai-text-color-secondary, #666);
  cursor: pointer;
  font-size: 13px;
  transition: border-color var(--vai-transition-fast, 0.15s), color var(--vai-transition-fast, 0.15s);
}

.new-btn:hover {
  border-color: var(--vai-color-primary, #1677ff);
  color: var(--vai-color-primary, #1677ff);
}

.new-btn-icon {
  display: inline-flex;
  width: 14px;
  height: 14px;
}

.new-btn-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: var(--vai-spacing-xs, 4px);
  margin: 0 var(--vai-spacing-md, 12px) var(--vai-spacing-sm, 8px);
  padding: 6px var(--vai-spacing-sm, 8px);
  border: 1px solid var(--vai-border-color, #d9d9d9);
  border-radius: var(--vai-radius-md, 6px);
  background: var(--vai-fill-color-light, #f5f5f5);
}

.search-icon {
  display: inline-flex;
  width: 14px;
  height: 14px;
  color: var(--vai-text-color-secondary, #666);
  flex-shrink: 0;
}

.search-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 13px;
  color: var(--vai-text-color-primary, #1a1a1a);
}

.search-input::placeholder {
  color: var(--vai-text-color-placeholder, #bbb);
}

.conv-list {
  flex: 1;
  overflow-y: auto;
  padding: 0 var(--vai-spacing-xs, 4px) var(--vai-spacing-sm, 8px);
}

.group-label {
  padding: 6px var(--vai-spacing-sm, 8px) 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--vai-text-color-secondary, #888);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.group-divider {
  height: 1px;
  background: var(--vai-border-color-lighter, #f0f0f0);
  margin: var(--vai-spacing-xs, 4px) var(--vai-spacing-sm, 8px);
}

.conversation-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px var(--vai-spacing-sm, 8px);
  border-radius: var(--vai-radius-md, 6px);
  cursor: pointer;
  transition: background var(--vai-transition-fast, 0.15s);
}

.conversation-item:hover {
  background: var(--vai-fill-color-light, #f5f5f5);
}

.conversation-item.is-active {
  background: var(--vai-color-primary-bg, #e6f4ff);
  color: var(--vai-color-primary, #1677ff);
}

.conversation-item.is-renaming {
  background: var(--vai-fill-color-light, #f5f5f5);
}

.item-pin {
  display: inline-flex;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  color: var(--vai-color-primary, #1677ff);
  opacity: 0.6;
}

.item-pin :deep(svg) {
  width: 100%;
  height: 100%;
}

.item-title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
}

.item-title :deep(mark) {
  background: var(--vai-color-warning-bg, #fffbe6);
  color: var(--vai-color-warning, #faad14);
  border-radius: 2px;
  padding: 0 1px;
}

.item-time {
  font-size: 11px;
  color: var(--vai-text-color-secondary, #888);
  flex-shrink: 0;
}

.item-menu-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: var(--vai-radius-sm, 4px);
  background: transparent;
  color: var(--vai-text-color-secondary, #888);
  cursor: pointer;
  opacity: 0;
  transition: opacity var(--vai-transition-fast, 0.15s), background var(--vai-transition-fast, 0.15s);
  flex-shrink: 0;
}

.item-menu-btn :deep(svg) {
  width: 14px;
  height: 14px;
}

.conversation-item:hover .item-menu-btn {
  opacity: 1;
}

.item-menu-btn:hover {
  background: var(--vai-fill-color, #e8e8e8);
}

.rename-input {
  flex: 1;
  padding: 2px 6px;
  border: 1px solid var(--vai-color-primary, #1677ff);
  border-radius: var(--vai-radius-sm, 4px);
  background: var(--vai-bg-container, #fff);
  font-size: 13px;
  outline: none;
  color: var(--vai-text-color-primary, #1a1a1a);
}

.empty-state {
  padding: var(--vai-spacing-md, 16px) var(--vai-spacing-sm, 8px);
  text-align: center;
  color: var(--vai-text-color-secondary, #888);
  font-size: 13px;
}

.action-menu {
  position: absolute;
  z-index: var(--vai-z-dropdown, 1050);
  min-width: 130px;
  padding: var(--vai-spacing-xs, 4px);
  background: var(--vai-bg-container, #fff);
  border: 1px solid var(--vai-border-color, #d9d9d9);
  border-radius: var(--vai-radius-md, 6px);
  box-shadow: var(--vai-shadow-md, 0 4px 16px rgba(0,0,0,0.12));
}

.menu-item {
  display: flex;
  align-items: center;
  gap: var(--vai-spacing-xs, 4px);
  width: 100%;
  padding: 7px var(--vai-spacing-sm, 8px);
  border: none;
  border-radius: var(--vai-radius-sm, 4px);
  background: transparent;
  color: var(--vai-text-color-primary, #1a1a1a);
  font-size: 13px;
  cursor: pointer;
  text-align: left;
  transition: background var(--vai-transition-fast, 0.15s);
}

.menu-item :deep(span) {
  display: inline-flex;
  width: 14px;
  height: 14px;
}

.menu-item :deep(svg) {
  width: 100%;
  height: 100%;
}

.menu-item:hover {
  background: var(--vai-fill-color-light, #f5f5f5);
}

.menu-item--danger {
  color: var(--vai-color-danger, #ff4d4f);
}

.menu-item--danger:hover {
  background: var(--vai-color-danger-bg, #fff1f0);
}
</style>
