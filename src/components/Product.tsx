import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { rem } from 'polished'

import { ProductType, CartActionAddType } from '@types'

import Button from '@components/Button'

import formatCurrency from '@utilities/formatCurrency'

interface Props {
  product: ProductType
  handleAddToCart: CartActionAddType
}

const Product = ({ product, handleAddToCart }: Props) => {
  const {
    name,
    category,
    price,
    currency,
    image,
    bestseller,
    optimizedImage,
  } = product

  return (
    <StyledProduct>
      <StyledImageWrapper>
        {bestseller && <span>Best Seller</span>}
        <Img fluid={optimizedImage.childImageSharp.fluid} alt={image.alt} />
        <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
      </StyledImageWrapper>
      <StyledCategory>{category}</StyledCategory>
      <StyledTitle>{name}</StyledTitle>
      <StyledPrice>{formatCurrency(price, currency)}</StyledPrice>
    </StyledProduct>
  )
}

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
  font-size: ${({ theme }) => rem(theme.fontSize.xl)};
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

export default Product
