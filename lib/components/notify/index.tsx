import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import { nanoid } from 'nanoid'

import { Alert } from '../alert'
import { notifyVariants } from './styles'
import { Notification, NotificationProp, NotifyVariants } from './types'

declare function Notification(context: NotifyVariants): NullstackNode

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
      this.notifications = this.notifications.filter((notification: Notification) => notification.id !== id)
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
          .map(({ id, duration, type, closable, onClose, message }: Notification) => (
            <Alert key={id} timeout={duration} color={type} closable={closable} onClose={onClose} class={'grow'}>
              {message}
            </Alert>
          ))}
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
