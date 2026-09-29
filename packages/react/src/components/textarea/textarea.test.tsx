import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Textarea } from './textarea'

describe('Textarea', () => {
  it('should render a textarea by default', () => {
    render(<Textarea aria-label="detalhe" />)
    expect(screen.getByRole('textbox')).toHaveValue('')
  })

    it('should increase textarea height from its mirror control', () => {
      render(<Textarea aria-label="detalhe" />)
      const textarea = screen.getByTestId('textarea')
      const control = screen.getByTestId('control')
      vi.spyOn(control, 'getBoundingClientRect').mockReturnValue({ height: 100 } as DOMRect)
      fireEvent.change(textarea, { target: { value: 'texto' } })
      expect(textarea.getAttribute('style')).toContain('--textarea-height')
      expect(textarea.getAttribute('style')).not.toContain('--textarea-height: 0rem')
    })

  describe('with states', () => {
    it('should be disabled', () => {
      render(<Textarea disabled aria-label="detalhe" />)
      expect(screen.getByTestId('textarea')).toBeDisabled()
    })

    it('should be valid', () => {
      render(<Textarea validated valid aria-label="detalhe" />)
      expect(screen.getByTestId('textarea')).not.toHaveAttribute('data-invalid')
    })

    it('shouldn\'t be invalid', () => {
      render(<Textarea validated={false} valid={false} aria-label="detalhe" />)
      expect(screen.getByTestId('textarea')).not.toHaveAttribute('data-invalid')
    })

    it('should be invalid', () => {
      render(<Textarea validated valid={false} aria-label="detalhe" />)
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-invalid', 'true')
    })
  })
})
