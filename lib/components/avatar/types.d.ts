import { NullstackNode } from 'nullstack'

import { VariantProps } from 'tailwind-variants'

import { avatarVariants } from './styles'

export type AvatarVariants = VariantProps<typeof avatarVariants>

export type AvatarProps = AvatarVariants & {
  class: string
}

export type AvatarGroupProps = {
  class?: string
  children: NullstackNode
}
