import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Nav } from './Nav'
import { NAV } from '../data/app'

describe('Nav', () => {
  it('renders every nav link', () => {
    render(<Nav path="/" />)
    for (const n of NAV) {
      expect(screen.getByRole('link', { name: n.label })).toBeInTheDocument()
    }
  })
  it('marks the active route', () => {
    render(<Nav path="/pricing" />)
    const active = screen.getByRole('link', { name: 'Pricing' })
    expect(active.className).toContain('leaf-deep')
  })
})
