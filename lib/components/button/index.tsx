import Nullstack from 'nullstack'

import { buttonVariants } from './styles'
import { ButtonProps, ButtonVariants } from './types'

export class Button extends Nullstack<ButtonVariants> {

  render(context: ButtonProps) {
    const {
      class: xClass,
      noAnimation,
      color,
      children,
      outline,
      active,
      disabled,
      glass,
      size,
      square,
      circle,
      ...rest
    } = context
    return (
      <button
        class={buttonVariants({
          color,
          outline,
          active,
          disabled,
          glass,
          size,
          square,
          circle,
          class: xClass,
          noAnimation,
        })}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    )
  }

}
