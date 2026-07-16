import type { Meta, StoryObj } from '@storybook/react'

import { cn } from '@/utils/cn'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from '@/components/dropdown-menu'

import {
  LayoutGridIcon,
  TrashIcon,
  Building2,
  UserCircleIcon,
  ChevronRightIcon,
  BellIcon,
} from 'lucide-react'

const ITEMS = [
  { icon: <UserCircleIcon size={16} />, name: 'Profile' },
  { icon: <LayoutGridIcon size={16} />, name: 'Your applications' },
  { icon: <Building2 size={16} />, name: 'Teams' },
  { icon: <BellIcon size={16} />, name: 'Notifications' },
  {
    icon: <TrashIcon size={16} />,
    name: 'Remove account',
    customStyle:
      '!text-red-500 duration-150 hover:!bg-red-600/10 focus-visible:text-red-500 focus-visible:!bg-red-500/10 focus-visible:!border-red-500/10',
  },
]

const meta: Meta<typeof DropdownMenu> = {
  title: 'components/Dropdown',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof DropdownMenu>

export const Basic: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
          Settings
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {ITEMS.map(({ icon, name, customStyle }, index) => (
          <DropdownMenuItem key={index} className={cn(customStyle)}>
            {icon}
            <span className="flex items-center gap-1 text-sm font-medium">
              {name}
              <ChevronRightIcon size={12} />
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const Floating: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
          Settings
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent floating className="mt-2">
        {ITEMS.map(({ icon, name, customStyle }, index) => (
          <DropdownMenuItem key={index} className={cn(customStyle)}>
            {icon}
            <span className="flex items-center gap-1 text-sm font-medium">
              {name}
              <ChevronRightIcon size={12} />
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const Api: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
          Settings
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {ITEMS.map(({ icon, name, customStyle }, index) => (
          <DropdownMenuItem key={index} className={cn(customStyle)}>
            {icon}
            <span className="flex items-center gap-1 text-sm font-medium">
              {name}
              <ChevronRightIcon size={12} />
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
