import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './button'

describe('Button', () => {
  describe('with primitive behavior', () => {
    it('should render a button by default', () => {
      render(<Button />)
      expect(screen.getByRole('button')).toHaveTextContent('')
    })

    it('should accept a custom element', () => {
      render(<Button as="div">texto do botão</Button>)
      expect(screen.getByText('texto do botão').closest('div')).toBeTruthy()
    })

    it('should render as its child', () => {
      render(
        <Button asChild>
          <a href="/">texto do botão</a>
        </Button>
      )
      expect(screen.getByRole('link')).toHaveTextContent('texto do botão')
    })

    it('should render a span as its immediate child', () => {
      render(<Button>texto do botão</Button>)
      expect(screen.getByRole('button').querySelector('span')).toHaveTextContent('texto do botão')
    })
  })

  describe('with states', () => {
    it('should track when the button is being pressed', async () => {
      vi.useFakeTimers()
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<Button>press</Button>)
      const button = screen.getByRole('button')

      await user.pointer({ keys: '[MouseLeft>]', target: button })
      expect(button).toHaveAttribute('data-pressed', 'true')

      await user.pointer({ keys: '[/MouseLeft]', target: button })
      await vi.advanceTimersToNextTimerAsync()
      expect(button).not.toHaveAttribute('data-pressed')
      vi.useRealTimers()
    })

    it('should render a disabled button', () => {
      render(<Button disabled>press</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('data-disabled', 'true')
      expect(button).toBeDisabled()
    })

    it('should render a loading button', () => {
      render(<Button loading>press</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('data-loading', 'true')
      expect(button).toHaveAttribute('aria-busy', 'true')
      expect(button).toBeDisabled()
      expect(button).toHaveAttribute('aria-label', 'press')
      expect(button.querySelector('.button-wrapper')).toHaveClass('invisible')
    })
  })
})
