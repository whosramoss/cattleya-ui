import type { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import type { FieldProps } from '@/hooks/use-field'

export interface Props extends FieldProps, Omit<ComponentPropsWithoutRef<'textarea'>, 'onChange'> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
