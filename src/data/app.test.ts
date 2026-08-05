import { describe, it, expect } from 'vitest'
import { NAV, HABITS, FEATURES, PLANS, STORIES, STATS, FAQ } from './app'

describe('app data', () => {
  it('has nav items with absolute hrefs', () => {
    expect(NAV.length).toBeGreaterThanOrEqual(3)
    for (const n of NAV) expect(n.href.startsWith('/')).toBe(true)
  })
  it('has habits with numeric streaks for the mockup', () => {
    expect(HABITS.length).toBeGreaterThan(0)
    for (const h of HABITS) expect(typeof h.streak).toBe('number')
  })
  it('has six features and exactly one featured plan', () => {
    expect(FEATURES).toHaveLength(6)
    expect(PLANS.filter((p) => p.featured)).toHaveLength(1)
  })
  it('has stories, four stats, and a non-empty FAQ', () => {
    expect(STORIES.length).toBeGreaterThanOrEqual(3)
    expect(STATS).toHaveLength(4)
    expect(FAQ.length).toBeGreaterThan(0)
  })
})
