import { render, screen, fireEvent } from '@testing-library/react'
import { PropertyInquiryForm } from './PropertyInquiryForm'

beforeEach(() => {
  global.fetch = jest.fn()
})
afterEach(() => {
  jest.clearAllMocks()
})

function submitForm() {
  const form = screen.getByPlaceholderText('Your name').closest('form')!
  fireEvent.submit(form)
}

describe('PropertyInquiryForm', () => {
  it('renders required fields and submit button', () => {
    render(<PropertyInquiryForm />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('+1 555 000 0000')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@email.com')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /request more information/i })).toBeInTheDocument()
  })

  it('defaults contact method to WhatsApp', () => {
    render(<PropertyInquiryForm />)
    expect(screen.getByRole('radio', { name: 'WhatsApp' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Phone call' })).not.toBeChecked()
    expect(screen.getByRole('radio', { name: 'Email' })).not.toBeChecked()
  })

  it('allows switching contact method', () => {
    render(<PropertyInquiryForm />)
    fireEvent.click(screen.getByRole('radio', { name: 'Email' }))
    expect(screen.getByRole('radio', { name: 'Email' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'WhatsApp' })).not.toBeChecked()
  })

  it('shows success view after successful submit', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<PropertyInquiryForm />)
    submitForm()
    expect(await screen.findByText('Request sent!')).toBeInTheDocument()
  })

  it('shows error on server failure', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false })
    render(<PropertyInquiryForm />)
    submitForm()
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
  })

  it('disables submit button while submitting', async () => {
    let settle: (v: { ok: boolean }) => void
    ;(global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise((resolve) => { settle = resolve })
    )
    render(<PropertyInquiryForm />)
    submitForm()
    expect(await screen.findByRole('button', { name: /request more information/i })).toBeDisabled()
    settle!({ ok: true })
    expect(await screen.findByText('Request sent!')).toBeInTheDocument()
  })

  it('posts to /api/property-inquiry', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<PropertyInquiryForm />)
    submitForm()
    await screen.findByText('Request sent!')
    const [url] = (global.fetch as jest.Mock).mock.calls[0] as [string, RequestInit]
    expect(url).toBe('/api/property-inquiry')
  })
})
