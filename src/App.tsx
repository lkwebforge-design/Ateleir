import { useEffect, useState } from 'react'
import { ArrowUpRight, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { ProductPage } from './pages/Product'
import type { Product } from './data/catalog'

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [cartCount, setCartCount] = useState(0)
  const [wished, setWished] = useState<string[]>([])
  const [panel, setPanel] = useState<'search' | 'cart' | 'account' | null>(null)
  const [toast, setToast] = useState('')

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', Boolean(panel))
    return () => document.body.classList.remove('no-scroll')
  }, [panel])

  const onWishlist = (slug: string) => setWished((items) => items.includes(slug) ? items.filter((item) => item !== slug) : [...items, slug])
  const onQuickAdd = (product: Product) => {
    setCartCount((count) => count + 1)
    setToast(`${product.name} added to bag`)
    window.setTimeout(() => setToast(''), 2400)
  }
  const goPanel = (next: 'search' | 'cart' | 'account') => setPanel(next)
  const isProduct = path.startsWith('/products/')
  const slug = path.split('/').filter(Boolean)[1]

  return (
    <div className="app-shell">
      {!isProduct && <Header cartCount={cartCount} onOpenPanel={goPanel} />}
      {isProduct ? <ProductPage slug={slug ?? 'wool-cocoon-jacket'} wished={wished} onWishlist={onWishlist} onQuickAdd={onQuickAdd} /> : <Home wished={wished} onWishlist={onWishlist} onQuickAdd={onQuickAdd} onPanel={goPanel} />}
      {panel && <div className="panel-backdrop" onClick={() => setPanel(null)}><aside className="side-panel" onClick={(event) => event.stopPropagation()}><button className="panel-close" onClick={() => setPanel(null)} aria-label="Close panel"><X size={18} strokeWidth={1.4} /></button>{panel === 'search' && <><p className="eyebrow">Search ATELIER</p><h2>Find your<br /><em>next piece.</em></h2><form className="panel-search" onSubmit={(event) => { event.preventDefault(); setPanel(null) }}><input autoFocus placeholder="Search pieces, materials, notes" /><button aria-label="Submit search"><ArrowUpRight size={18} strokeWidth={1.4} /></button></form><p className="panel-note">Try “wool”, “silk”, or “accessories”.</p></>}{panel === 'cart' && <><p className="eyebrow">Your bag / {cartCount.toString().padStart(2, '0')}</p><h2>Your considered<br /><em>selection.</em></h2>{cartCount > 0 ? <><div className="bag-row"><div className="bag-row__thumb"><ShoppingBag size={22} strokeWidth={1.2} /></div><div><p>Curated pieces</p><span>Ready when you are</span></div><b>€—</b></div><button className="button button--dark panel-button" onClick={() => setPanel(null)}>View bag <ArrowUpRight size={16} strokeWidth={1.4} /></button></> : <p className="panel-note">Your bag is waiting for something with intention.</p>}</>}{panel === 'account' && <><p className="eyebrow">ATELIER account</p><h2>Keep your<br /><em>ritual close.</em></h2><div className="account-panel"><UserRound size={28} strokeWidth={1.2} /><p>Sign in to save pieces, track orders, and keep your edit between visits.</p><button className="button button--outline panel-button" onClick={() => setPanel(null)}>Continue <ArrowUpRight size={16} strokeWidth={1.4} /></button></div></>}</aside></div>}
      {toast && <div className="toast"><span className="orange-dot" />{toast}</div>}
    </div>
  )
}

export default App
