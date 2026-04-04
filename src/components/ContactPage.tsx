import { useState } from 'react'

const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: '',
        }),
      })

      const data = await response.json()
      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Form */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">Get in Touch</h1>

          {status === 'success' ? (
            <p className="mt-8 text-zinc-300 text-lg">
              Got it! We will be in contact with you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Honeypot field - hidden from humans, catches bots */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-zinc-400 uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:border-brand-red focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-zinc-400 uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:border-brand-red focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-zinc-400 uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:border-brand-red focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="text-brand-red uppercase tracking-wider text-sm font-semibold hover:text-white transition-colors bg-transparent border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message \u2192'}
              </button>
              {status === 'error' && (
                <p className="text-brand-red text-sm">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold">Location &amp; Info</h2>
          <dl className="mt-8 space-y-6 text-zinc-300">
            <div>
              <dt className="text-sm text-zinc-400 uppercase tracking-wider">Location</dt>
              <dd className="mt-1">San Marcos, Texas</dd>
            </div>
            <div>
              <dt className="text-sm text-zinc-400 uppercase tracking-wider">Email</dt>
              <dd className="mt-1">info@crazy8grappling.com</dd>
            </div>
            <div>
              <dt className="text-sm text-zinc-400 uppercase tracking-wider">Phone</dt>
              <dd className="mt-1">(512) 555-0188</dd>
            </div>
            <div>
              <dt className="text-sm text-zinc-400 uppercase tracking-wider">Hours</dt>
              <dd className="mt-1">Mon&ndash;Fri 5:30 PM &ndash; 9:00 PM</dd>
              <dd>Sat 10:00 AM &ndash; 1:00 PM</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
