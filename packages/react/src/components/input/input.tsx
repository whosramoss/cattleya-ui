import { forwardRef } from 'react'
import { Primitive } from '@/utils/primitive'
import { useField } from '@/hooks/use-field'
import { cn } from '@/utils/tw-merge'
import type { Props } from './types'

const INPUT_CLASSES = `
  flex items-center w-full h-12 pb-0.25 px-3.75 corner-radius-300
  bg-(--c-color-input-enabled) border border-(--c-color-on-input-enabled) text-(--c-color-in-input-enabled)
  label-200 focus:border-(--c-color-on-input-active) focus:outline-1 focus:outline-(--c-color-on-input-active)
  data-invalid:border-negative data-invalid:outline-1 data-invalid:outline-negative
  data-disabled:bg-(--c-color-input-disabled) data-disabled:border-(--c-color-input-disabled)
  data-disabled:text--(--c-color-in-input-disabled) placeholder:text-(--c-color-in-input-empty)
`

export const Input = forwardRef<HTMLElement, Props>(
  function Input({
    as = 'input',
    asChild,
    className,
    valid,
    validated,
    disabled,
    children,
    ...props
  }, ref) {
    const field = useField({ valid, validated, disabled })
    const invalid = !field.valid && field.validated

    return (
      <Primitive
        ref={ref}
        as={as}
        asChild={asChild}
        className={cn(INPUT_CLASSES, className)}
        data-invalid={invalid || undefined}
        data-disabled={field.disabled || undefined}
        disabled={field.disabled || undefined}
        {...props}
      >
        {children}
      </Primitive>
    )
  }
)
