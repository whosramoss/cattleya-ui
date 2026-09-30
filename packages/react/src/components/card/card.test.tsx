import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from './card'

describe('Card', () => {
  it('should render a div by default', () => {
    render(<Card>conteúdo</Card>)
    expect(screen.getByText('conteúdo').tagName).toBe('DIV')
  })

  it('should accept a custom element', () => {
    render(<Card as="article">conteúdo</Card>)
    expect(screen.getByText('conteúdo').tagName).toBe('ARTICLE')
  })

  it('should render as its child', () => {
    render(
      <Card asChild>
        <a href="/produto">ver produto</a>
      </Card>
    )
    expect(screen.getByRole('link')).toHaveTextContent('ver produto')
  })
})
