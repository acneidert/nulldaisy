import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import { modalActionVariants, modalBackdropVariants, modalContentVariants, modalVariants } from './styles'
import { commomProps, ModalProps } from './types'

export class Modal extends Nullstack<ModalProps> {

  modalElement: HTMLDialogElement

  hydrate({ onclose }: NullstackClientContext<ModalProps>) {
    this.modalElement.onclose = onclose
  }

  show() {
    this.modalElement.showModal()
  }

  hide() {
    this.modalElement.close()
  }

  static Content({ class: klass, children }: commomProps): NullstackNode {
    return <div class={modalContentVariants({ class: klass })}>{children}</div>
  }

  static Action({ class: klass, children }: commomProps): NullstackNode {
    return <div class={modalActionVariants({ class: klass })}>{children}</div>
  }

  static Backdrop({ class: klass, children }: commomProps): NullstackNode {
    return (
      <form method="dialog" class={modalBackdropVariants({ class: klass })}>
        {children}
        <button>close</button>
      </form>
    )
  }

  render({ open, position, class: klass, children }: NullstackClientContext<ModalProps>) {
    return (
      <dialog class={modalVariants({ open, position, class: klass })} ref={this.modalElement}>
        {children}
      </dialog>
    )
  }

}

