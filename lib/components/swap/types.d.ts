import { InputHTMLAttributes, NullstackNode } from 'nullstack'

import { VariantProps } from 'tailwind-variants'

import { swapVariants } from './styles'

export type OnOffProps = {
  children: NullstackNode
  class?: string
}

export type SwapVariants = VariantProps<typeof swapVariants>
export interface SwapProps<T = any> extends InputHTMLAttributes<T>, SwapVariants {}
