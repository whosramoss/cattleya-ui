import type { Meta, StoryObj } from '@storybook/react'
import { toArgTypes, toArgs } from '../../utils/argTypes'

const primaryMap = [
  { name: 'primary-01', description: 'Brand primary color', value: '#E6007B' },
  { name: 'primary-01-dark', description: 'Darker brand primary color', value: '#A60058' },
  { name: 'primary-01-light', description: 'Lighter brand primary color', value: '#FF2B90' }
]

const secondaryMap = [
  { name: 'secondary-01', description: 'Secondary color for promotions and discounts', value: '#FFFE68' },
  { name: 'secondary-02', description: 'Secondary color for branding and cashback', value: '#8AEBFF' }
]

const tertiaryMap = [
  { name: 'tertiary-01', description: 'Tertiary color for fill on selectable components', value: '#FFC2D0' },
  { name: 'tertiary-01-light', description: 'Lighter tertiary color for backgrounds', value: '#FFECF2' },
  { name: 'tertiary-01-dark', description: 'Darker tertiary color for borders on selectable components', value: '#FF9ABD' }
]

const neutralMap = [
  { name: 'gray-100', description: 'Primary gray used in titles, text, and icons', value: '#18191B' },
  { name: 'gray-80', description: 'Secondary gray used in text and icons', value: '#4F5358' },
  { name: 'gray-60', description: 'Tertiary gray used in disabled text', value: '#A9ABB2' },
  { name: 'gray-40', description: 'Gray used in borders', value: '#EDEEEF' },
  { name: 'gray-20', description: 'Gray used in backgrounds', value: '#F3F5F5' },
  { name: 'white', description: 'White used in backgrounds, icons, and text', value: '#FFFFFF' }
]

const statusMap = [
  { name: 'status-positive', description: 'Positive (success) status color used in icons', value: '#2F8C41' },
  { name: 'status-positive-dark', description: 'Darker positive status color used in text', value: '#025107' },
  { name: 'status-positive-light', description: 'Lighter positive status color used in backgrounds', value: '#F0FFD6' },
  { name: 'status-negative', description: 'Negative (error) status color used in icons', value: '#FF4D00' },
  { name: 'status-negative-dark', description: 'Darker negative status color used in text', value: '#862315' },
  { name: 'status-negative-light', description: 'Lighter negative status color used in backgrounds', value: '#FFE2DD' },
  { name: 'status-neutral', description: 'Neutral (warning) status color used in icons', value: '#F3B700' },
  { name: 'status-neutral-dark', description: 'Darker neutral status color used in text', value: '#754B31' },
  { name: 'status-neutral-light', description: 'Lighter neutral status color used in backgrounds', value: '#FFFADE' },
  { name: 'status-verified', description: 'Verified accounts color used in icons', value: '#0166FE' },
  { name: 'status-verified-dark', description: 'Darker verified accounts color used in text', value: '#0844B5' },
  { name: 'status-verified-light', description: 'Lighter verified accounts color used in backgrounds', value: '#E2EEFF' }
]

const textMap = [
  { name: 'text-primary', description: 'Primary color for titles, body, and labels', value: '#18191B' },
  { name: 'text-secondary', description: 'Secondary color for body and labels', value: '#4F5358' },
  { name: 'text-disabled', description: 'Tertiary color for disabled component text', value: '#A9ABB2' },
  { name: 'text-inverse', description: 'Color for text on colored or darker backgrounds', value: '#FFFFFF' },
  { name: 'text-clickable', description: 'Color for links', value: '#E6007B' },
  { name: 'text-selected', description: 'Color for selected text', value: '#FF2B90' },
  { name: 'text-on-color', description: 'Color for text on colored backgrounds', value: '#A60058' },
  { name: 'text-positive', description: 'Positive (success) status color for text', value: '#2F8C41' },
  { name: 'text-positive-dark', description: 'Positive (success) status color for text', value: '#025107' },
  { name: 'text-negative', description: 'Negative (error) status color for text', value: '#FF4D00' },
  { name: 'text-negative-dark', description: 'Negative (error) status color for text', value: '#862315' },
  { name: 'text-neutral', description: 'Neutral (warning) status color for text', value: '#F3B700' },
  { name: 'text-neutral-dark', description: 'Neutral (warning) status color for text', value: '#754B31' },
  { name: 'text-verified', description: 'Verified color for text', value: '#0844B5' }
]

