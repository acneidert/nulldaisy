import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'btn',
  variants: {
    color: {
      neutral: 'btn-neutral',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      accent: 'btn-accent',
      info: 'btn-info',
      success: 'btn-success',
      warning: 'btn-warning',
      error: 'btn-error',
      ghost: 'btn-ghost',
      link: 'btn-link',
    },
    outline: {
      true: 'btn-outline',
    },
    active: {
      true: 'btn-active',
    },
    disabled: {
      true: 'btn-disabled',
    },
    glass: {
      true: 'glass',
    },
    noAnimation: {
      true: 'no-animation',
    },
    size: {
      xs: 'btn-xs',
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
      wide: 'btn-wide',
      block: 'btn-block',
    },
    square: {
      true: 'btn-square',
    },
    circle: {
      true: 'btn-circle',
    },
  },
})
