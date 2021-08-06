export interface Image {
  src: string
  alt: string
}

export interface Product {
  name: string
  category: string
  price: number
  currency: string
  image: Image
  bestseller?: boolean
  featured?: boolean
  details?: {
    dimmentions: {
      width: string
      height: string
    }
    size: number
    description: string
    recommendations: Image[]
  }
  _id: string
  _ts: number
}
