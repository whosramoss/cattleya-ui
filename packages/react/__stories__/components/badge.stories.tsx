import type { Meta, StoryObj } from '@storybook/react'

import { Badge, type BadgeProps } from '@/components/badge'

const meta: Meta<BadgeProps> = {
  title: 'components/Badge',
  component: Badge,
  args: {
    children: 'Badge',
  },
  argTypes: {
    variant: {
      options: ['default', 'outline', 'success', 'destructive'],
      control: 'radio',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<BadgeProps>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Api: Story = {
  args: {
    variant: 'default',
    children: 'Badge',
  },
}
