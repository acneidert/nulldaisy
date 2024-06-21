import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import { dropdownContentVariants, dropdownVariants } from './styles'
import { DropdownContentProps, DropdownProps, DropdownTriggerProps } from './types'

export class Dropdown extends Nullstack<DropdownProps> {

  static Trigger({children, class: klass}: DropdownTriggerProps): NullstackNode {
    return (
      <div tabindex="0" role="button" class={klass}>
        {children}
      </div>
    )
  }

  static Content({ children, class: klass }: DropdownContentProps): NullstackNode {
    return (
      <div tabindex="0" class={dropdownContentVariants({ class: klass })}>
        {children}
      </div>
    )
  }

  render({ class: klass, children, open, align, side, hover, ...props }: NullstackClientContext<DropdownProps>) {
    return (
      <div class={dropdownVariants({ class: klass, open, align, side, hover })} {...props}>
        {children}
      </div>
    )
  }

}

// function DropdownWrapper({ class: klass, children, open, align, side, hover, ...props }: DropdownProps): NullstackNode {
//   return (
//     <div class={dropdownVariants({ class: klass, open, align, side, hover })} {...props}>
//       {children}
//     </div>
//   )
// }

// function DropdownTrigger({ class: klass, children, ...props }: DropdownTriggerProps): NullstackNode {
//   return (
//     <div tabindex="0" role="button" class={klass} {...props}>
//       {children}
//     </div>
//   )
// }

// function DropdownContent({ class: klass, children, ...props }: DropdownContentProps): NullstackNode {
//   return (
//     <div tabindex="0" class={klass} {...props}>
//       {children}
//     </div>
//   )
// }

// export const Dropdown: DropdownType = {
//   Wrapper: DropdownWrapper,
//   Trigger: DropdownTrigger,
//   Content: DropdownContent,
// }
