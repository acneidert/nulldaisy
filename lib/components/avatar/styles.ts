import { tv } from 'tailwind-variants'

export const avatarVariants = tv({
  base: 'avatar',
  variants: {
    online: {
      true: 'online',
    },
    offline: {
      true: 'offline',
    },
    placeholder: {
      true: 'placeholder',
    },
  },
})

export const avatarGroupVariants = tv({
  base: 'avatar-group -space-x-6 rtl:space-x-reverse',
})
