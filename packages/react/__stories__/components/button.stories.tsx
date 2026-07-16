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
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
