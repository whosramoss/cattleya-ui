import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from './input'

describe('Input', () => {
  describe('with primitive behavior', () => {
    it('should render a input by default', () => {
      render(<Input aria-label="campo" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveValue('')
    })

    it('should render as child', () => {
      render(
        <Input asChild>
          <input type="number" aria-label="numero" defaultValue="0" />
        </Input>
      )
      expect(screen.getByRole('spinbutton')).toHaveValue(0)
    })
  })

  describe('with states', () => {
    it('should be disabled', () => {
      render(<Input disabled aria-label="campo" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('data-disabled', 'true')
      expect(input).toBeDisabled()
    })

    it('should be valid', () => {
      render(<Input validated valid aria-label="campo" />)
      expect(screen.getByRole('textbox')).not.toHaveAttribute('data-invalid')
    })

    it('shouldn\'t be invalid', () => {
      render(<Input validated={false} valid={false} aria-label="campo" />)
      expect(screen.getByRole('textbox')).not.toHaveAttribute('data-invalid')
    })

    it('should be invalid', () => {
      render(<Input validated valid={false} aria-label="campo" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('data-invalid', 'true')
    })
  })
})
