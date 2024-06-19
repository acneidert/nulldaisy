import { NullstackNode } from 'nullstack'

import { VariantProps } from 'tailwind-variants'

import { alertVariants } from './style'

export type AlertVariants = VariantProps<typeof alertVariants>

export type AlertProps<T = any> = AlertVariants &
  T & {
    clean?: boolean // without the icon
    timeout?: number // ms
    icon?: NullstackNode
    onClose?: () => void
  }
