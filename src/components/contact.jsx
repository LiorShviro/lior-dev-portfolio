import { useState } from 'react'
import { cn } from '../lib/utils.js'

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

export function Contact() {
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-secondary border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors'

  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-16">
          03 // GET_IN_TOUCH
        </h2>

        <p className="font-serif text-2xl md:text-3xl text-foreground mb-12 leading-snug">
          Have a project, question, or idea? Drop a line.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <label className="block space-y-2">
              <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                Name
              </span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </label>
            <label className="block space-y-2">
              <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </label>
          </div>

          <label className="block space-y-2">
            <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              Message
            </span>
            <textarea
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              className={cn(inputClass, 'resize-y')}
            />
          </label>

          <div className="flex items-center gap-6">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-mono text-xs tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300',
                status === 'submitting' && 'opacity-50 cursor-not-allowed',
              )}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && (
              <span className="font-mono text-xs text-primary tracking-wider">
                ✓ Message sent. I’ll be in touch.
              </span>
            )}
            {status === 'error' && (
              <span className="font-mono text-xs text-destructive tracking-wider">
                Something went wrong. Try again.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
