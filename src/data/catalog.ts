export type Product = {
  slug: string
  name: string
  category: string
  price: string
  detail: string
  sizes: string[]
  image: string
  alternate: string
  tone: string
}

export const imagery = {
  hero: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/R8ietVRuTaxi.jpg',
  heroCard: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/9zA6qdZgZtqmJXfKmJbNxG.jpg',
  collection: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/PcBoxSwUmaNktAHV2HXi6f.jpg',
  story: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/aCuKuVqQcpF3b7h5qr6Ap9.jpg',
  atelier: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/hRYUnHFsyYAvZarU6vdLbP.jpg',
  stillLife: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/SzzDxiiCN5gye6W8w7M8Mh.jpg',
  accessory: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/HKhGBBYhDuBXUHiFHhHJ6.jpg',
}

export const products: Product[] = [
  {
    slug: 'wool-cocoon-jacket',
    name: 'Wool Cocoon Jacket',
    category: 'Outerwear',
    price: '€690',
    detail: 'A softened architectural layer in brushed Italian wool, shaped to move with the body.',
    sizes: ['XS', 'S', 'M', 'L'],
    image: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/PcBoxSwUmaNktAHV2HXi6f.jpg',
    alternate: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/9zA6qdZgZtqmJXfKmJbNxG.jpg',
    tone: 'cream',
  },
  {
    slug: 'column-dress',
    name: 'Column Dress',
    category: 'Dresses',
    price: '€520',
    detail: 'A precise, fluid silhouette cut from lightweight silk crepe with a low sculpted back.',
    sizes: ['XS', 'S', 'M'],
    image: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/BDv7CGy8iDwx976FmXPfXc.jpg',
    alternate: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/BDv7CGy8iDwx976FmXPfXc.jpg',
    tone: 'sand',
  },
  {
    slug: 'soft-tailored-set',
    name: 'Soft Tailored Set',
    category: 'Tailoring',
    price: '€780',
    detail: 'An easy two-piece in washed linen blend. Relaxed through the shoulder, exact at the hem.',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/9zA6qdZgZtqmJXfKmJbNxG.jpg',
    alternate: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/R8ietVRuTaxi.jpg',
    tone: 'chalk',
  },
  {
    slug: 'folded-leather-flat',
    name: 'Folded Leather Flat',
    category: 'Accessories',
    price: '€260',
    detail: 'An understated everyday flat with a folded upper and a barely-there squared toe.',
    sizes: ['36', '37', '38', '39', '40'],
    image: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/SzzDxiiCN5gye6W8w7M8Mh.jpg',
    alternate: 'https://files.manuscdn.com/search-media/310519664003183070/DHdZs8D3iJZVneQJmiiVsN/HKhGBBYhDuBXUHiFHhHJ6.jpg',
    tone: 'silver',
  },
]

export const productBySlug = (slug: string) => products.find((product) => product.slug === slug) ?? products[0]
