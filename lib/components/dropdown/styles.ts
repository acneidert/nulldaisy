import { tv } from 'tailwind-variants'

export const dropdownVariants = tv({
  base: 'dropdown',
  variants: {
    open: {
      true: 'dropdown-open',
    },
    side: {
      left: 'dropdown-left',
      right: 'dropdown-right',
    },
    align: {
      top: 'dropdown-top',
      bottom: 'dropdown-bottom',
    },
    hover: {
      true: 'dropdown-hover',
    },
    end: {
      true: 'dropdown-end',
    },
  },
})

export const dropdownContentVariants = tv({
  base: 'dropdown-content',
})
