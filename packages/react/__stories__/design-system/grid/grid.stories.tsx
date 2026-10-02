import type { Meta, StoryObj } from '@storybook/react'
import '../../utils/index.storybook.css'

const spacingItems = [
  { name: 'spacing-1', px: 4, used: '' },
  { name: 'spacing-2', px: 8, used: '' },
  { name: 'spacing-3', px: 12, used: '' },
  { name: 'spacing-4', px: 16, used: 'Medium gutter' },
  { name: 'spacing-5', px: 20, used: 'Small margin' },
  { name: 'spacing-6', px: 24, used: 'Large and Extra Large gutter' },
  { name: 'spacing-8', px: 32, used: 'Medium and Large margin' },
  { name: 'spacing-10', px: 40, used: '' },
  { name: 'spacing-12', px: 48, used: '' },
  { name: 'spacing-14', px: 56, used: '' },
  { name: 'spacing-16', px: 64, used: '' },
  { name: 'spacing-18', px: 72, used: '' },
  { name: 'spacing-20', px: 80, used: '' },
  { name: 'spacing-24', px: 96, used: '' },
  { name: 'spacing-32', px: 128, used: '' },
  { name: 'spacing-40', px: 160, used: '' },
  { name: 'spacing-80', px: 320, used: '' }
]

const breakpoints = [
  { name: 'Small', range: '0–599px', columns: 4, gutter: '10px', margin: '20px', tokens: 'gap-2.5 · mx-5' },
  { name: 'Medium', range: '600–899px', columns: 8, gutter: '16px', margin: '32px', tokens: 'gap-4 · mx-8' },
  { name: 'Large', range: '900–1199px', columns: 12, gutter: '24px', margin: '32px', tokens: 'gap-6 · mx-8' },
  { name: 'Extra Large', range: '1200px+', columns: 12, gutter: '24px', margin: '48px', tokens: 'gap-6 · mx-auto' }
]

const meta: Meta = {
  title: 'Design System/Grid',
  tags: ['!dev']
}

type Story = StoryObj

function GridExample({
  columns,
  gutter,
  margin
}: {
  columns: number
  gutter: string
  margin: string
}) {
  return (
    <div className="grid-example">
      <div className="grid-example__margin" style={{ width: margin }} />
      <div className="grid-example__content" style={{ gap: gutter }}>
        {Array.from({ length: columns }, (_, index) => (
          <div key={index} className="grid-example__column" />
        ))}
      </div>
      <div className="grid-example__margin" style={{ width: margin }} />
    </div>
  )
}

export const BreakpointsTogether: Story = {
  render: () => (
    <div className="grid-stack">
      {breakpoints.map((breakpoint) => (
        <div key={breakpoint.name}>
          <p className="grid-stack__label">
            {breakpoint.name} · {breakpoint.range} · {breakpoint.columns} cols · {breakpoint.tokens}
          </p>
          <GridExample
            columns={breakpoint.columns}
            gutter={breakpoint.gutter}
            margin={breakpoint.margin}
          />
        </div>
      ))}
    </div>
  )
}

export const SpacingScale: Story = {
  render: () => (
    <div className="spacing-scale">
      {spacingItems.map((item) => (
        <div
          key={item.name}
          className={
            item.used ? 'spacing-scale__row spacing-scale__row--used' : 'spacing-scale__row'
          }
        >
          <span className="spacing-scale__label">
            {item.name} · {item.px}px
          </span>
          <span className="spacing-scale__bar" style={{ width: item.px }} />
          {item.used ? <span className="spacing-scale__use">{item.used}</span> : null}
        </div>
      ))}
    </div>
  )
}

export default meta
