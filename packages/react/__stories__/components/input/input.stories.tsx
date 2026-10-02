import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/input/input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    backgrounds: { disable: true, default: 'light' }
  },
  args: {
    placeholder: 'placeholder'
  },
  argTypes: {
    as: { table: { disable: true } },
    asChild: { table: { disable: true } }
  }
}

type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const InputDisabled: Story = {
  args: { disabled: true }
}

export const InputInvalid: Story = {
  args: { validated: true, valid: false, defaultValue: 'invalid value' }
}

export const InputAsNumber: Story = {
  render: (args) => (
    <Input {...args} asChild>
      <input type="number" defaultValue="0" />
    </Input>
  )
}

export const InputComposition: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="label-150">label</label>
      <Input id="input" {...args} />
      <span className="label-150">helper text</span>
    </div>
  )
}

export const InputCompositionDisabled: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="label-150">label</label>
      <Input id="input" {...args} disabled />
      <span className="label-150">helper text</span>
    </div>
  )
}

export const InputCompositionValid: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="label-150">label</label>
      <Input id="input" {...args} defaultValue="valid value" validated valid />
      <span className="label-150">helper text</span>
    </div>
  )
}

export const InputCompositionInvalid: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="label-150">label</label>
      <Input id="input" {...args} defaultValue="invalid value" validated valid={false} />
      <span className="label-150">helper text</span>
    </div>
  )
}

export const InputPlayground: Story = {
  args: { defaultValue: 'value' }
}

export default meta
