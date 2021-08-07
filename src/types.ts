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
  optimizedRecommendations?: OptimizedImageType[]
  bestseller?: boolean
  featured?: boolean
  details?: {
    dimmentions: {
      width: string
      height: string
    }
    size: number
    description: string
    recommendations: ImageType[]
  }
  _id?: string
  _ts?: number
}
