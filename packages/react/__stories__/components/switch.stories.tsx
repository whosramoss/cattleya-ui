import type { Meta, StoryObj } from '@storybook/react'

import { Switch, type SwitchProps } from '@/components/switch'

const meta: Meta<SwitchProps> = {
  title: 'components/Switch',
  component: Switch,
  argTypes: {
    checked: {
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

type Story = StoryObj<SwitchProps>

export const Unchecked: Story = {
  args: {
    checked: false,
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Api: Story = {
  args: {
    checked: false,
  },
}
