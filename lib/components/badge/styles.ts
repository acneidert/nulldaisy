import { tv } from 'tailwind-variants'

export const badgeVariants = tv({
  base: 'badge',
  variants: {
    color: {
      neutral: 'badge-neutral',
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      accent: 'badge-accent',
      ghost: 'badge-ghost',
      info: 'badge-info',
      success: 'badge-success',
      warning: 'badge-warning',
      error: 'badge-error',
    },
    outline: {
      true: 'badge-outline',
    },
    size: {
      xs: 'badge-xs',
      sm: 'badge-sm',
      md: 'badge-md',
      lg: 'badge-lg',
    },
  },
})
