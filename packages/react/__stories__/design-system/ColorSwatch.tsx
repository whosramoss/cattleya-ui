import type { ReactNode } from 'react'

type ColorSwatchProps = {
  hex: string
  label: string
  sub?: string
}

export function ColorSwatch({ hex, label, sub }: ColorSwatchProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        width: 140,
      }}
    >
      <div
        style={{
          height: 64,
          borderRadius: 8,
          background: hex,
          border: '1px solid var(--border)',
        }}
      />
      <div style={{ fontSize: '0.8rem', lineHeight: 1.3 }}>
        <div style={{ fontWeight: 600, color: 'var(--primary-foreground)' }}>
          {label}
        </div>
        {sub ? (
          <div
            style={{
              opacity: 0.65,
              fontFamily: 'Geist Mono, monospace',
              color: 'var(--primary-foreground)',
            }}
          >
            {sub}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export function SwatchRow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        margin: '1rem 0 2rem',
      }}
    >
      {children}
    </div>
  )
}
