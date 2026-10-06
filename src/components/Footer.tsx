import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    if (email.includes('@')) setSubscribed(true)
  }

  return (
    <footer className="site-footer">
      <div className="footer-topline"><span>Made for the in-between</span><span>© ATELIER 2024—26</span></div>
      <div className="footer-wordmark"><span>ATELIER</span><i aria-hidden="true" /></div>
      <div className="footer-grid">
        <div>
          <p className="eyebrow eyebrow--muted">Stay in the know</p>
          <h3>Notes on material,<br />form and feeling.</h3>
          <form className="newsletter" onSubmit={submit}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <button type="submit" aria-label="Subscribe to newsletter"><ArrowUpRight size={18} strokeWidth={1.4} /></button>
          </form>
          {subscribed && <p className="form-note">You’re on the list. See you soon.</p>}
        </div>
        <div className="footer-links">
          <div><p className="eyebrow eyebrow--muted">Explore</p><a href="#featured">Shop</a><a href="#collection">Collections</a><a href="#lookbook">Journal</a><a href="#story">About</a></div>
          <div><p className="eyebrow eyebrow--muted">Connect</p><a href="#footer">Instagram</a><a href="#footer">Pinterest</a><a href="#footer">TikTok</a><a href="mailto:studio@atelier.example">Contact</a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>Designed with intention.</span><div><a href="#footer">Terms</a><a href="#footer">Privacy</a><a href="#footer">Shipping</a></div><span>Paris — London</span></div>
    </footer>
  )
}
