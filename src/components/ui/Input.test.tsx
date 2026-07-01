import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('displays the provided placeholder', () => {
    render(<Input placeholder="Enter your email" />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('accepts and displays typed text', async () => {
    const user = userEvent.setup()
    render(<Input />)
    const input = screen.getByRole('textbox')
    await user.type(input, 'hello world')
    expect(input).toHaveValue('hello world')
  })

  it('calls onChange on each keystroke', async () => {
    const user = userEvent.setup()
    const handleChange = jest.fn()
    render(<Input onChange={handleChange} />)
    await user.type(screen.getByRole('textbox'), 'abc')
    expect(handleChange).toHaveBeenCalledTimes(3)
  })

  it('applies a custom className', () => {
    render(<Input className="extra-class" />)
    expect(screen.getByRole('textbox')).toHaveClass('extra-class')
  })

  it('is disabled when the disabled prop is set', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('forwards the type attribute (e.g. password)', () => {
    render(<Input type="password" />)
    expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'password')
  })
})
