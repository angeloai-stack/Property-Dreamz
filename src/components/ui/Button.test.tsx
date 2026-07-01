import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders a <button> element by default', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('renders an <a> element when href is provided', () => {
    render(<Button href="/about">About</Button>)
    const link = screen.getByRole('link', { name: 'About' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about')
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies a custom className alongside variant classes', () => {
    render(<Button className="my-custom">Btn</Button>)
    expect(screen.getByRole('button')).toHaveClass('my-custom')
  })

  it('is disabled when the disabled prop is set', () => {
    render(<Button disabled>Btn</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('does not fire onClick when disabled', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    render(<Button disabled onClick={handleClick}>Btn</Button>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('forwards arbitrary button attributes (type, aria-label)', () => {
    render(<Button type="submit" aria-label="Submit form">Submit</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('type', 'submit')
    expect(btn).toHaveAttribute('aria-label', 'Submit form')
  })
})
