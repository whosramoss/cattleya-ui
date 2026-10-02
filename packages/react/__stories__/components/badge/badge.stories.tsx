import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/components/badge/badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    as: { table: { disable: true } },
    asChild: { type: 'boolean' },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'discount', 'cashback', 'positive', 'negative', 'neutral', 'verified']
    }
  }
}

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: { children: 'used' }
}

export const Primary: Story = {
  args: { children: 'featured', variant: 'primary' }
}

export const Discount: Story = {
  args: { children: '-20%', variant: 'discount' }
}

export const Cashback: Story = {
  args: { children: 'cashback', variant: 'cashback' }
}

export const Positive: Story = {
  args: { children: 'approved', variant: 'positive' }
}

export const Negative: Story = {
  args: { children: 'declined', variant: 'negative' }
}

export const Neutral: Story = {
  args: { children: 'pending', variant: 'neutral' }
}

export const Verified: Story = {
  args: { children: 'verified', variant: 'verified' }
}

export const VariantResponsive: Story = {
  args: { children: 'offer', variant: { xs: 'discount', md: 'primary' } }
}

export default meta
