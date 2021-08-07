import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { rem } from 'polished'

import { ProductType } from '@types'

import Row from '@grid/Row'
import Col from '@grid/Col'
import Button from '@components/Button'

import formatCurrency from '@utilities/formatCurrency'

interface Props {
  products: {
    nodes: ProductType[]
  }
}

const ProductList = () => (
  <StaticQuery
    query={ProductListQuery}
    render={({ products: { nodes: products } }: Props) => {
      const Product = ({
        name,
        category,
        price,
        currency,
        image,
        optimizedImage,
        bestseller,
      }: ProductType) => {
        const imgSrc = optimizedImage.childImageSharp.fluid

        console.log('bestseller', bestseller)

        return (
          <StyledProduct>
            <StyledImageWrapper>
              {bestseller && <span>Best Seller</span>}
              <Img fluid={imgSrc} alt={image.alt} />
              <Button onClick={() => console.log('Added')}>Add to cart</Button>
            </StyledImageWrapper>
            <StyledCategory>{category}</StyledCategory>
            <StyledTitle>{name}</StyledTitle>
            <StyledPrice>{formatCurrency(price, currency)}</StyledPrice>
          </StyledProduct>
        )
      }

      return (
        <StyledProductList>
          <Col md={3}>
            <h1>Filtering</h1>
          </Col>
          <Col md={9}>
            <Row equalHeight>
              {products.map(product => (
                <Col md={4} key={product._id}>
                  <Product
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    currency={product.currency}
                    image={product.image}
                    optimizedImage={product.optimizedImage}
                    bestseller={product.bestseller}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </StyledProductList>
      )
    }}
  />
)

const ProductListQuery = graphql`
  query ProductListQuery {
    products: allProduct(
      filter: { featured: { ne: true } }
      sort: { fields: [price], order: ASC }
    ) {
      nodes {
        _id
        name
        category
        price
        currency
        bestseller
        image {
          src
          alt
        }
        optimizedImage {
          childImageSharp {
            fluid(maxWidth: 280, maxHeight: 390) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const StyledProductList = styled(Row)``

const StyledProduct = styled.div`
  margin-bottom: ${rem(50)};
`

const StyledImageWrapper = styled.div`
  position: relative;
  margin-bottom: ${rem(12)};

  span {
    background-color: ${({ theme }) => theme.palette.white};
    left: 0;
    padding: ${rem(4)} ${rem(8)};
    position: absolute;
    top: 0;
    z-index: 1;
  }

  button {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: none;
  }

  &:hover {
    button {
      display: inline-flex;
    }
  }
`

const StyledCategory = styled.p`
  color: ${({ theme }) => theme.palette.grey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: capitalize;
`

const StyledTitle = styled.p`
  text-transform: capitalize;
  font-size: ${rem(32)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

const StyledPrice = styled.span`
  color: ${({ theme }) => theme.palette.grey};
  font-size: ${rem(32)};
`

export default ProductList
