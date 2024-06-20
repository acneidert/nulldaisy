import { tv } from 'tailwind-variants'

export const notifyVariants = tv({
  base: 'flex flex-col gap-4 fixed z-[9999] min-w-sm max-w-sm w-full',
  variants: {
    position: {
      'top-right': 'top-2 right-2',
      'middle-right': ' top-1/2 right-2 -translate-y-1/2',
      'bottom-right': ' bottom-2 right-2',
      'top-center': ' top-2 left-1/2 -translate-x-1/2 ',
      'bottom-center': ' bottom-2 left-1/2 -translate-x-1/2',
      'top-left': ' top-2 left-2',
      'middle-left': '  top-1/2 left-2 -translate-y-1/2',
      'bottom-left': '  bottom-2 left-2',
    },
  },
})
