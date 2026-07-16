'use client' // @NOTE: Add in case you are using Next.js

import * as Slot from '@radix-ui/react-slot'

import { cn } from '@/utils/cn'

type Variant = {
  variant: string
  component: React.FC<React.ComponentProps<'div'>>
}

const variants = [
  {
    variant: 'default',
    component: ({ className, ...props }) => (
      <div
        {...props}
        className={cn(
          'relative overflow-hidden rounded-xl border border-transparent bg-primary px-3 py-1 text-primary-invert transition-all duration-200',
          'hover:bg-main-invert/90 dark:hover:bg-main-foreground/56',
          className,
        )}
      />
    ),
  },
  {
    variant: 'outline',
    component: ({ className, ...props }) => (
      <div
        {...props}
        className={cn(
          'relative overflow-hidden rounded-full border border-border bg-main-background px-3 py-1 transition-all duration-200',
          'text-primary-foreground hover:bg-main-foreground/50',
          className,
        )}
      />
    ),
  },
  {
    variant: 'success',
    component: ({ className, ...props }) => (
      <div
        {...props}
        className={cn(
          'rounded-full bg-gradient-to-t from-green-700 to-green-600 px-3 py-1 text-white',
          className,
        )}
      />
    ),
  },
  {
    variant: 'destructive',
    component: ({ className, ...props }) => (
      <div
        {...props}
        className={cn(
          'rounded-full bg-gradient-to-t from-red-600 to-red-500 px-3 py-1 text-white',
          className,
        )}
      />
    ),
  },
] as const satisfies readonly Variant[]

export type BadgeProps = {
  variant?: (typeof variants)[number]['variant']
} & React.ComponentProps<'div'>

export function Badge({
  variant = 'default',
  className,
  ...props
}: BadgeProps) {
  const FALLBACK_INDEX = 0

  const variantComponent = variants.find(v => v.variant === variant)?.component

  const Component = variantComponent || variants[FALLBACK_INDEX].component

  return (
    <Slot.Root className={cn('font-medium text-xs')}>
      <Component {...props} className={className} />
    </Slot.Root>
  )
}
