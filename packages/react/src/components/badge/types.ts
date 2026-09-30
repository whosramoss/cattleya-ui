import type { ReactNode } from 'react'
import type { PrimitiveComponentProps } from '@/utils/primitive'
import type { Responsive } from '@/utils/responsive'

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'discount'
  | 'cashback'
  | 'positive'
  | 'negative'
  | 'neutral'
  | 'verified'

export interface BadgeProps extends Omit<PrimitiveComponentProps, 'size'> {
  variant?: Responsive<BadgeVariant>
  children?: ReactNode
}
