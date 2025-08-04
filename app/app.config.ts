export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      neutral: 'slate'
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      }
    },
    card: {
      slots: {
        root: 'border-2 rounded-none border-[#1f1f1f]',
        body: 'p-2 sm:p-2',
        footer: 'p-0 sm:p-0'
      }
    },
    modal: {
      variants: {
        fullscreen: {
          true: {
            content: 'inset-0'
          },
          false: {
            content: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-lg shadow-lg ring ring-default overflow-hidden'
          }
        }
      }
    }
  }
})
