import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/components/badge/badge'
import { Card } from '@/components/card/card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    as: { table: { disable: true } },
    asChild: { type: 'boolean' },
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'tertiary']
    }
  }
}

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    className: 'max-w-70',
    children: (
      <>
        <div className="surface-secondary corner-radius-300 w-full aspect-square" />
        <div className="label-150-semi-strong text-primary">vintage t-shirt</div>
        <div className="title-200 text-primary">$45.00</div>
      </>
    )
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    className: 'max-w-70',
    children: (
      <>
        <h2 className="title-200 text-primary">deal of the week</h2>
        <p className="body-100 text-secondary">up to 50% off selected items</p>
      </>
    )
  }
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    className: 'max-w-70',
    children: (
      <>
        <h2 className="title-200 text-primary">google one</h2>
        <p className="body-100 text-secondary">more cloud storage</p>
      </>
    )
  }
}

export const Product: Story = {
  args: {
    className: 'max-w-70',
    children: (
      <>
        <div className="relative">
          <div className="surface-secondary corner-radius-300 w-full aspect-square" />
          <Badge variant="discount" className="absolute top-2 left-2">-20%</Badge>
        </div>
        <div className="label-150-semi-strong text-primary">retro sneakers</div>
        <div className="title-200 text-primary">$96.00</div>
      </>
    )
  }
}

export const AsLink: Story = {
  args: {
    asChild: true,
    className: 'max-w-70',
    children: (
      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        <div className="surface-secondary corner-radius-300 w-full aspect-square" />
        <div className="label-150-semi-strong text-primary">view on Google</div>
      </a>
    )
  }
}

export default meta
