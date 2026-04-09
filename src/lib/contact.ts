export interface ContactFormValues {
  name: string
  email: string
  message: string
}

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ?? ''
const CONTACT_REQUEST_TIMEOUT_MS = 12_000

export const isContactFormConfigured = accessKey.length > 0

export async function submitContactForm(values: ContactFormValues) {
  if (!isContactFormConfigured) {
    throw new Error('The contact form is not configured yet. Please try again through the form shortly.')
  }

  const controller = new AbortController()
  const timeoutId = window.setTimeout(() => controller.abort(), CONTACT_REQUEST_TIMEOUT_MS)

  let response: Response

  try {
    response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        access_key: accessKey,
        name: values.name,
        email: values.email,
        message: values.message,
        botcheck: '',
      }),
    })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('The contact request timed out. Please try again through the form shortly.')
    }

    console.error('Contact form request failed', error)
    throw new Error('There was a problem sending your message. Please try again through the form shortly.')
  } finally {
    window.clearTimeout(timeoutId)
  }

  let data: { message?: string; success?: boolean } | null = null

  try {
    data = (await response.json()) as { message?: string; success?: boolean }
  } catch {
    data = null
  }

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || 'Unable to send your message right now. Please try again.')
  }
}
