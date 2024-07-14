import { describe, it, expect } from 'vitest'
import { formattedDate, isRecentDate } from '../helper'

describe('formattedDate', () => {
  it('formats the date correctly', () => {
    const dateStr = '2024-07-07'
    const formatted = formattedDate(dateStr)

    expect(formatted).toBe('July 07')
  })

  it('handles invalid dates gracefully', () => {
    const dateStr = 'invalid-date'
    const formatted = formattedDate(dateStr)

    expect(formatted).toBe('Invalid Date')
  })
})

describe('isRecentDate', () => {
  it('returns true for dates within the last 7 days', () => {
    const recentDate = new Date()
    recentDate.setDate(recentDate.getDate() - 3)

    expect(isRecentDate(recentDate.toISOString())).toBe(true)
  })

  it('returns false for dates older than 7 days', () => {
    const oldDate = new Date()
    oldDate.setDate(oldDate.getDate() - 10)

    expect(isRecentDate(oldDate.toISOString())).toBe(false)
  })

  it('returns false for future dates', () => {
    const futureDate = new Date()
    futureDate.setDate(futureDate.getDate() + 1)

    expect(isRecentDate(futureDate.toISOString())).toBe(false)
  })
})