import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from '@/components/spinner'

const meta: Meta<typeof Spinner> = {
  title: 'components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export const Small: Story = {
  args: {
    size: 'size-4',
  },
}

export const Large: Story = {
  args: {
    size: 'size-10',
  },
}

export const Api: Story = {}
