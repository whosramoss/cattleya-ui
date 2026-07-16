import type { Meta, StoryObj } from '@storybook/react'

import { Button, type ButtonProps } from '@/components/button'

const meta: Meta<ButtonProps> = {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      options: ['default', 'outline', 'success', 'destructive'],
      control: 'radio',
    },
    isMagnetic: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<ButtonProps>

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

export const Magnetic: Story = {
  args: {
    isMagnetic: true,
    children: 'Magnetic',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}

export const Api: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
}
