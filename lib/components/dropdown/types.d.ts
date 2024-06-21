import { NullstackNode } from 'nullstack'

import { VariantProps } from 'tailwind-variants'

import { dropdownContentVariants, dropdownVariants } from './styles'

export type DropdownVariants = VariantProps<typeof dropdownVariants>
export type DropdownContentVariants = VariantProps<typeof dropdownContentVariants>

export type DropdownProps = DropdownVariants & {
  class?: string
}

export type DropdownContentProps = DropdownContentVariants & {
  children: NullstackNode
  class?: string
}

export type DropdownTriggerProps = {
  children: NullstackNode
  class?: string
}
