import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@/components/textarea/textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    backgrounds: { disable: true, default: 'light' }
  },
  args: {
    placeholder: 'placeholder'
  }
}

type Story = StoryObj<typeof Textarea>

export const Default: Story = {}

export const TextareaDisabled: Story = {
  args: { disabled: true }
}

export const TextareaInvalid: Story = {
  args: { validated: true, valid: false, defaultValue: 'invalid value' }
}

export const TextareaComposition: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="label-150">label</label>
      <Textarea id="input" {...args} />
      <span className="label-150">helper text</span>
    </div>
  )
}

export const TextareaCompositionDisabled: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="label-150">label</label>
      <Textarea id="input" {...args} disabled />
      <span className="label-150">helper text</span>
    </div>
  )
}

export const TextareaCompositionValid: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="label-150">label</label>
      <Textarea id="input" {...args} defaultValue="valid value" validated valid />
      <span className="label-150">helper text</span>
    </div>
  )
}

export const TextareaCompositionInvalid: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="label-150">label</label>
      <Textarea id="input" {...args} defaultValue="invalid value" validated valid={false} />
      <span className="label-150">helper text</span>
    </div>
  )
}

export const TextareaPlayground: Story = {
  args: { defaultValue: 'value' }
}

export default meta
