import { render, screen, fireEvent } from '@testing-library/react'
import { ContactForm } from './ContactForm'

beforeEach(() => {
  global.fetch = jest.fn()
})
afterEach(() => {
  jest.clearAllMocks()
})

function submitForm() {
  const form = screen.getByPlaceholderText('Your full name').closest('form')!
  fireEvent.submit(form)
}

describe('ContactForm', () => {
  it('renders the form with required fields and submit button', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Your full name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('123 456 7890')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@email.com')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows the success view after a successful submit', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<ContactForm />)
    submitForm()
    expect(await screen.findByText('Message sent!')).toBeInTheDocument()
  })

  it('shows an error message when the server returns a failure', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false })
    render(<ContactForm />)
    submitForm()
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
  })

  it('shows an error message when fetch throws a network error', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))
    render(<ContactForm />)
    submitForm()
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
  })

  it('disables the submit button while the request is in flight', async () => {
    let settle: (v: { ok: boolean }) => void
    ;(global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise((resolve) => { settle = resolve })
    )
    render(<ContactForm />)
    submitForm()
    expect(await screen.findByRole('button', { name: /send message/i })).toBeDisabled()
    settle!({ ok: true })
    expect(await screen.findByText('Message sent!')).toBeInTheDocument()
  })

  it('"Send another message" resets back to the empty form', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<ContactForm />)
    submitForm()
    await screen.findByText('Message sent!')
    fireEvent.click(screen.getByRole('button', { name: /send another message/i }))
    expect(screen.getByPlaceholderText('Your full name')).toBeInTheDocument()
    expect(screen.queryByText('Message sent!')).not.toBeInTheDocument()
  })

  it('posts to /api/contact with the correct payload', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Your full name'), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByPlaceholderText('you@email.com'), { target: { value: 'jane@example.com' } })
    submitForm()
    await screen.findByText('Message sent!')
    const [url, options] = (global.fetch as jest.Mock).mock.calls[0] as [string, RequestInit]
    expect(url).toBe('/api/contact')
    expect(options.method).toBe('POST')
    const body = JSON.parse(options.body as string)
    expect(body.source).toBe('contact')
    expect(body.name).toBe('Jane Doe')
    expect(body.email).toBe('jane@example.com')
  })
})
