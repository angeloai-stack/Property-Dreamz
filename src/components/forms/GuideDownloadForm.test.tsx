import { render, screen, fireEvent } from '@testing-library/react'
import { GuideDownloadForm } from './GuideDownloadForm'

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

describe('GuideDownloadForm', () => {
  it('renders name, email fields and submit button', () => {
    render(<GuideDownloadForm />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@email.com')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get my free guide/i })).toBeInTheDocument()
  })

  it('shows success confirmation with the submitted email', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<GuideDownloadForm />)
    fireEvent.change(screen.getByPlaceholderText('you@email.com'), { target: { value: 'carlos@example.com' } })
    submitForm()
    expect(await screen.findByText('Check your inbox!')).toBeInTheDocument()
    expect(screen.getByText('carlos@example.com')).toBeInTheDocument()
  })

  it('shows error message when server returns failure', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false })
    render(<GuideDownloadForm />)
    submitForm()
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
  })

  it('shows error message on network error', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))
    render(<GuideDownloadForm />)
    submitForm()
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
  })

  it('disables submit button while the request is in flight', async () => {
    let settle: (v: { ok: boolean }) => void
    ;(global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise((resolve) => { settle = resolve })
    )
    render(<GuideDownloadForm />)
    submitForm()
    expect(await screen.findByRole('button', { name: /get my free guide/i })).toBeDisabled()
    settle!({ ok: true })
    expect(await screen.findByText('Check your inbox!')).toBeInTheDocument()
  })

  it('posts to /api/guide-download with name and email', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<GuideDownloadForm />)
    fireEvent.change(screen.getByPlaceholderText('Your name'), { target: { value: 'Ana' } })
    fireEvent.change(screen.getByPlaceholderText('you@email.com'), { target: { value: 'ana@example.com' } })
    submitForm()
    await screen.findByText('Check your inbox!')
    const [url, options] = (global.fetch as jest.Mock).mock.calls[0] as [string, RequestInit]
    expect(url).toBe('/api/guide-download')
    const body = JSON.parse(options.body as string)
    expect(body.name).toBe('Ana')
    expect(body.email).toBe('ana@example.com')
  })
})