const surfaceMap = [
  { name: 'surface-primary', description: 'Primary color for surfaces', value: '#FFFFFF' },
  { name: 'surface-secondary', description: 'Secondary color for surfaces and dividers', value: '#F3F5F5' },
  { name: 'surface-tertiary', description: 'Tertiary color for surfaces', value: '#FFECF2' },
  { name: 'surface-discount', description: 'Color for surfaces in a promotion or discount context', value: '#FFFE68' },
  { name: 'surface-cashback', description: 'Color for surfaces in a cashback context', value: '#8AEBFF' },
  { name: 'surface-disabled', description: 'Color for disabled surfaces', value: '#F3F5F5' },
  { name: 'surface-clickable', description: 'Color for clickable surfaces', value: '#E6007B' },
  { name: 'surface-selected-01', description: 'Color for selected surfaces without fill', value: '#FF2B90' },
  { name: 'surface-on-color', description: 'Color for surfaces on top of other colors', value: '#A60058' },
  { name: 'surface-selected-02', description: 'Color for selected surfaces with fill', value: '#FFC2D0' },
  { name: 'surface-positive', description: 'Color for surfaces with a positive status', value: '#F0FFD6' },
  { name: 'surface-negative', description: 'Color for surfaces with a negative status', value: '#FFE2DD' },
  { name: 'surface-neutral', description: 'Color for surfaces with a neutral status', value: '#FFFADE' },
  { name: 'surface-verified', description: 'Color for surfaces with a verified status', value: '#E2EEFF' }
]

const borderMap = [
  { name: 'border-primary', description: 'Color for borders', value: '#EDEEEF' },
  { name: 'border-inverse', description: 'Color for borders on colored backgrounds', value: '#FFFFFF' },
  { name: 'border-clickable', description: 'Color for clickable borders', value: '#E6007B' },
  { name: 'border-selected-01', description: 'Color for selected borders', value: '#FF2B90' },
  { name: 'border-selected-02', description: 'Color for selected borders', value: '#FF9ABD' },
  { name: 'border-on-color', description: 'Color for borders on top of other colors', value: '#A60058' },
  { name: 'border-positive', description: 'Color for borders with a positive status', value: '#2F8C41' },
  { name: 'border-negative', description: 'Color for borders with a negative status', value: '#FF4D00' },
  { name: 'border-neutral', description: 'Color for borders with a neutral status', value: '#F3B700' },
  { name: 'border-verified', description: 'Color for borders with a verified status', value: '#0166FE' }
]

const buttonMap = [
  { name: 'button-enabled', description: 'Primary color for enabled buttons', value: '#E6007B' },
  { name: 'on-button-enabled', description: 'Text color on enabled buttons', value: '#FFFFFF' },
  { name: 'button-hover', description: 'Hover color for buttons', value: '#A60058' },
  { name: 'on-button-hover', description: 'Text color on hovered buttons', value: '#FFFFFF' },
  { name: 'button-disabled', description: 'Color for disabled buttons', value: '#F3F5F5' },
  { name: 'on-button-disabled', description: 'Text/icon color on disabled buttons', value: '#8C9696' },
  { name: 'button-inverse-enabled', description: 'Color for buttons on colored or dark backgrounds', value: '#FFFFFF' },
  { name: 'on-button-inverse-enabled', description: 'Text color on inverse buttons', value: '#E6007B' },
  { name: 'button-inverse-hover', description: 'Hover color for inverse buttons', value: '#D7DCDC' },
  { name: 'on-button-inverse-hover', description: 'Text color on inverse buttons on hover', value: '#E6007B' },
  { name: 'button-primary-pressed', description: 'Background color of a pressed primary button', value: '#A60058' },
  { name: 'on-button-primary-pressed', description: 'Text color of a pressed primary button', value: '#FFFFFF' },
  { name: 'button-secondary-pressed', description: 'Background color of a pressed secondary button', value: '#FFFFFF' },
  { name: 'on-button-secondary-pressed', description: 'Text color of a pressed secondary button', value: '#A60058' },
  { name: 'button-tertiary-pressed', description: 'Background color of a pressed tertiary button', value: '#F3F5F5' },
  { name: 'on-button-tertiary-pressed', description: 'Text color of a pressed tertiary button', value: '#A60058' }
]

const focusMap = [
  { name: 'accessibility', description: 'Focus state border color on components', value: '#0166FE' }
]

const meta: Meta = {
  title: 'Design System/Colors',
  tags: ['!dev']
}

type Story = StoryObj

const createColorStory = (map: any[], control = 'color'): Story => ({
  render: () => null,
  argTypes: toArgTypes(map, { control }),
  args: toArgs(map)
})

export const Primary = createColorStory(primaryMap)
export const Secondary = createColorStory(secondaryMap)
export const Tertiary = createColorStory(tertiaryMap)
export const Neutral = createColorStory(neutralMap)
export const Status = createColorStory(statusMap)

export const Text = createColorStory(textMap)
export const Surface = createColorStory(surfaceMap)
export const Border = createColorStory(borderMap)

export const Button = createColorStory(buttonMap)
export const Focus = createColorStory(focusMap)

export default meta
