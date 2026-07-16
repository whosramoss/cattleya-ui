import type { ReactNode } from 'react'

type TokenTableProps = {
  columns: string[]
  rows: ReactNode[][]
}

export function TokenTable({ columns, rows }: TokenTableProps) {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.85rem',
        margin: '1rem 0 2rem',
        fontFamily: 'Geist, sans-serif',
      }}
    >
      <thead>
        <tr>
          {columns.map(column => (
            <th
              key={column}
              style={{
                textAlign: 'left',
                padding: '0.6rem 0.75rem',
                borderBottom: '2px solid var(--border)',
                color: 'var(--primary-foreground)',
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                style={{
                  padding: '0.6rem 0.75rem',
                  borderBottom: '1px solid var(--border)',
                  color: 'var(--primary-foreground)',
                  verticalAlign: 'top',
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function TokenCode({ children }: { children: ReactNode }) {
  return (
    <code
      style={{
        fontFamily: 'Geist Mono, monospace',
        fontSize: '0.8rem',
        background: 'var(--main)',
        color: 'var(--primary-foreground)',
        padding: '0.15rem 0.4rem',
        borderRadius: 4,
      }}
    >
      {children}
    </code>
  )
}
