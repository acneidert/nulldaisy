import { tv } from 'tailwind-variants'

export const modalVariants = tv({
  base: 'modal',
  variants: {
    open: {
      true: 'modal-open',
    },
    position: {
      top: 'modal-top',
      bottom: 'modal-bottom',
      middle: 'modal-middle',
    },
  },
})

export const modalContentVariants = tv({
  base: 'modal-box',
})

export const modalActionVariants = tv({
  base: 'modal-action',
})

export const modalBackdropVariants = tv({
  base: 'modal-backdrop',
})
