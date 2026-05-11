<template>
  <div class="demo-actions">
    <h4>悬浮显示（hover）</h4>
    <div class="bubble-wrap">
      <div class="fake-bubble">这是一条 AI 回复消息，悬停在此区域可看到操作栏。</div>
      <VaiActions
        :message-id="msg.id"
        :liked="msg.liked"
        :disliked="msg.disliked"
        placement="hover"
        @action="handleAction"
      />
    </div>

    <h4 style="margin-top:24px">始终显示（always）+ 自定义操作</h4>
    <div class="bubble-wrap">
      <div class="fake-bubble">这条消息的操作栏始终可见，并追加了「分享」自定义按钮。</div>
      <VaiActions
        :message-id="msg2.id"
        :liked="msg2.liked"
        placement="always"
        :items="customItems"
        @action="handleAction2"
      />
    </div>

    <div v-if="lastAction" class="action-log">
      最近操作：<code>{{ JSON.stringify(lastAction) }}</code>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: { id: 'msg-1', liked: false, disliked: false },
      msg2: { id: 'msg-2', liked: true },
      customItems: [
        {
          type: 'share',
          label: '分享',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
        },
      ],
      lastAction: null,
    }
  },
  methods: {
    handleAction(e) {
      this.lastAction = e
      if (e.type === 'like') this.msg.liked = !this.msg.liked
      if (e.type === 'dislike') this.msg.disliked = !this.msg.disliked
    },
    handleAction2(e) {
      this.lastAction = e
    },
  },
}
</script>

<style scoped>
.demo-actions {
  padding: 16px;
}
.demo-actions h4 {
  font-size: 13px;
  color: #666;
  margin: 0 0 8px;
  font-weight: 500;
}
.bubble-wrap {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.fake-bubble {
  max-width: 400px;
  padding: 10px 14px;
  background: #f0f7ff;
  border-radius: 8px;
  font-size: 14px;
  color: #1a1a1a;
}
.action-log {
  margin-top: 16px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 6px;
  font-size: 12px;
  color: #555;
}
</style>
