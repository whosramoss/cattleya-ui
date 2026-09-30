import type { ChangeEvent, ComponentPropsWithoutRef } from 'react'

export interface RadioProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size' | 'onChange'> {
  value?: string
  checked?: boolean
  groupValue?: string
  onValueChange?: (value: string) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
