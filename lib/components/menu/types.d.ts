import { NullstackNode } from 'nullstack'

import { VariantProps } from 'tailwind-variants'

import { menuItemVariants, menuTitleVariants, menuVariants, submenuVariants } from './styles'

export type MenuVariants = VariantProps<typeof menuVariants>
export type MenuItemVariants = VariantProps<typeof menuItemVariants>
export type MenuTitleVariants = VariantProps<typeof menuTitleVariants>
export type SubmenuVariants = VariantProps<typeof submenuVariants>

type Base = {
  class?: string
}

export type MenuProps = MenuVariants & Base
export type MenuItemProps = MenuItemVariants &
  Base & {
    children?: NullstackNode
  }
export type MenuTitleProps = MenuTitleVariants &
  Base & {
    children?: NullstackNode
  }
export type SubmenuProps = SubmenuVariants &
  Base & {
    open?: boolean
    uncollapsible?: boolean
    title?: NullstackNode
    children?: NullstackNode
  }
