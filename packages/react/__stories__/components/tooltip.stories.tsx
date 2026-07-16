import type { Meta, StoryObj } from '@storybook/react'

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/tooltip'
import { Button } from '@/components/button'

type TooltipContentProps = React.ComponentProps<typeof TooltipContent>

const meta: Meta<TooltipContentProps> = {
  title: 'components/Tooltip',
  component: TooltipContent,
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: 'radio',
    },
  },
  args: {
    side: 'top',
  },
  render: args => (
    <TooltipProvider>
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent {...args}>
          <span>Add to library</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<TooltipContentProps>

export const Top: Story = {
  args: {
    side: 'top',
  },
}

export const Right: Story = {
  args: {
    side: 'right',
  },
}

export const Bottom: Story = {
  args: {
    side: 'bottom',
  },
}

export const Left: Story = {
  args: {
    side: 'left',
  },
}

export const Api: Story = {
  args: {
    side: 'top',
  },
}
