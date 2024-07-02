import Nullstack from 'nullstack'

import { linkVariants } from './styles'
import { LinkProps, LinkVariants } from './types'

export class Link extends Nullstack<LinkVariants> {

  render({color, hover=false, class: klass, children, ...rest }: LinkProps) {
    return (
      <a class={linkVariants({ color, hover, class: klass })} {...rest}>
        {children}
      </a>
    )
  }

}
