import { useState } from 'react'
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, Heart, Minus, Plus } from 'lucide-react'
import { ProductCard } from '../components/ProductCard'
import { products, productBySlug, type Product } from '../data/catalog'

type ProductPageProps = {
  slug: string
  wished: string[]
  onWishlist: (slug: string) => void
  onQuickAdd: (product: Product) => void
}

export function ProductPage({ slug, wished, onWishlist, onQuickAdd }: ProductPageProps) {
  const product = productBySlug(slug)
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [activeInfo, setActiveInfo] = useState('Materials')
  const [added, setAdded] = useState(false)
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 2)

  const add = () => {
    setAdded(true)
    onQuickAdd(product)
    window.setTimeout(() => setAdded(false), 2200)
  }

  return (
    <main className="product-page">
      <div className="product-back"><a href="/"><ArrowLeft size={16} strokeWidth={1.3} /> Back to collection</a><span>ATELIER / {product.category}</span></div>
      <div className="product-layout">
        <div className="product-gallery"><div className="product-gallery__main image-frame"><img src={product.image} alt={`${product.name} editorial view`} /><span className="image-frame__caption">Campaign / 01</span></div><div className="product-gallery__secondary image-frame"><img src={product.alternate} alt={`${product.name} alternate view`} /><span className="image-frame__caption">Detail / 02</span></div></div>
        <aside className="purchase-panel"><div className="purchase-panel__top"><p className="eyebrow">{product.category}</p><button className={`icon-button ${wished.includes(product.slug) ? 'is-active' : ''}`} onClick={() => onWishlist(product.slug)} aria-label="Add to wishlist"><Heart size={18} strokeWidth={1.4} fill={wished.includes(product.slug) ? 'currentColor' : 'none'} /></button></div><h1>{product.name}</h1><p className="purchase-panel__price">{product.price}</p><p className="body-copy">{product.detail}</p><div className="purchase-panel__rule" /><div className="selector-row"><span>Size</span><span>Find your size <ArrowUpRight size={13} strokeWidth={1.4} /></span></div><div className="size-grid">{product.sizes.map((item) => <button key={item} className={size === item ? 'is-selected' : ''} onClick={() => setSize(item)}>{item}</button>)}</div><div className="purchase-actions"><div className="quantity"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={14} strokeWidth={1.4} /></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus size={14} strokeWidth={1.4} /></button></div><button className={`button button--dark add-button ${added ? 'is-added' : ''}`} onClick={add}>{added ? <><Check size={16} /> Added to bag</> : <>Add to bag <ArrowUpRight size={16} strokeWidth={1.4} /></>}</button></div><div className="product-info">{['Materials', 'Fit guide', 'Care instructions'].map((label) => <div key={label} className={`product-info__item ${activeInfo === label ? 'is-open' : ''}`}><button onClick={() => setActiveInfo(activeInfo === label ? '' : label)}><span>{label}</span><ChevronDown size={15} strokeWidth={1.4} /></button>{activeInfo === label && <p>{label === 'Materials' ? '92% brushed Italian wool, 8% cashmere. Lined in organic cotton voile.' : label === 'Fit guide' ? 'Relaxed through the shoulder. Take your usual size for the intended silhouette.' : 'Dry clean only. Store folded in a cool, dry place between wears.'}</p>}</div>)}</div><p className="purchase-panel__note">Complimentary worldwide delivery<br />Easy returns within 14 days</p></aside>
      </div>
      <section className="related section-pad section-pad--gray"><div className="section-head"><span className="section-label"><span className="section-label__line" /><span>More to consider</span></span></div><div className="related__head"><h2>Complete the <em>ritual.</em></h2><a className="text-link" href="/">Continue shopping <ArrowUpRight size={16} strokeWidth={1.4} /></a></div><div className="products-grid products-grid--related">{related.map((item, index) => <ProductCard key={item.slug} product={item} index={index} wished={wished.includes(item.slug)} onWishlist={onWishlist} onQuickAdd={onQuickAdd} />)}</div></section>
    </main>
  )
}
