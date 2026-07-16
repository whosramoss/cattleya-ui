const SPACING_TOKENS = [
  { token: '0.5', px: 2 },
  { token: '1', px: 4 },
  { token: '1.5', px: 6 },
  { token: '2', px: 8 },
  { token: '3', px: 12 },
  { token: '3.5', px: 14 },
  { token: '4', px: 16 },
  { token: '5', px: 20 },
  { token: '6', px: 24 },
] as const

export function SpacingScale() {
  return (
    <div
      style={{
        margin: '1rem 0 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      {SPACING_TOKENS.map(({ token, px }) => (
        <div
          key={token}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <span
            style={{
              width: 32,
              fontFamily: 'Geist Mono, monospace',
              fontSize: '0.8rem',
              color: 'var(--primary-foreground)',
            }}
          >
            {token}
          </span>
          <div
            style={{
              height: 14,
              width: px,
              background: 'var(--secondary)',
              borderRadius: 3,
            }}
          />
          <span
            style={{
              fontSize: '0.8rem',
              opacity: 0.65,
              color: 'var(--primary-foreground)',
            }}
          >
            {px}px
          </span>
        </div>
      ))}
    </div>
  )
}
