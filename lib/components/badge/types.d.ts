import { VariantProps } from 'tailwind-variants'

import { badgeVariants } from './styles'

export type BadgeVariants = VariantProps<typeof badgeVariants>
export type BadgeProps = {
  class?: string
} & BadgeVariants
