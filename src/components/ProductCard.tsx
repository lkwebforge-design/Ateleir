import { motion } from 'framer-motion'
import { ArrowUpRight, Heart, Plus } from 'lucide-react'
import type { Product } from '../data/catalog'

type ProductCardProps = {
  product: Product
  index: number
  wished: boolean
  onWishlist: (slug: string) => void
  onQuickAdd: (product: Product) => void
}

export function ProductCard({ product, index, wished, onWishlist, onQuickAdd }: ProductCardProps) {
  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
    >
      <a className="product-card__media" href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
        <img className="product-card__image product-card__image--primary" src={product.image} alt={`${product.name} campaign`} />
        <img className="product-card__image product-card__image--alternate" src={product.alternate} alt="" aria-hidden="true" />
        <span className="product-card__index">0{index + 1}</span>
        <span className="product-card__hover-note">View piece <ArrowUpRight size={15} strokeWidth={1.5} /></span>
      </a>
      <div className="product-card__meta">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3>{product.name}</h3>
        </div>
        <div className="product-card__side">
          <p>{product.price}</p>
          <button className={`icon-button ${wished ? 'is-active' : ''}`} onClick={() => onWishlist(product.slug)} aria-label={`${wished ? 'Remove' : 'Add'} ${product.name} ${wished ? 'from' : 'to'} wishlist`}>
            <Heart size={17} strokeWidth={1.4} fill={wished ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
      <div className="product-card__actions">
        <span>Available in {product.sizes.join(' / ')}</span>
        <button className="quick-add" onClick={() => onQuickAdd(product)}>
          <span>Quick add</span>
          <span className="quick-add__circle"><Plus size={14} strokeWidth={1.5} /></span>
        </button>
      </div>
    </motion.article>
  )
}
