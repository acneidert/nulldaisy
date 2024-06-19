import { DialogHTMLAttributes, NullstackNode } from 'nullstack'

import { VariantProps } from 'tailwind-variants'

import { modalVariants } from './styles'

export type ModalVariants = VariantProps<typeof modalVariants>

export interface ModalProps<T = any> extends DialogHTMLAttributes<T>, ModalVariants {
  onclose?: () => void
}

export type commomProps = {
  children?: NullstackNode
  class?: string
}
