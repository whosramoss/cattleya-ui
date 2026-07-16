import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string
  description?: ReactNode
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        background: 'var(--main)',
        border: '1px solid var(--border)',
        padding: '2rem',
        borderRadius: 12,
        marginBottom: '1.5rem',
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            color: 'var(--primary-foreground)',
            fontFamily: 'Geist, sans-serif',
          }}
        >
          {title}
        </h1>
        {description ? (
          <p
            style={{
              margin: '0.5rem 0 0',
              maxWidth: 560,
              color: 'var(--primary-muted)',
              fontFamily: 'Geist, sans-serif',
              fontSize: '0.95rem',
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
