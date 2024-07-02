import { AnchorHTMLAttributes } from 'nullstack'

import { VariantProps } from 'tailwind-variants'

import { linkVariants } from './styles'

export type LinkVariants = VariantProps<typeof linkVariants>

export type LinkProps<T = any> = LinkVariants & AnchorHTMLAttributes<T>
