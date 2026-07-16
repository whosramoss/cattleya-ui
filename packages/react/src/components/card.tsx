'use client' // @NOTE: Add in case you are using Next.js

import * as Slot from '@radix-ui/react-slot'

import { cn } from '@/utils/cn'

export type CardProps = React.ComponentProps<'div'>

export function Card({ className, children, ...props }: CardProps) {
  return (
    <Slot.Root className="w-full max-w-[350px]">
      <div
        {...props}
        className={cn(
          'relative rounded-xl border border-primary/10 bg-main-background px-4 py-5',
          className,
        )}
      >
        {children}
      </div>
    </Slot.Root>
  )
}
