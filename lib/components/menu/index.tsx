import Nullstack, { NullstackClientContext } from 'nullstack'

import { menuItemVariants, menuTitleVariants, menuVariants, submenuVariants } from './styles'
import { MenuItemProps, MenuProps, MenuTitleProps, SubmenuProps } from './types'

export class Menu extends Nullstack {

  static Title({ class: klass='', children, ...props }: MenuTitleProps) {
    return (
      <li class={menuTitleVariants({ class: klass })} {...props}>
        {children}
      </li>
    )
  }

  static Item({ children, active = false, disabled = false, class: klass = '', ...props }: MenuItemProps) {
    return (
      <li class={menuItemVariants({ disabled, class: klass })} {...props}>
        <a class={active ? 'active' : ''} {...props}>
          {children}
        </a>
      </li>
    )
  }

  static Submenu({ title, children, uncollapsible = false, open = false, class: klass = '', ...props }: SubmenuProps) {
    if (uncollapsible && !open)
      return (
        <li>
          <a>{title}</a>
        </li>
      )
    if (uncollapsible && open) {
      return (
        <li>
          <a>{title}</a>
          <ul>{children}</ul>
        </li>
      )
    }
    return (
      <li class={submenuVariants({ class: klass })} {...props}>
        <details open={open}>
          <summary>{title}</summary>
          <ul>{children}</ul>
        </details>
      </li>
    )
  }

  render({ children, horizontal = false, size, class: klass, ...props }: NullstackClientContext<MenuProps>) {
    return (
      <ul class={menuVariants({ class: klass, horizontal, size })} {...props}>
        {children}
      </ul>
    )
  }

}
