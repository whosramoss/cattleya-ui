import type { ReactNode } from 'react'
import type { PrimitiveComponentProps } from '@/utils/primitive'
import type { FieldProps } from '@/hooks/use-field'

export interface Props extends FieldProps, PrimitiveComponentProps {
  children?: ReactNode
}
