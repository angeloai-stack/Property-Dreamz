import { render, screen, fireEvent } from '@testing-library/react'
import { DeveloperListingForm } from './DeveloperListingForm'

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

describe('DeveloperListingForm', () => {
  it('renders key fields and submit button', () => {
    render(<DeveloperListingForm />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('e.g. Grupo Inmobiliario XYZ')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@company.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('55 1234 5678')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit application/i })).toBeInTheDocument()
  })

  it('shows success view after successful submit', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<DeveloperListingForm />)
    submitForm()
    expect(await screen.findByText('Application received!')).toBeInTheDocument()
  })

  it('shows error on server failure', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false })
    render(<DeveloperListingForm />)
    submitForm()
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
  })

  it('shows error on network failure', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))
    render(<DeveloperListingForm />)
    submitForm()
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
  })

  it('disables submit button while submitting', async () => {
    let settle: (v: { ok: boolean }) => void
    ;(global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise((resolve) => { settle = resolve })
    )
    render(<DeveloperListingForm />)
    submitForm()
    expect(await screen.findByRole('button', { name: /submit application/i })).toBeDisabled()
    settle!({ ok: true })
    expect(await screen.findByText('Application received!')).toBeInTheDocument()
  })

  it('posts to /api/developer-listing with all field data', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<DeveloperListingForm />)
    fireEvent.change(screen.getByPlaceholderText('Your name'), { target: { value: 'Maria' } })
    fireEvent.change(screen.getByPlaceholderText('e.g. Grupo Inmobiliario XYZ'), { target: { value: 'Inmobiliaria Sol' } })
    fireEvent.change(screen.getByPlaceholderText('you@company.com'), { target: { value: 'maria@sol.mx' } })
    submitForm()
    await screen.findByText('Application received!')
    const [url, options] = (global.fetch as jest.Mock).mock.calls[0] as [string, RequestInit]
    expect(url).toBe('/api/developer-listing')
    const body = JSON.parse(options.body as string)
    expect(body.contactName).toBe('Maria')
    expect(body.companyName).toBe('Inmobiliaria Sol')
    expect(body.email).toBe('maria@sol.mx')
  })
})
