import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import { swapOffVariants, swapOnVariants, swapVariants } from './styles'
import { OnOffProps, SwapProps } from './types'

export class Swap extends Nullstack<SwapProps> {

  static On({ children, class: klass }: OnOffProps): NullstackNode {
    return <div class={swapOnVariants({ class: klass })}>{children}</div>
  }

  static Off({ children, class: klass }: OnOffProps): NullstackNode {
    return <div class={swapOffVariants({ class: klass })}>{children}</div>
  }

  render({ children, class: klass, active, rotate, flip, onclick, ...props }: NullstackClientContext<SwapProps>) {
    return (
      <label onclick={onclick} class={swapVariants({ class: klass, active, rotate, flip })}>
        <input type="checkbox" {...props} />
        {children}
      </label>
    )
  }

}
