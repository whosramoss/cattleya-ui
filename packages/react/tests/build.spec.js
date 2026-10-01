import { describe, it, expect, beforeEach } from 'vitest'
import { join } from 'node:path'
import { readdirSync } from 'node:fs'

describe('@cattleya-ui', () => {
  it('has emitted a css file', () => {
    const url = join(__dirname, '../dist')
    const dir = readdirSync(url)

    expect(dir.some((file) => file.includes('style.css'))).toBe(true)
  })

  it('has emitted a js entry file', () => {
    const url = join(__dirname, '../dist')
    const dir = readdirSync(url)

    expect(dir).toEqual(expect.arrayContaining(['lib.js']))
  })

  it('has geist font files next to the theme', () => {
    const url = join(__dirname, '../src/styles/public/fonts/geist')
    const dir = readdirSync(url)

    expect(dir).toEqual(
      expect.arrayContaining([
        'latin-wght-normal.woff2',
        'latin-ext-wght-normal.woff2'
      ])
    )
  })
})
