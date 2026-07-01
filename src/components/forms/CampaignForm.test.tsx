import { render, screen, fireEvent } from '@testing-library/react'
import { CampaignForm } from './CampaignForm'

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

describe('CampaignForm', () => {
  it('renders name, phone and email fields with submit button', () => {
    render(<CampaignForm />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('+1 555 000 0000')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@email.com')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get verified listings/i })).toBeInTheDocument()
  })

  it('shows success view after successful submit', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<CampaignForm />)
    submitForm()
    expect(await screen.findByText("You're all set!")).toBeInTheDocument()
  })

  it('shows error message on server failure', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false })
    render(<CampaignForm />)
    submitForm()
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
  })

  it('disables submit button while submitting', async () => {
    let settle: (v: { ok: boolean }) => void
    ;(global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise((resolve) => { settle = resolve })
    )
    render(<CampaignForm />)
    submitForm()
    expect(await screen.findByRole('button', { name: /get verified listings/i })).toBeDisabled()
    settle!({ ok: true })
    expect(await screen.findByText("You're all set!")).toBeInTheDocument()
  })

  it('posts to /api/contact with source:"campaign"', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<CampaignForm />)
    submitForm()
    await screen.findByText("You're all set!")
    const [url, options] = (global.fetch as jest.Mock).mock.calls[0] as [string, RequestInit]
    expect(url).toBe('/api/contact')
    expect(JSON.parse(options.body as string).source).toBe('campaign')
  })
})
