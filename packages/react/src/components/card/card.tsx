import { forwardRef } from 'react'
import { Primitive } from '@/utils/primitive'
import { variants } from '@/utils/variants'
import { cn } from '@/utils/tw-merge'
import { theme } from './theme'
import type { CardProps } from './types'

const cnCard = variants(theme.variants, { baseClass: theme.baseClass })

export const Card = forwardRef<HTMLElement, CardProps>(
  function Card({
    as = 'div',
    asChild = false,
    variant = 'default',
    className,
    children,
    ...props
  }, ref) {
    return (
      <Primitive
        ref={ref}
        as={as}
        asChild={asChild}
        className={cn(cnCard({ variant }), className)}
        {...props}
      >
        {children}
      </Primitive>
    )
  }
)
