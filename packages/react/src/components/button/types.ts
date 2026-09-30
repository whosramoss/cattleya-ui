import type { ReactNode } from 'react'
import type { PrimitiveComponentProps } from '@/utils/primitive'
import type { Responsive } from '@/utils/responsive'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export interface ButtonProps extends Omit<PrimitiveComponentProps, 'size'> {
  variant?: Responsive<ButtonVariant>
  disabled?: boolean
  loading?: boolean
  children?: ReactNode
}
