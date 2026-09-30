import type { ReactNode } from 'react'
import type { PrimitiveComponentProps } from '@/utils/primitive'
import type { Responsive } from '@/utils/responsive'

export type CardVariant = 'default' | 'secondary' | 'tertiary'

export interface CardProps extends Omit<PrimitiveComponentProps, 'size'> {
  variant?: Responsive<CardVariant>
  children?: ReactNode
}
