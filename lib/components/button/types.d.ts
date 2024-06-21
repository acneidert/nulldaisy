import { ButtonHTMLAttributes } from 'nullstack'

import { VariantProps } from 'tailwind-variants'

import { buttonVariants } from './styles'

export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps<T = any> extends ButtonHTMLAttributes<T>, ButtonVariants {}
