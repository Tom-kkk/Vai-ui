import type { App, Plugin, DefineComponent } from 'vue'

export const VaiButton: DefineComponent<any, any, any>
export const VaiTree: DefineComponent<any, any, any>
export const VaiDatePicker: DefineComponent<any, any, any>
export const VaiPageHeader: DefineComponent<any, any, any>
export const VaiAiChat: DefineComponent<any, any, any>
export const VaiVirtualList: DefineComponent<any, any, any>
export const VaiSkeleton: DefineComponent<any, any, any>
export const VaiTypingBubble: DefineComponent<any, any, any>
export const VaiThinkProcess: DefineComponent<any, any, any>
export const VaiAttachments: DefineComponent<any, any, any>
export const VaiSuggestion: DefineComponent<any, any, any>
export const VaiFileCard: DefineComponent<any, any, any>
export const VaiCodeHighlighter: DefineComponent<any, any, any>

declare const VaiComponents: Plugin & {
  version: string
  install: (app: App) => void
}

export default VaiComponents
