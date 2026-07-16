const RADIUS_TOKENS = [
  { token: 'md', radius: 6 },
  { token: 'lg', radius: 8 },
  { token: 'xl', radius: 12 },
  { token: 'full', radius: 28 },
] as const

export function RadiusScale() {
  return (
    <div
      style={{
        margin: '1rem 0 2rem',
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
      }}
    >
      {RADIUS_TOKENS.map(({ token, radius }) => (
        <div
          key={token}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: 'var(--primary)',
              borderRadius: radius,
            }}
          />
          <span
            style={{
              fontSize: '0.8rem',
              fontFamily: 'Geist Mono, monospace',
              color: 'var(--primary-foreground)',
            }}
          >
            {token}
          </span>
        </div>
      ))}
    </div>
  )
}
