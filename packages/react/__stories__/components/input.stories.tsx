import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components/input'

type InputProps = React.ComponentPropsWithRef<'input'>

const meta: Meta<InputProps> = {
  title: 'components/Input',
  component: Input,
  args: {
    placeholder: 'Placeholder',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<InputProps>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Api: Story = {}
