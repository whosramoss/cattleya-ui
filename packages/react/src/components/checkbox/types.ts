import type { ComponentPropsWithoutRef } from 'react'

export interface CheckboxProps extends Omit<ComponentPropsWithoutRef<'button'>, 'onChange'> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  name?: string
  value?: string
}
