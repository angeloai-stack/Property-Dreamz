import { formatMXN, formatUSD, formatPrice } from './utils'

describe('formatMXN', () => {
  it('formats an exact million — no decimal', () => {
    expect(formatMXN(4_000_000)).toBe('$4M MXN')
  })

  it('formats a partial million — keeps significant decimals', () => {
    expect(formatMXN(4_250_000)).toBe('$4.25M MXN')
  })

  it('strips trailing zero from single-decimal values', () => {
    expect(formatMXN(500_000)).toBe('$0.5M MXN')
  })

  it('formats a value well above 1M', () => {
    expect(formatMXN(12_000_000)).toBe('$12M MXN')
  })
})

describe('formatUSD', () => {
  it('formats exactly 1M with M suffix and two decimals', () => {
    expect(formatUSD(1_000_000)).toBe('USD $1.00M')
  })

  it('formats values above 1M in millions', () => {
    expect(formatUSD(2_500_000)).toBe('USD $2.50M')
  })

  it('formats values below 1M with K suffix', () => {
    expect(formatUSD(250_000)).toBe('USD $250K')
  })

  it('formats exact 500K', () => {
    expect(formatUSD(500_000)).toBe('USD $500K')
  })

  it('formats values just below 1M', () => {
    expect(formatUSD(999_000)).toBe('USD $999K')
  })
})

describe('formatPrice', () => {
  it('returns MXN format when currency is MXN', () => {
    expect(formatPrice(4_250_000, 250_000, 'MXN')).toBe('$4.25M MXN')
  })

  it('returns USD format when currency is USD', () => {
    expect(formatPrice(4_250_000, 250_000, 'USD')).toBe('USD $250K')
  })

  it('uses the correct value for each currency', () => {
    expect(formatPrice(10_000_000, 1_000_000, 'MXN')).toBe('$10M MXN')
    expect(formatPrice(10_000_000, 1_000_000, 'USD')).toBe('USD $1.00M')
  })
})
