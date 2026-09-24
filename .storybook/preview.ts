import type { Preview } from '@storybook/react'
import './preview.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: {
        order: ['Getting Started', 'Design System', 'Components']
      }
    },
    controls: {
      disableSaveFromUI: true
    }
  },
  decorators: [
    (Story, context) => {
      context.canvasElement.closest('body')?.classList.add('theme')
      context.canvasElement.closest('.docs-story')?.classList.add('theme')
      return Story()
    }
  ]
}

export default preview
