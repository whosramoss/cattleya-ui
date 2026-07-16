import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: 'radio',
      options: [false, true, 'indeterminate'],
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

type Story = StoryObj<typeof Checkbox>

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

export const Indeterminate: Story = {
  args: {
    checked: 'indeterminate',
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
