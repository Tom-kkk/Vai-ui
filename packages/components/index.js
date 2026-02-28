import VaiButton from './button/index.vue'
import VaiTree from './tree/index.vue'
import VaiDatePicker from './datepicker/index.vue'
import VaiPageHeader from './pageheader/index.vue'
import VaiAiChat from './aichat/index.vue'
import VaiVirtualList from './virtuallist/index.vue'
import VaiSkeleton from './skeleton/index.vue'
import VaiTypingBubble from './typingbubble/index.vue'
import VaiThinkProcess from './thinkprocess/index.vue'
import VaiAttachments from './attachments/index.vue'
import VaiSuggestion from './suggestion/index.vue'
import VaiFileCard from './filecard/index.vue'
import VaiCodeHighlighter from './codehighlighter/index.vue'

const components = [
  VaiButton,
  VaiTree,
  VaiDatePicker,
  VaiPageHeader,
  VaiAiChat,
  VaiVirtualList,
  VaiSkeleton,
  VaiTypingBubble,
  VaiThinkProcess,
  VaiAttachments,
  VaiSuggestion,
  VaiFileCard,
  VaiCodeHighlighter
]

const install = (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  VaiButton,
  VaiTree,
  VaiDatePicker,
  VaiPageHeader,
  VaiAiChat,
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
