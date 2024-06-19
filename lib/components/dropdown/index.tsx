import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import { dropdownContentVariants, dropdownVariants } from './styles'
import { DropdownContentProps, DropdownTriggerProps, DropdownVariants } from './types'

export class Dropdown extends Nullstack<DropdownVariants> {

  static Trigger({children, class: klass}: NullstackClientContext<DropdownTriggerProps>): NullstackNode {
    return (
      <div tabindex="0" role="button" class={klass}>
        {children}
      </div>
    )
  }

  static Content({ children, class: klass }: NullstackClientContext<DropdownContentProps>): NullstackNode {
    return (
      <div tabindex="0" class={dropdownContentVariants({ class: klass })}>
        {children}
      </div>
    )
  }

  render({ class: klass, children, open, align, side, hover, ...props }: NullstackClientContext<DropdownContentProps>) {
    return (
      <div class={dropdownVariants({ class: klass, open, align, side, hover })} {...props}>
        {children}
      </div>
    )
  }

}
