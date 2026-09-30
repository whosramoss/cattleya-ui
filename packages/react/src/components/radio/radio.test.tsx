import { useState } from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Radio } from './radio'

function RadioGroup() {
  const [value, setValue] = useState<string>()

  return (
    <div>
      <Radio value="0" name="radio" aria-label="zero" groupValue={value} onValueChange={setValue} />
      <Radio value="1" name="radio" aria-label="one" groupValue={value} onValueChange={setValue} />
      <span data-testid="value">{value}</span>
    </div>
  )
}

describe('Radio', () => {
  it('should behave like a radio button', async () => {
    const user = userEvent.setup()
    render(<RadioGroup />)

    await user.click(screen.getByLabelText('zero'))
    expect(screen.getByTestId('value')).toHaveTextContent('0')

    await user.click(screen.getByLabelText('one'))
    expect(screen.getByTestId('value')).toHaveTextContent('1')
  })
})
