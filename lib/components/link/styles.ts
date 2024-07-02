import { tv } from 'tailwind-variants'

export const linkVariants = tv({
  base: 'link',
  variants: {
    color: {
      neutral: 'link-neutral',
      primary: 'link-primary',
      secondary: 'link-secondary',
      accent: 'link-accent',
      success: 'link-success',
      info: 'link-info',
      warning: 'link-warning',
      error: 'link-error',
    },
    hover: {
      true: 'link-hover',
    },
  },
})
