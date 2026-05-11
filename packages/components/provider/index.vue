<template>
  <slot />
</template>

<script>
import { reactive, ref, provide } from 'vue'

export default {
  name: 'VaiProvider',

  props: {
    locale: {
      type: String,
      default: 'zh-CN',
    },
    theme: {
      type: String,
      default: 'light',
      validator: (v) => ['light', 'dark', 'auto'].includes(v),
    },
    request: {
      type: Function,
      default: null,
    },
  },

  setup(props) {
    const resolvedTheme = ref(props.theme === 'auto' ? 'light' : props.theme)

    const config = reactive({
      get locale() {
        return props.locale
      },
      get theme() {
        return resolvedTheme.value
      },
      get request() {
        return props.request
      },
    })

    provide('vaiConfig', config)

    return { resolvedTheme }
  },

  data() {
    return {
      mediaQuery: null,
      mediaHandler: null,
    }
  },

  mounted() {
    this.applyTheme(this.theme)
    if (this.theme === 'auto') {
      this.setupAutoTheme()
    }
  },

  beforeUnmount() {
    this.cleanupAutoTheme()
  },

  watch: {
    theme(newVal) {
      this.cleanupAutoTheme()
      if (newVal === 'auto') {
        this.setupAutoTheme()
      } else {
        this.applyTheme(newVal)
        this.resolvedTheme = newVal
      }
    },
  },

  methods: {
    applyTheme(theme) {
      if (typeof document === 'undefined') return
      if (theme === 'auto') {
        const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
        document.documentElement.dataset.theme = dark ? 'dark' : 'light'
        this.resolvedTheme = dark ? 'dark' : 'light'
      } else {
        document.documentElement.dataset.theme = theme
        this.resolvedTheme = theme
      }
    },

    setupAutoTheme() {
      if (typeof window === 'undefined') return
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      this.mediaQuery = mq
      this.mediaHandler = (e) => {
        const t = e.matches ? 'dark' : 'light'
        document.documentElement.dataset.theme = t
        this.resolvedTheme = t
      }
      mq.addEventListener('change', this.mediaHandler)
      this.applyTheme('auto')
    },

    cleanupAutoTheme() {
      if (this.mediaQuery && this.mediaHandler) {
        this.mediaQuery.removeEventListener('change', this.mediaHandler)
        this.mediaQuery = null
        this.mediaHandler = null
      }
    },
  },
}
</script>
