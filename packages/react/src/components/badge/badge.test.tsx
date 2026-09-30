import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from './badge'

describe('Badge', () => {
  it('should render a span by default', () => {
    render(<Badge>novo</Badge>)
    expect(screen.getByText('novo').tagName).toBe('SPAN')
  })

  it('should accept a custom element', () => {
    render(<Badge as="div">novo</Badge>)
    expect(screen.getByText('novo').tagName).toBe('DIV')
  })

  it('should render as its child', () => {
    render(
      <Badge asChild>
        <a href="/">ver oferta</a>
      </Badge>
    )
    expect(screen.getByRole('link')).toHaveTextContent('ver oferta')
  })
})
