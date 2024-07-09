import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import { nanoid } from 'nanoid'

import { Alert } from '../alert'
import { notifyVariants } from './styles'
import { Notification, NotificationProp, NotifyVariants } from './types'
import { closeNotify, getOpenClass, setClose } from './utils'

declare function Notification(context: NotifyVariants): NullstackNode
const TIMEOUT = 500 // to apply animation
export class Notify extends Nullstack {

  private notifications: Array<Notification> = []
  private static notify_

  protected static setNotify(notify_) {
    Notify.notify_ = notify_
  }

  initiate() {
    Notify.setNotify(this)
  }

  notify({ type, message, position = 'top-right', duration = 3000, closable = true, onClose }: NotificationProp) {
    const id = nanoid()
    const newOnclose = () => {
      closeNotify({ id, position })
      setTimeout(() => {
        this.notifications = this.notifications.filter((notification: Notification) => notification.id !== id)
      }, 150)
      if (onClose && typeof onClose === 'function') onClose()
    }

    this.notifications.push({ id, type, message, position, duration, closable, onClose: newOnclose })
  }

  static notify({ type, message, position, duration = 3000, closable = true, onClose }: NotificationProp) {
    Notify.notify_.notify({ type, message, position, duration, closable, onClose })
  }

  static success(props: NotificationProp) {
    const { message, duration = 3000, closable = true, onClose, position } = props
    Notify.notify({ type: 'success', message, position, duration, closable, onClose })
  }

  static error(props: NotificationProp) {
    const { message, duration = 3000, closable = true, onClose, position } = props
    Notify.notify({ type: 'error', message, position, duration, closable, onClose })
  }

  static warning(props: NotificationProp) {
    const { message, duration = 3000, closable = true, onClose, position } = props
    Notify.notify({ type: 'warning', message, position, duration, closable, onClose })
  }

  static info(props: NotificationProp) {
    const { message, duration = 3000, closable = true, onClose, position } = props
    Notify.notify({ type: 'info', message, position, duration, closable, onClose })
  }

  private renderNotification({ position }: NullstackClientContext<NotifyVariants>): NullstackNode {
    const hasPosition = this.notifications.some(({ position: pos }) => pos === position)
    if (!hasPosition) return false
    return (
      <div class={notifyVariants({ position })}>
        {this.notifications
          .filter(({ position: pos }) => pos === position)
          .map(({ id, duration, type, closable, onClose, message }: Notification) => {
            setClose({ id, position, timeout: duration })
            return (
              <Alert
                id={id}
                key={id}
                color={type}
                onClose={onClose}
                closable={closable}
                class={`grow ${getOpenClass({ position })}`}
                timeout={parseInt(String(duration)) + TIMEOUT}
              >
                {message}
              </Alert>
            )
          })}
      </div>
    )
  }

  render() {
    return (
      <>
        <Notification position="top-left" />
        <Notification position="top-right" />
        <Notification position="top-center" />
        <Notification position="middle-left" />
        <Notification position="bottom-left" />
        <Notification position="middle-right" />
        <Notification position="bottom-right" />
        <Notification position="bottom-center" />
      </>
    )
  }

}
