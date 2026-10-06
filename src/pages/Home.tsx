import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, ChevronRight, Play, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Footer } from '../components/Footer'
import { ProductCard } from '../components/ProductCard'
import { SectionLabel } from '../components/SectionLabel'
import { imagery, products, type Product } from '../data/catalog'

type HomeProps = {
  wished: string[]
  onWishlist: (slug: string) => void
  onQuickAdd: (product: Product) => void
  onPanel: (panel: 'search' | 'cart' | 'account') => void
}

export function Home({ wished, onWishlist, onQuickAdd, onPanel }: HomeProps) {
  const [lookbookOpen, setLookbookOpen] = useState(false)

  return (
    <>
      <main>
        <section className="hero" id="top">
          <video className="hero__video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src={`${import.meta.env.BASE_URL}atelier-hero.mp4`} type="video/mp4" />
          </video>
          <div className="hero__backdrop" />
          <div className="hero__grain" />
          <div className="hero__copy">
            <p className="hero__kicker"><span className="orange-dot" /> ATELIER / AUTUMN WINTER 26</p>
            <h1>Designed for<br /><em>those who dress</em><br />with intention<span className="hero__period">.</span></h1>
            <div className="hero__actions">
              <a className="button button--dark" href="#featured">Shop collection <ArrowUpRight size={16} strokeWidth={1.4} /></a>
              <button className="button button--quiet" onClick={() => setLookbookOpen(true)}><Play size={14} fill="currentColor" strokeWidth={1.3} /> View lookbook</button>
            </div>
          </div>
          <div className="hero__meta hero__meta--left"><span>01</span><span>Quiet forms<br />for loud lives.</span></div>
          <div className="hero__meta hero__meta--right"><span>Scroll to explore</span><ArrowDown size={15} strokeWidth={1.3} /></div>
          <motion.div className="hero-card" animate={{ y: [0, -8, 0], rotate: [0, 0.4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="hero-card__image"><img src={imagery.heroCard} alt="Featured editorial collection" /></div>
            <div className="hero-card__body"><div><p className="eyebrow">Featured collection</p><h2>Soft structures</h2></div><span className="hero-card__season">AW—26</span></div>
            <a href="#collection" className="hero-card__link">Explore <ArrowUpRight size={16} strokeWidth={1.4} /></a>
          </motion.div>
          <div className="hero__mark" aria-hidden="true">A<span>26</span></div>
        </section>

        <section className="collection section-pad" id="collection">
          <div className="section-head"><SectionLabel index="01 —" children="Collection" /><span className="section-head__aside">Autumn / Winter 2026</span></div>
          <div className="collection__grid">
            <motion.div className="collection__image image-frame" initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.1 }}>
              <img src={imagery.collection} alt="ATELIER campaign in quiet cream tones" />
              <span className="image-frame__caption">Campaign 01 / Light studies</span>
            </motion.div>
            <div className="collection__copy">
              <p className="display-number">A / 26</p>
              <h2>Contemporary silhouettes,<br /><em>crafted for everyday luxury.</em></h2>
              <p className="body-copy">A study in softened structure. This season, we look at the space between restraint and expression — pieces that hold their shape, then let you move.</p>
              <div className="collection__details"><div><span>Materials</span><b>Italian wool / Silk crepe</b></div><div><span>Designed in</span><b>Paris, France</b></div><div><span>Edition</span><b>Limited / 01—26</b></div></div>
              <a className="text-link" href="#lookbook">Discover the collection <ArrowUpRight size={16} strokeWidth={1.4} /></a>
            </div>
          </div>
        </section>

        <section className="featured section-pad section-pad--gray" id="featured">
          <div className="section-head"><SectionLabel index="02 —" children="Featured" /><span className="section-head__aside">The considered edit</span></div>
          <div className="featured__intro"><h2>Selected <em>pieces.</em></h2><p>Cut with clarity. Made to become part of your daily ritual.</p></div>
          <div className="products-grid">{products.slice(0, 4).map((product, index) => <ProductCard key={product.slug} product={product} index={index} wished={wished.includes(product.slug)} onWishlist={onWishlist} onQuickAdd={onQuickAdd} />)}</div>
          <div className="center-cta"><a className="button button--outline" href="#arrivals">View all pieces <ArrowUpRight size={16} strokeWidth={1.4} /></a></div>
        </section>

        <section className="lookbook section-pad" id="lookbook">
          <div className="section-head"><SectionLabel index="03 —" children="Lookbook" /><span className="section-head__aside">A visual essay / 26</span></div>
          <div className="lookbook__masthead"><h2>Between <em>light</em><br />and line.</h2><div><p className="eyebrow">The winter note</p><p className="body-copy">“The most enduring pieces are never the loudest in the room. They are the ones you reach for without thinking.”</p><button className="circle-link" onClick={() => setLookbookOpen(true)} aria-label="Open the lookbook"><ArrowUpRight size={21} strokeWidth={1.2} /></button></div></div>
          <div className="lookbook__grid">
            <div className="lookbook__image lookbook__image--tall image-frame"><img src={imagery.atelier} alt="Two figures in soft tailoring" /><span className="image-frame__caption">01 / The study of ease</span></div>
            <div className="lookbook__stack"><div className="lookbook__image lookbook__image--small image-frame"><img src={imagery.stillLife} alt="Still life of accessories" /><span className="image-frame__caption">02 / Objects with intent</span></div><div className="lookbook__quote"><Sparkles size={18} strokeWidth={1.2} /><p>“Dress is a form of knowing. A quiet language between you and the world.”</p><span>— The studio notes</span></div></div>
            <div className="lookbook__image lookbook__image--wide image-frame"><img src={imagery.story} alt="Neutral fashion editorial portrait" /><span className="image-frame__caption">03 / A body in motion</span></div>
          </div>
        </section>

        <section className="arrivals section-pad section-pad--gray" id="arrivals">
          <div className="section-head"><SectionLabel index="04 —" children="New arrivals" /><span className="section-head__aside">Just in / Week 34</span></div>
          <div className="arrivals__head"><h2>Latest <em>arrivals.</em></h2><a className="text-link" href="#featured">Shop all <ChevronRight size={16} strokeWidth={1.4} /></a></div>
          <div className="arrival-rail">{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} wished={wished.includes(product.slug)} onWishlist={onWishlist} onQuickAdd={onQuickAdd} />)}</div>
        </section>

        <section className="story section-pad" id="story">
          <div className="section-head"><SectionLabel index="05 —" children="The studio" /><span className="section-head__aside">Our point of view</span></div>
          <div className="story__grid"><div className="story__copy"><p className="display-number">Since / 2018</p><h2>Crafted with precision.<br /><em>Designed with purpose.</em></h2><p className="body-copy">ATELIER is a contemporary wardrobe built on the belief that luxury is less about excess and more about attention. We work slowly, with close partners and honest materials, to make pieces that feel inevitable.</p><a className="button button--dark" href="#footer">Discover our story <ArrowUpRight size={16} strokeWidth={1.4} /></a></div><div className="story__images"><div className="story__image story__image--large image-frame"><img src={imagery.story} alt="Model in a soft neutral dress" /></div><div className="story__image story__image--detail image-frame"><img src={imagery.accessory} alt="Editorial accessory still life" /></div><span className="story__stamp">Hand finished<br />in small runs</span></div></div>
        </section>

        <section className="press section-pad section-pad--gray" id="press"><div className="press__quote"><p className="eyebrow">The press / 2026</p><blockquote>“A wardrobe that refuses to perform — and in doing so, becomes unforgettable.”</blockquote><span>— The Edit, London</span></div><div className="press__logos"><span>VOGUE</span><span>MONOCLE</span><span>THE CUT</span><span>SSENSE</span><span>i—D</span></div></section>
      </main>
      <Footer />
      {lookbookOpen && <div className="modal-backdrop" onClick={() => setLookbookOpen(false)}><div className="lookbook-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setLookbookOpen(false)} aria-label="Close lookbook">×</button><img src={imagery.hero} alt="ATELIER lookbook" /><div><p className="eyebrow">Lookbook / AW—26</p><h2>The shape of quiet.</h2><p>Move through the collection at your own pace.</p></div></div></div>}
    </>
  )
}
