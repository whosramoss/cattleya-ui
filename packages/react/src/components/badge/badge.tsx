import { forwardRef } from 'react'
import { Primitive } from '@/utils/primitive'
import { variants } from '@/utils/variants'
import { cn } from '@/utils/tw-merge'
import { theme } from './theme'
import type { BadgeProps } from './types'

const cnBadge = variants(theme.variants, { baseClass: theme.baseClass })

export const Badge = forwardRef<HTMLElement, BadgeProps>(
  function Badge({
    as = 'span',
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
        className={cn(cnBadge({ variant }), className)}
        {...props}
      >
        {children}
      </Primitive>
    )
  }
)
