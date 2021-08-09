import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { rem, size } from 'polished'

import { ProductType, SVGType } from '@types'

import Button from '@components/Button'

import formatCurrency from '@utilities/formatCurrency'

const CompanyLogo = require('@assets/svg/logo.svg') as SVGType
const CartIcon = require('@assets/svg/cart.svg') as SVGType

interface Props {
  cartItems: ProductType[]
  cartOpen: boolean
  handleClearCart: () => void
  // eslint-disable-next-line no-unused-vars
  handleRemoveFromCart: (id: string) => void
  toggleCartOpen: () => void
}

const Header = ({
  cartItems,
  cartOpen,
  handleClearCart,
  handleRemoveFromCart,
  toggleCartOpen,
}: Props) => (
  <StyledHeader>
    <Link to="/">
      <StyledLogo />
    </Link>
    <StyledCart>
      <StyledCartIcon onClick={() => toggleCartOpen()} />
      {!!cartItems?.length && <StyledCounter>{cartItems.length}</StyledCounter>}
      {cartOpen && (
        <>
          <StyledCartContent>
            {cartItems.map(item => (
              <StyledCartItem key={item._id}>
                <StyledRemoveBtn
                  onClick={() => handleRemoveFromCart(item._id)}
                />
                <div>
                  <p>{item.name}</p>
                  <span>{formatCurrency(item.price, item.currency)}</span>
                </div>
                <Img fluid={item.optimizedImage.childImageSharp.fluid} />
              </StyledCartItem>
            ))}
            {cartItems?.length ? (
              <Button inverted onClick={() => handleClearCart()}>
                Clear
              </Button>
            ) : (
              <h2>Your cart is empty</h2>
            )}
          </StyledCartContent>
        </>
      )}
    </StyledCart>
  </StyledHeader>
)

const StyledHeader = styled.header`
  align-items: center;
  border-bottom: ${({ theme }) => theme.border.thick};
  display: flex;
  height: ${rem(90)};
  justify-content: space-between;

  ${({ theme }) => theme.media.lg} {
    height: ${rem(120)};
  }
`

const StyledLogo = styled(CompanyLogo)`
  width: ${rem(120)};

  ${({ theme }) => theme.media.lg} {
    width: ${rem(160)};
  }
`

const StyledCart = styled.div`
  position: relative;
`

const StyledCartIcon = styled(CartIcon)`
  ${size(32)};
  cursor: pointer;

  ${({ theme }) => theme.media.lg} {
    ${size(55)};
  }
`

const StyledCartContent = styled.div`
  width: ${rem(320)};
  height: auto;
  border: ${({ theme }) => theme.border.thick};
  position: absolute;
  z-index: 1;
  background-color: ${({ theme }) => theme.palette.white};
  right: 0;
  transform: translateY(24px);
  padding: ${rem(30)};

  ${({ theme }) => theme.media.lg} {
    width: ${rem(450)};
    transform: translateY(28px);
  }

  & > button {
    width: 100%;
    margin-top: ${rem(25)};
  }
`

const StyledRemoveBtn = styled.button`
  ${size(32)};
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  text-decoration: none;
  text-transform: uppercase;
  top: 5px;
  user-select: none;
  vertical-align: middle;

  &:before,
  &:after {
    background-color: ${({ theme }) => theme.palette.black};
    content: ' ';
    height: 20px;
    left: 14px;
    position: absolute;
    top: 5px;
    width: 3px;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

const StyledCartItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: ${rem(170)};
  border-bottom: ${({ theme }) => theme.border.thin};
  padding: ${rem(20)} 0;

  div {
    flex-basis: 50%;
    max-width: 50%;
  }

  p {
    font-size: ${({ theme }) => rem(theme.fontSize.lg)};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-transform: capitalize;
  }

  span {
    font-size: ${({ theme }) => rem(theme.fontSize.xl)};
    color: ${({ theme }) => theme.palette.grey};
  }

  div:last-of-type {
    transform: scale(0.5);
  }
`

const StyledCounter = styled.span`
  background-color: ${({ theme }) => theme.palette.black};
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => rem(theme.fontSize.md)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 0 2px;
  position: absolute;
  bottom: -9px;
  right: -7px;
`

export default Header
