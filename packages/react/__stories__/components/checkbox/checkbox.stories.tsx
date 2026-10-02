import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/checkbox/checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    backgrounds: { disable: true, default: 'light' }
  },
  render: (args) => (
    <label className="flex flex-row gap-3 items-center label-150">
      <Checkbox {...args} />
      checkbox label
    </label>
  )
}

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: { checked: false }
}

export default meta
