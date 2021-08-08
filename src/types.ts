import { FluidObject } from 'gatsby-image'
export interface ImageType {
  src: string
  alt: string
}

export interface OptimizedImageType {
  childImageSharp: {
    fluid: FluidObject
  }
}

export interface ProductType {
  name: string
  category: string
  price: number
  currency: string
  image: ImageType
  optimizedImage: OptimizedImageType
  featured: boolean
  optimizedRecommendations?: OptimizedImageType[]
  bestseller?: boolean
  details?: {
    dimmentions: {
      width: string
      height: string
    }
    size: number
    description: string
    recommendations: ImageType[]
  }
  // Fauna DB
  _id: string
  _ts: number
}

export interface ProductsType {
  nodes: ProductType[]
}

// eslint-disable-next-line no-unused-vars
export type CartActionAddType = (clickedItem: ProductType) => void
