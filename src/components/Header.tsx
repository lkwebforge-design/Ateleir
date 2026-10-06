import { useState } from 'react'
import { Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'

type HeaderProps = {
  cartCount: number
  onOpenPanel: (panel: 'search' | 'cart' | 'account') => void
}

export function Header({ cartCount, onOpenPanel }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['Shop', '#featured'],
    ['Collections', '#collection'],
    ['New arrivals', '#arrivals'],
    ['Journal', '#lookbook'],
    ['About', '#story'],
  ]

  return (
    <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
      <a className="wordmark" href="/" aria-label="ATELIER home">
        <span className="wordmark__mark" aria-hidden="true" />
        <span>ATELIER</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <div className="header-tools">
        <button onClick={() => onOpenPanel('search')} aria-label="Search"><Search size={17} strokeWidth={1.4} /></button>
        <button className="desktop-tool" onClick={() => onOpenPanel('account')} aria-label="Account"><UserRound size={17} strokeWidth={1.4} /></button>
        <button onClick={() => onOpenPanel('cart')} aria-label={`Cart with ${cartCount} items`} className="cart-tool">
          <ShoppingBag size={17} strokeWidth={1.4} />
          <span>{cartCount.toString().padStart(2, '0')}</span>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={19} strokeWidth={1.4} /> : <Menu size={19} strokeWidth={1.4} />}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          {links.map(([label, href], index) => <a key={label} href={href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</a>)}
          <p>Paris / London<br />Available worldwide</p>
        </div>
      )}
    </header>
  )
}
