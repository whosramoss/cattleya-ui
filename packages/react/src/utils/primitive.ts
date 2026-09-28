import { createElement, forwardRef, type AllHTMLAttributes, type ElementType, type RefAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface PrimitiveProps {
  as?: ElementType
  asChild?: boolean
}

export type PrimitiveComponentProps = PrimitiveProps &
  Omit<AllHTMLAttributes<HTMLElement>, 'as'> & {
    [dataAttribute: `data-${string}`]: unknown
  }

type RenderedProps = Omit<PrimitiveComponentProps, 'as' | 'asChild'> & RefAttributes<HTMLElement>

export const Primitive = forwardRef<HTMLElement, PrimitiveComponentProps>(
  function Primitive({ as = 'div', asChild = false, ...props }, ref) {
    const Component = (asChild ? Slot : as) as ElementType<RenderedProps>

    return createElement(Component, { ...props, ref })
  }
)
