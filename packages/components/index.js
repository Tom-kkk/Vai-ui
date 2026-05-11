import VaiButton from './button/index.vue'
import VaiActions from './actions/index.vue'
import VaiConversations from './conversations/index.vue'
import VaiWelcome from './welcome/index.vue'
import VaiSources from './sources/index.vue'
import VaiProvider from './provider/index.vue'
import VaiTree from './tree/index.vue'
import VaiDatePicker from './datepicker/index.vue'
import VaiPageHeader from './pageheader/index.vue'
import VaiAiChat from './aichat/index.vue'
import VaiBubble from './bubble/index.vue'
import VaiBubbleList from './bubble-list/index.vue'
import VaiSender from './sender/index.vue'
import VaiVirtualList from './virtuallist/index.vue'
import VaiSkeleton from './skeleton/index.vue'
import VaiTypingBubble from './typingbubble/index.vue'
import VaiThinkProcess from './thinkprocess/index.vue'
import VaiAttachments from './attachments/index.vue'
import VaiSuggestion from './suggestion/index.vue'
import VaiFileCard from './filecard/index.vue'
import VaiCodeHighlighter from './codehighlighter/index.vue'

const install = (app) => {
  app.component('VaiActions', VaiActions)
  app.component('VaiConversations', VaiConversations)
  app.component('VaiWelcome', VaiWelcome)
  app.component('VaiSources', VaiSources)
  app.component('VaiProvider', VaiProvider)
  app.component('VaiButton', VaiButton)
  app.component('VaiTree', VaiTree)
  app.component('VaiDatePicker', VaiDatePicker)
  app.component('VaiPageHeader', VaiPageHeader)
  app.component('VaiAiChat', VaiAiChat)
  app.component('VaiBubble', VaiBubble)
  app.component('VaiBubbleList', VaiBubbleList)
  app.component('VaiSender', VaiSender)
  app.component('VaiVirtualList', VaiVirtualList)
  app.component('VaiSkeleton', VaiSkeleton)
  app.component('VaiTypingBubble', VaiTypingBubble)
  app.component('VaiThinkProcess', VaiThinkProcess)
  app.component('VaiAttachments', VaiAttachments)
  app.component('VaiSuggestion', VaiSuggestion)
  app.component('VaiFileCard', VaiFileCard)
  app.component('VaiCodeHighlighter', VaiCodeHighlighter)
}

export {
  VaiActions,
  VaiConversations,
  VaiWelcome,
  VaiSources,
  VaiProvider,
  VaiButton,
  VaiTree,
  VaiDatePicker,
  VaiPageHeader,
  VaiAiChat,
  VaiBubble,
  VaiBubbleList,
  VaiSender,
  VaiVirtualList,
  VaiSkeleton,
  VaiTypingBubble,
  VaiThinkProcess,
  VaiAttachments,
  VaiSuggestion,
  VaiFileCard,
  VaiCodeHighlighter
}

export default { install, version: '1.0.0' }
