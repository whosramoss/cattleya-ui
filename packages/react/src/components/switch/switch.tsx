import { forwardRef } from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/utils/tw-merge'
import type { SwitchProps } from './types'

const SWITCH_BASE = 'group flex h-7 w-12 p-0.5 bg-(--c-color-switch-disabled) data-[state=checked]:bg-(--c-color-switch-active) corner-radius-full transition-colors duration-300 focus-visible:outline-3 focus-visible:outline-offset-2 outline-accessibility'
const THUMB_BASE = 'size-6 bg-(--c-color-on-switch-disabled) corner-radius-full transition-transform duration-300 group-data-[state=checked]:translate-x-5 group-data-[state=checked]:bg-(--c-color-on-switch-active)'

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  function Switch({
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
      <SwitchPrimitive.Root
        ref={ref}
        asChild
        checked={checked}
        defaultChecked={checked === undefined ? defaultChecked : undefined}
        onCheckedChange={onCheckedChange}
        name={name}
        value={value}
        disabled={disabled}
      >
        <button
          type="button"
          className={cn(SWITCH_BASE, className)}
          {...props}
        >
          <SwitchPrimitive.Thumb className={THUMB_BASE} />
        </button>
      </SwitchPrimitive.Root>
    )
  }
)
