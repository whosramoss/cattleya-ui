import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/button/button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    as: { table: { disable: true } },
    asChild: { type: 'boolean' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    }
  }
}

type Story = StoryObj<typeof Button>

export const ButtonPrimary: Story = {
  args: { children: 'Button text' }
}

export const ButtonSecondary: Story = {
  args: { children: 'Button text', variant: 'secondary' }
}

export const ButtonTertiary: Story = {
  args: { children: 'Button text', variant: 'tertiary' }
}

export const ButtonLoading: Story = {
  args: { children: 'Button text', loading: true }
}

export const ButtonDisabled: Story = {
  args: { children: 'Button text', disabled: true }
}

export const ButtonVariantResponsive: Story = {
  args: { children: 'Button text', variant: { xs: 'primary', md: 'secondary' } }
}

export const ButtonAsLink: Story = {
  args: {
    asChild: true,
    children: (
      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        Search on Google
      </a>
    )
  }
}

export const ButtonPlayground: Story = {
  args: { children: 'Button text' }
}

export default meta
