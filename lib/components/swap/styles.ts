import { tv } from 'tailwind-variants'

export const swapVariants = tv({
  base: 'swap',
  variants: {
    active: {
      true: 'swap-active',
    },
    rotate: {
      true: 'swap-rotate',
    },
    flip: {
      true: 'swap-flip',
    },
  },
})

export const swapOnVariants = tv({
  base: 'swap-on',
})

export const swapOffVariants = tv({
  base: 'swap-off',
})
