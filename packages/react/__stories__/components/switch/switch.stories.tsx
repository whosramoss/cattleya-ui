import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import { Switch } from '@/components/switch/switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    backgrounds: { disable: true, default: 'light' }
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs()

    return (
      <label className="flex flex-row gap-3 items-center label-150">
        <Switch
          {...args}
          onCheckedChange={(checked) => {
            args.onCheckedChange?.(checked)
            updateArgs({ checked })
          }}
        />
        switch label
      </label>
    )
  }
}

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: { checked: false }
}

export default meta
