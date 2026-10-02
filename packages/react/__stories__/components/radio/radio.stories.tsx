import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from '@/components/radio/radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    backgrounds: { disable: true, default: 'light' }
  }
}

type Story = StoryObj<typeof Radio>

function RadioGroup({ name }: { name: string }) {
  return (
    <div className="flex flex-col gap-4">
      <label className="flex flex-row gap-3 items-center label-150">
        <Radio name={name} value="0" defaultChecked />
        option 1
      </label>
      <label className="flex flex-row gap-3 items-center label-150">
        <Radio name={name} value="1" />
        option 2
      </label>
    </div>
  )
}

export const Default: Story = {
  render: () => <RadioGroup name="radio-default" />
}

export default meta
