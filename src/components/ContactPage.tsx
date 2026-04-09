import { useState } from 'react'
import { isContactFormConfigured, submitContactForm } from '../lib/contact'

const emptyForm = {
  name: '',
  email: '',
  message: '',
}

const ContactPage = () => {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage(null)
    setStatus('submitting')

    try {
      await submitContactForm(formData)
      setStatus('success')
      setFormData(emptyForm)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again later.',
      )
    }
  }

  return (
    <div className="page-shell pb-16 pt-14 sm:pt-16">
      <div className="mx-auto max-w-2xl border-t border-white/10 pt-6 md:pt-8">
        <div>
          <p className="eyebrow">Message the club</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Reach out before your first Friday session.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300">
            Ask about schedule details, what to wear, whether the class is a fit for your experience level, or anything else that helps you show up prepared.
          </p>

          {status === 'success' ? (
            <div className="mt-6 border-l-2 border-brand-red pl-5">
              <h2 className="text-2xl font-semibold text-white">Message received.</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Thanks for reaching out. We will get back to you soon with the next steps for training.
              </p>
            </div>
          ) : isContactFormConfigured ? (
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-[0.22em] text-zinc-500">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-2xl border border-white/20 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors focus:border-brand-red"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-[0.22em] text-zinc-500">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-2xl border border-white/20 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors focus:border-brand-red"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-[0.22em] text-zinc-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-3 w-full rounded-2xl border border-white/20 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors focus:border-brand-red"
                />
              </div>

              <button type="submit" disabled={status === 'submitting'} className="cta-primary border-0 disabled:cursor-not-allowed disabled:opacity-60">
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              <p aria-live="polite" className={`text-sm ${status === 'error' ? 'text-brand-red' : 'text-zinc-500'}`}>
                {status === 'error' && errorMessage
                  ? errorMessage
                  : 'We will follow up after reviewing your message.'}
              </p>
            </form>
          ) : (
            <div className="mt-6 border-l border-white/15 pl-5">
              <h2 className="text-2xl font-semibold text-white">The contact form is temporarily unavailable.</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Please check back shortly when the form is available again.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactPage
