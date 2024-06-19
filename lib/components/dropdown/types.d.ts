import { NullstackNode } from 'nullstack'

import { VariantProps } from 'tailwind-variants'

import { dropdownContentVariants, dropdownVariants } from './styles'

export type DropdownVariants = VariantProps<typeof dropdownVariants>
export type DropdownContentVariants = VariantProps<typeof dropdownContentVariants>

export type DropdownProps<T = any> = DropdownVariants & {
  children: NullstackNode
  class?: string
} & T

export type DropdownContentProps<T = any> = DropdownContentVariants & {
  children: NullstackNode
  class?: string
} & T

export type DropdownTriggerProps<T = any> = {
  children: NullstackNode
  class?: string
} & T
