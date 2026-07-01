import { cn } from './utils'

describe('cn', () => {
  it('returns empty string when called with no arguments', () => {
    expect(cn()).toBe('')
  })

  it('returns a single class unchanged', () => {
    expect(cn('foo')).toBe('foo')
  })

  it('concatenates multiple classes', () => {
    expect(cn('flex', 'items-center', 'gap-4')).toBe('flex items-center gap-4')
  })

  it('ignores falsy values (false, undefined, null, empty string)', () => {
    expect(cn('foo', false, undefined, null, '', 'bar')).toBe('foo bar')
  })

  it('supports object syntax — applies truthy keys only', () => {
    expect(cn({ 'is-active': true, 'is-hidden': false })).toBe('is-active')
  })

  it('resolves conflicting Tailwind utilities — last one wins', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('resolves conflicting text color utilities', () => {
    expect(cn('text-red-500', 'text-blue-600')).toBe('text-blue-600')
  })

  it('keeps non-conflicting utilities together', () => {
    expect(cn('flex', 'text-sm', 'font-bold')).toBe('flex text-sm font-bold')
  })

  it('merges with conditional expression', () => {
    const isActive = true
    expect(cn('btn', isActive && 'btn-active')).toBe('btn btn-active')
  })
})
