import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { rem } from 'polished'

import { ProductType } from '@types'

import Row from '@grid/Row'
import Col from '@grid/Col'
import Button from '@components/Button'

import convertToMb from '@utilities/convertToMb'

interface Props {
  products: {
    nodes: ProductType[]
  }
}

interface PatialProps {
  order: number
}

const FeaturedProduct = () => (
  <StaticQuery
    query={FeaturedProductQuery}
    render={({
      products: {
        nodes: { 0: product },
      },
    }: Props) => {
      const imgSrc = product.optimizedImage.childImageSharp.fluid

      const ProductImage = ({ order }: PatialProps) => (
        <StyledImageWrapper md={12} order={order}>
          <StyledImage>
            <Img
              fluid={imgSrc}
              fadeIn={false}
              loading="eager"
              alt={product.image.alt}
            />
            <StyledFeaturedLabel>Photo of the day</StyledFeaturedLabel>
          </StyledImage>
        </StyledImageWrapper>
      )

      const ProductDescription = ({ order }: PatialProps) => (
        <StyledDescription md={7} order={order}>
          <h2>{`About the ${product.name}`}</h2>
          <h3>{product.category}</h3>
          <p>{product.details?.description}</p>
        </StyledDescription>
      )

      const ProductRecommendations = ({ order }: PatialProps) => (
        <StyledRecommendations md={5} order={order}>
          <h3>People also buy</h3>
          <StyledThumbnailsWrapper>
            {product?.optimizedRecommendations &&
              product?.optimizedRecommendations.map((image, index) => (
                <Img
                  fluid={image.childImageSharp.fluid}
                  alt={product.details?.recommendations[index].alt}
                  key={product.details?.recommendations[index].alt}
                />
              ))}
          </StyledThumbnailsWrapper>
          <h3>Details</h3>
          <span>{`Size: ${product.details?.dimmentions.width} x ${product.details?.dimmentions.height}`}</span>
          <span>
            {product.details?.size &&
              `Size: ${convertToMb(product.details.size)}`}
          </span>
        </StyledRecommendations>
      )

      return (
        <StyledFeaturedProduct>
          <StyledNameWrapper md={6} order={1}>
            <h1>{product.name}</h1>
          </StyledNameWrapper>
          <StyledCtaWrapper md={6} order={3}>
            <Button onClick={() => console.log('Added')}>Add to cart</Button>
          </StyledCtaWrapper>
          <ProductImage order={2} />
          <ProductDescription order={4} />
          <ProductRecommendations order={5} />
        </StyledFeaturedProduct>
      )
    }}
  />
)

const FeaturedProductQuery = graphql`
  query FeaturedProductQuery {
    products: allProduct(filter: { featured: { eq: true } }) {
      nodes {
        name
        category
        image {
          alt
        }
        details {
          description
          recommendations {
            alt
          }
          dimmentions {
            width
            height
          }
          size
        }
        optimizedImage {
          childImageSharp {
            fluid(maxWidth: 1300, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        optimizedRecommendations {
          childImageSharp {
            fluid(maxWidth: 120, maxHeight: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const StyledFeaturedProduct = styled(Row)`
  border-bottom: ${({ theme }) => theme.border.thick};
  padding-bottom: ${({ theme }) => rem(theme.spacing.section.sm)};

  ${({ theme }) => theme.media.lg} {
    padding-bottom: ${({ theme }) => rem(theme.spacing.section.lg)};
  }
`

const StyledNameWrapper = styled(Col)`
  display: flex;
  align-items: center;
  margin-bottom: ${rem(30)};
`

const StyledCtaWrapper = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: ${rem(30)};

  * {
    width: 100%;

    ${({ theme }) => theme.media.lg} {
      width: unset;
    }
  }
`

const StyledImageWrapper = styled(Col)`
  margin-bottom: ${rem(30)};

  ${({ theme }) => theme.media.lg} {
    margin-bottom: ${rem(50)};
  }
`

const StyledImage = styled.div`
  position: relative;
`

const StyledFeaturedLabel = styled.span`
  background-color: ${({ theme }) => theme.palette.white};
  bottom: 0;
  font-size: ${({ theme }) => rem(theme.fontSize.sm)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  left: 0;
  padding: ${rem(15)} ${rem(30)};
  position: absolute;

  ${({ theme }) => theme.media.lg} {
    padding: ${rem(20)} ${rem(40)};
  }
`

const StyledDescription = styled(Col)`
  margin-bottom: ${rem(15)};

  ${({ theme }) => theme.media.lg} {
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: ${rem(15)};
  }

  h3,
  p {
    color: ${({ theme }) => theme.palette.grey};
    margin-bottom: ${rem(15)};
  }

  h3 {
    text-transform: capitalize;
  }
`

const StyledRecommendations = styled(Col)`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.lg} {
    align-items: flex-end;
  }

  h2 {
    margin-bottom: ${rem(30)};
  }

  h3 {
    margin-bottom: ${rem(25)};
  }

  span {
    color: ${({ theme }) => theme.palette.grey};
    margin-bottom: ${rem(8)};
  }
`

const StyledThumbnailsWrapper = styled.div`
  display: flex;
  margin-bottom: ${rem(30)};
  max-width: 100%;

  ${({ theme }) => theme.media.lg} {
    margin-bottom: ${rem(50)};
  }

  /* Thumbnail wrapper */
  div {
    width: ${rem(95)};
    margin: 0 ${rem(25)} 0 0;

    ${({ theme }) => theme.media.lg} {
      width: ${rem(120)};
      margin: 0 0 0 ${rem(35)};
    }
  }
`

export default FeaturedProduct
