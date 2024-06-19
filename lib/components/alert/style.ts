import { tv } from 'tailwind-variants'

export const alertVariants = tv({
  base: 'alert',
  variants: {
    color: {
      info: 'alert-info',
      success: 'alert-success',
      warning: 'alert-warning',
      error: 'alert-error',
    },
    closable: {
      true: 'relative',
    },
  },
})
