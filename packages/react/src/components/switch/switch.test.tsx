import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from './switch'

describe('Switch', () => {
  it('should switch on click', async () => {
    const user = userEvent.setup()
    render(<Switch aria-label="ativar" />)
    const switchControl = screen.getByRole('switch')

    await user.click(switchControl)
    expect(switchControl).toBeChecked()

    await user.click(switchControl)
    expect(switchControl).not.toBeChecked()
  })
})
