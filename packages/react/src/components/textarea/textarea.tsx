import { forwardRef, useState, type ChangeEvent, type CSSProperties } from 'react'
import { Input } from '@/components/input/input'
import { useField } from '@/hooks/use-field'
import { composeRefs } from '@/utils/compose-refs'
import type { Props } from './types'

const MAX_HEIGHT = 180

function toRem(pixels: number, rootFontSize: number) {
  return `${pixels / rootFontSize}rem`
}

function getRootFontSize() {
  if (typeof document === 'undefined') return 16
  return parseFloat(getComputedStyle(document.documentElement).fontSize)
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  function Textarea({
    valid,
    validated,
    disabled,
    value,
    defaultValue,
    onValueChange,
    onChange,
    ...props
  }, ref) {
    const field = useField({ valid, validated, disabled })
    const [control, setControl] = useState<HTMLDivElement | null>(null)
    const [height, setHeight] = useState(0)
    const rootFontSize = getRootFontSize()
    const currentValue = value ?? defaultValue ?? ''

    function increaseHeight() {
      if (!control) return
      setHeight(Math.min(control.getBoundingClientRect().height, MAX_HEIGHT))
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
      onChange?.(event)
      onValueChange?.(event.target.value)
      increaseHeight()
    }

    const maxHeightStyle = toRem(MAX_HEIGHT, rootFontSize)
    const heightStyle = height ? toRem(height, rootFontSize) : '0rem'

    return (
      <div className="block relative w-full">
        <Input
          valid={field.valid}
          validated={field.validated}
          disabled={field.disabled}
          className="w-full h-(--textarea-height) min-h-29 max-h-(--textarea-max-height) py-4 relative resize-none items-start"
          style={{
            '--textarea-height': heightStyle,
            '--textarea-max-height': maxHeightStyle
          } as CSSProperties}
          data-testid="textarea"
          asChild
        >
          <textarea
            ref={composeRefs(ref)}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            {...props}
          />
        </Input>

        <Input
          className="w-full h-auto min-h-29 max-h-(--textarea-max-height) py-4 opacity-0 overflow-hidden break-words pointer-events-none absolute top-0 whitespace-pre-wrap break-all invisible z-100 items-start"
          style={{ '--textarea-max-height': maxHeightStyle } as CSSProperties}
          aria-hidden="true"
          data-testid="control"
          asChild
        >
          <div ref={setControl}>
            {currentValue}
            &nbsp;
          </div>
        </Input>
      </div>
    )
  }
)
