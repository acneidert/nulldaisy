import { tv } from 'tailwind-variants'

export const menuVariants = tv({
  base: 'menu bg-base-200 rounded-box',
  variants: {
    horizontal: {
      true: 'menu-horizontal',
    },
    size: {
      xs: 'menu-xs',
      sm: 'menu-sm',
      md: 'menu-md',
      lg: 'menu-lg',
    },
  },
})

export const menuTitleVariants = tv({
  base: 'menu-title',
})

export const menuItemVariants = tv({
  base: '',
  variants: {
    disabled: {
      true: 'disabled',
    },
    active: {
      true: 'active',
    },
  },
})

export const submenuVariants = tv({
  base: '',
})
