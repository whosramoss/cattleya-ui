import { forwardRef, type ChangeEvent, type CSSProperties } from 'react'
import { cn } from '@/utils/tw-merge'
import type { RadioProps } from './types'

const BOUNCY_EXPAND = `linear(
  0, 0.063, 0.141, 0.25, 0.391, 0.563, 0.766,
  0.875, 0.969, 1.047, 1.109, 1.156, 1.188, 1.203 40%,
  1.188, 1.156, 1.109, 1.063, 1.031, 1, 0.977, 0.961, 0.953,
  0.961, 0.977, 0.992, 1, 1.008, 1.004, 1
)`

const COLLAPSE = `linear(
  1, 0.99, 0.98, 0.96, 0.94, 0.91, 0.88, 0.84, 0.8, 0.75,
  0.7, 0.65, 0.6, 0.54, 0.48, 0.42, 0.36, 0.3, 0.24, 0.18,
  0.12, 0.06, 0
)`

const RADIO_CLASSES = `
  appearance-none relative inline-flex size-7 items-center justify-center corner-radius-full
  bg-(--c-color-radio-disabled) border-2 border-(--c-color-on-radio-disabled)
  transition-[border-color] duration-250
  focus:outline-none focus-visible:after:outline-3 focus-visible:after:outline-accessibility focus-visible:after:outline-offset-2
  after:block after:absolute after:corner-radius-full after:size-full after:bg-(--c-color-radio-active) after:scale-0
  after:transition-transform after:duration-250 after:transition-timing-[var(--collapse)]
  checked:border-none checked:after:scale-100 checked:after:duration-250 checked:after:transition-timing-[var(--bouncy-expand)]
  before:block before:absolute before:corner-radius-full before:size-2.5 before:bg-white before:z-10
`

function isChecked(checked: boolean | undefined, groupValue: string | undefined, value: string | undefined) {
  if (checked !== undefined) return checked
  if (groupValue === undefined || value === undefined) return undefined
  return groupValue === value
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  function Radio({
    className,
    value,
    checked,
    groupValue,
    onValueChange,
    onChange,
    ...props
  }, ref) {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      onChange?.(event)
      onValueChange?.(event.target.value)
    }

    return (
      <input
        ref={ref}
        type="radio"
        className={cn(RADIO_CLASSES, className)}
        style={{
          '--bouncy-expand': BOUNCY_EXPAND,
          '--collapse': COLLAPSE
        } as CSSProperties}
        checked={isChecked(checked, groupValue, value)}
        value={value}
        onChange={handleChange}
        {...props}
      />
    )
  }
)
