'use client' // @NOTE: Add in case you are using Next.js

import { useRef, useState } from 'react'

import { motion } from 'motion/react'
import * as Slot from '@radix-ui/react-slot'

import { cn } from '@/utils/cn'

type Variant = {
  variant: string
  component: React.FC<React.ComponentProps<'button'>>
}

const variants = [
  {
    variant: 'default',
    component: ({ className, ...props }) => (
      <button
        {...props}
        className={cn(
          'relative overflow-hidden rounded-xl border border-transparent bg-primary px-4 py-2 text-primary-invert transition-all duration-200',
          'hover:bg-main-invert/90 dark:hover:bg-main-foreground/56',
          className,
        )}
      />
    ),
  },
  {
    variant: 'outline',
    component: ({ className, ...props }) => (
      <button
        {...props}
        className={cn(
          'relative rounded-xl border border-border bg-main-background px-4 py-2 transition-all duration-200',
          'text-primary-foreground hover:bg-main-foreground/40',
          className,
        )}
      />
    ),
  },
  {
    variant: 'success',
    component: ({ className, ...props }) => (
      <button
        {...props}
        className={cn(
          'rounded-xl bg-gradient-to-t from-green-700 to-green-600 px-4 py-2 text-white',
          className,
        )}
      />
    ),
  },
  {
    variant: 'destructive',
    component: ({ className, ...props }) => (
      <button
        {...props}
        className={cn(
          'rounded-xl bg-gradient-to-t from-red-600 to-red-500 px-4 py-2 text-white',
          className,
        )}
      />
    ),
  },
] as const satisfies readonly Variant[]

export type ButtonProps = {
  variant?: (typeof variants)[number]['variant']
  isMagnetic?: boolean
} & React.ComponentProps<'button'>

export function Button({
  variant = 'default',
  isMagnetic = false,
  className,
  ...props
}: ButtonProps) {
  const FALLBACK_INDEX = 0

  const variantComponent = variants.find(v => v.variant === variant)?.component

  const Component = variantComponent || variants[FALLBACK_INDEX].component

  const buttonContent = (
    <Slot.Root className={cn('font-medium text-sm')}>
      <Component {...props} className={className} />
    </Slot.Root>
  )

  if (isMagnetic) {
    return <Magnetic>{buttonContent}</Magnetic>
  }

  return buttonContent
}

function Magnetic({ children }: { children: React.ReactNode }) {
  const { ref, handleMouseMove, handleMouseLeave, x, y } = useMagnetic()

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  )
}

function useMagnetic() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()

    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)

    setPosition({ x: middleX, y: middleY })
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return { ref, handleMouseMove, handleMouseLeave, x, y }
}
