import { NullstackNode } from 'nullstack'

import { VariantProps } from 'tailwind-variants'

import { notifyVariants } from './styles'

export type NotifyVariants = VariantProps<typeof notifyVariants>

export type NotificationType = 'success' | 'info' | 'warning' | 'error'

export type NotificationProp = {
  type?: NotificationType
  message: NullstackNode
  duration?: number
  closable?: boolean
  onClose?: () => void
} & NotifyVariants

export type Notification = NotificationProp & { id: string }
