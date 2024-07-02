import Nullstack, { NullstackClientContext } from 'nullstack'

import { badgeVariants } from './styles'
import { BadgeProps } from './types'

export class Badge extends Nullstack<BadgeProps> {

  render({ children, class: klass, color, outline, size, ...rest }: NullstackClientContext<BadgeProps>) {
    return (
      <span {...rest} class={badgeVariants({ class: klass, color, outline, size })}>
        {children}
      </span>
    )
  }

}
