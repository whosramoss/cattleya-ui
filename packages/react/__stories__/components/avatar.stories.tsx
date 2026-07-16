import type { Meta, StoryObj } from '@storybook/react'

import { AvatarFallback, AvatarImage, Avatar } from '@/components/avatar'

const meta: Meta<typeof Avatar> = {
  title: 'components/Avatar',
  component: Avatar,
  argTypes: {
    hasBorder: {
      control: 'boolean',
    },
  },
  args: {
    hasBorder: false,
  },
  render: args => (
    <Avatar {...args}>
      <AvatarImage
        src="https://github.com/whosramoss.png"
        alt="Gabriel Ramos"
      />
      <AvatarFallback>GR</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {}

export const WithBorder: Story = {
  args: {
    hasBorder: true,
  },
}

export const Fallback: Story = {
  render: args => (
    <Avatar {...args}>
      <AvatarImage
        src="https://broken-url.invalid/avatar.png"
        alt="Gabriel Ramos"
      />
      <AvatarFallback>GR</AvatarFallback>
    </Avatar>
  ),
}

export const Api: Story = {}
