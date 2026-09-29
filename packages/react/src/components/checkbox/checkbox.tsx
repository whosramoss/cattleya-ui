import { forwardRef, type CSSProperties } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cn } from '@/utils/tw-merge'
import type { CheckboxProps } from './types'

const BOUNCY_EASING = `linear(
  0, 0.063, 0.141, 0.25, 0.391, 0.563, 0.766,
  0.875, 0.969, 1.047, 1.109, 1.156, 1.188, 1.203 40%,
  1.188, 1.156, 1.109, 1.063, 1.031, 1, 0.977, 0.961, 0.953,
  0.961, 0.977, 0.992, 1, 1.008, 1.004, 1
)`

const BUTTON_BASE_CLASSES = `
  group block size-7 bg-(--c-color-checkbox-disabled)
  border-2 border-(--c-color-on-checkbox-disabled)
  corner-radius-100 transition-all duration-500
  transition-timing-[var(--bouncy-easing)]
  focus-visible:outline-3
  focus-visible:outline-accessibility
  focus-visible:outline-offset-2
  data-[state=checked]:bg-(--c-color-checkbox-active)
  data-[state=checked]:border-(--c-color-checkbox-active)
`

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  function Checkbox({
    className,
    checked,
    defaultChecked,
    onCheckedChange,
    name,
    value,
    disabled,
    ...props
  }, ref) {
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        asChild
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        name={name}
        value={value}
        disabled={disabled}
      >
        <button
          type="button"
          className={cn(BUTTON_BASE_CLASSES, className)}
          style={{ '--bouncy-easing': BOUNCY_EASING } as CSSProperties}
          {...props}
        />
      </CheckboxPrimitive.Root>
    )
  }
)
