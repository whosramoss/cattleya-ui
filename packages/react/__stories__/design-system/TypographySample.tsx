import type { CSSProperties, ReactNode } from 'react'

type TypographySampleProps = {
  label: string
  style?: CSSProperties
}

export function TypographySample({ label, style }: TypographySampleProps) {
  return (
    <span
      style={{
        fontFamily: 'Geist, sans-serif',
        color: 'var(--primary-foreground)',
        ...style,
      }}
    >
      {label}
    </span>
  )
}

export function TypographySamples({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        margin: '1rem 0 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      {children}
    </div>
  )
}
