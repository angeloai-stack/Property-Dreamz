import '@testing-library/jest-dom'

// IntersectionObserver is not implemented in jsdom — stub it so components
// that use RevealOnScroll (or any IO-based hook) don't throw.
const mockIntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: mockIntersectionObserver,
})

// Define fetch as a writable, configurable property so each test
// can replace it with jest.fn() without restriction.
Object.defineProperty(global, 'fetch', {
  writable: true,
  configurable: true,
  value: jest.fn(),
})
