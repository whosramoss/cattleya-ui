import type { Meta, StoryObj } from '@storybook/react'
import '../../utils/index.storybook.css'

const radiusItems = [
  { name: 'corner-radius-100', value: '4px' },
  { name: 'corner-radius-200', value: '8px' },
  { name: 'corner-radius-300', value: '12px' },
  { name: 'corner-radius-400', value: '16px' },
  { name: 'corner-radius-full', value: '1000px' }
]

const meta: Meta = {
  title: 'Design System/Radius',
  tags: ['!dev']
}

type Story = StoryObj

export const RadiusScale: Story = {
  render: () => (
    <div className="radius-scale">
      {radiusItems.map((item) => (
        <div key={item.name} className="radius-scale__item">
          <div
            className="corner-radius-example"
            style={{ borderRadius: item.value }}
          />
          <span className="radius-scale__label">{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default meta
