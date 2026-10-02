import type { Meta, StoryObj } from '@storybook/react'
import '../../utils/index.storybook.css'

const scaleItems = [
  { name: 'title-100', sample: 'Title 100' },
  { name: 'title-200', sample: 'Title 200' },
  { name: 'title-300', sample: 'Title 300' },
  { name: 'title-400', sample: 'Title 400' },
  { name: 'title-600', sample: 'Title 600' },
  { name: 'title-700', sample: 'Title 700' },
  { name: 'body-100', sample: 'Body 100 — short copy, up to four lines.' },
  { name: 'body-150', sample: 'Body 150 — long copy, four lines or more.' },
  { name: 'label-100', sample: 'Label 100' },
  { name: 'label-150', sample: 'Label 150' },
  { name: 'label-200', sample: 'Label 200' }
]

const meta: Meta = {
  title: 'Design System/Typography',
  tags: ['!dev']
}

type Story = StoryObj

export const Hierarchy: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h1 className="title-400 text-primary">page title</h1>
      <h2 className="title-200 text-primary">section title</h2>
      <p className="body-150 text-secondary">
        supporting text that describes the content with the secondary color.
      </p>
      <p className="label-150-strong text-primary">emphasized label</p>
      <p className="label-150 text-secondary">helper label</p>
    </div>
  )
}

export const TypeScale: Story = {
  render: () => (
    <div className="typography-scale">
      {scaleItems.map((item) => (
        <div key={item.name} className="typography-scale__row">
          <span className="typography-scale__token">{item.name}</span>
          <p className={`${item.name} typography-scale__sample`}>{item.sample}</p>
        </div>
      ))}
    </div>
  )
}

export default meta
