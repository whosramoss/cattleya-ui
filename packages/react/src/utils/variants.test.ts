import { describe, it, expect } from 'vitest'
import { variants } from './variants'

describe('variants', () => {
  it('should return a function', () => {
    expect(variants({})).toBeInstanceOf(Function)
  })

  it('should return a class array', () => {
    const cn = variants({
      color: {
        primary: 'icon-primary',
        secondary: 'icon-secondary'
      }
    })

    expect(
      cn({
        color: 'primary'
      })
    ).toBe('icon-primary')
  })

  it('should apply base classes', () => {
    const cn = variants({
      color: {
        primary: 'icon-primary',
        secondary: 'icon-secondary'
      }
    }, {
      baseClass: 'icon'
    })

    expect(
      cn({
        color: 'primary'
      })
    ).toBe('icon icon-primary')
  })

  it('should return a responsive class array', () => {
    const cn = variants({
      color: {
        xs: {
          primary: 'icon-primary',
          secondary: 'icon-secondary'
        },
        md: {
          primary: 'md:icon-primary',
          secondary: 'md:icon-secondary'
        }
      }
    })

    expect(
      cn({
        color: { xs: 'primary', md: 'secondary' }
      })
    ).toBe('icon-primary md:icon-secondary')
  })

  it('should return the first screen value', () => {
    const cn = variants({
      color: {
        xs: {
          primary: 'icon-primary',
          secondary: 'icon-secondary'
        },
        md: {
          primary: 'md:icon-primary',
          secondary: 'md:icon-secondary'
        }
      }
    })

    expect(
      cn({
        color: 'primary'
      })
    ).toBe('icon-primary')
  })

  it('should work with any prop', () => {
    const cn = variants({
      size: {
        xs: 'icon-xs',
        sm: 'icon-sm',
        md: 'icon-md',
        lg: 'icon-lg'
      }
    })

    expect(
      cn({
        size: 'md'
      })
    ).toBe('icon-md')
  })

  it('should work with multiple props', () => {
    const cn = variants({
      size: {
        xs: {
          xs: 'icon-xs',
          sm: 'icon-sm',
          md: 'icon-md',
          lg: 'icon-lg'
        },
        md: {
          xs: 'md:icon-xs',
          sm: 'md:icon-sm',
          md: 'md:icon-md',
          lg: 'md:icon-lg'
        }
      },
      color: {
        primary: 'icon-primary',
        secondary: 'icon-secondary'
      }
    })

    expect(
      cn({
        size: { xs: 'md', md: 'lg' },
        color: 'primary'
      })
    ).toBe('icon-md md:icon-lg icon-primary')
  })

  it('should return a empty array', () => {
    const cn = variants({
      size: {
        xs: 'icon-xs',
        sm: 'icon-sm',
        md: 'icon-md',
        lg: 'icon-lg'
      },
      color: {
        primary: 'icon-primary',
        secondary: 'icon-secondary'
      }
    })

    expect(
      cn({})
    ).toBe('')
  })
})
