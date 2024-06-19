import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import { alertVariants } from './style'
import { AlertProps } from './types'

declare function Info(): NullstackNode
declare function Success(): NullstackNode
declare function Warning(): NullstackNode
declare function Error(): NullstackNode

export class Alert extends Nullstack<AlertProps> {

  isVisible = true

  hide({ onClose }: any) {
    this.isVisible = false
    if (onClose && typeof onClose === 'function') onClose()
  }

  show() {
    this.isVisible = true
  }

  reset() {
    this.show()
    this.initiate({})
  }

  initiate({ timeout }: any) {
    if (timeout) {
      setTimeout(() => {
        this.hide({})
      }, timeout)
    }
  }

  renderInfo(): NullstackNode {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    )
  }

  renderSuccess(): NullstackNode {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    )
  }

  renderWarning(): NullstackNode {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    )
  }

  renderError(): NullstackNode {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    )
  }

  render({ children, class: klass, color, clean, icon, closable, ...props }: NullstackClientContext<AlertProps>) {
    if (!this.isVisible) return false
    return (
      <div role="alert" class={alertVariants({ class: klass, color, closable })} {...props}>
        {icon && icon}
        {!clean && (
          <>
            {color && !icon && color === 'info' && <Info />}
            {color && !icon && color === 'success' && <Success />}
            {color && !icon && color === 'warning' && <Warning />}
            {color && !icon && color === 'error' && <Error />}
            <span>{children}</span>
          </>
        )}
        {clean && children}
        {closable && (
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-3" onclick={this.hide}>
            ✕
          </button>
        )}
      </div>
    )
  }

}
