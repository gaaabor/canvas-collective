import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { rem, size } from 'polished'

import { ProductType, CartActionAddType } from '@types'

import Row from '@grid/Row'
import Col from '@grid/Col'
import Product from '@components/Product'

import useProducts from '../hooks/useProducts'
import usePagination from '../hooks/usePagination'

import { PRODUCTS_PER_PAGE } from '../constants/'

// @ts-ignore
import CaretLeft from '@assets/svg/caret-left.svg'
// @ts-ignore
import CaretRight from '@assets/svg/caret-right.svg'

interface Props {
  handleAddToCart: CartActionAddType
}

const ProductList = ({ handleAddToCart }: Props) => {
  const { nodes: products } = useProducts()
  const [currentPage, setCurrentPage] = useState(1)

  const { pages, showLeftArrow, showRightArrow, renderFrom } = usePagination({
    count: products.length,
    page: currentPage,
    productsPerPage: PRODUCTS_PER_PAGE,
  })

  const productsToRender = products.slice(renderFrom, renderFrom + 6)

  return (
    <StyledProductList>
      <Col md={12}>
        <StyledSectionHeading>
          Photography / <span>Premium Photos</span>
        </StyledSectionHeading>
      </Col>
      <StyledFilter md={3}>
        <h1>Filtering</h1>
      </StyledFilter>
      <Col md={9}>
        <Row equalHeight>
          {productsToRender.map((product: ProductType) => (
            <Col md={4} key={product._id}>
              <Product product={product} handleAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
        <StyledPagination md={12}>
          {showLeftArrow && (
            <StyledCaretLeft onClick={() => setCurrentPage(currentPage - 1)} />
          )}
          {pages.map((page: number) => (
            <StyledPaginationItem
              key={page}
              onClick={() => setCurrentPage(page)}
              isActive={page === currentPage}
            >
              {page}
            </StyledPaginationItem>
          ))}
          {showRightArrow && (
            <StyledCaretRight onClick={() => setCurrentPage(currentPage + 1)} />
          )}
        </StyledPagination>
      </Col>
    </StyledProductList>
  )
}

const StyledProductList = styled(Row)``

const StyledSectionHeading = styled.h1`
  margin-bottom: ${rem(30)};
  font-size: ${({ theme }) => rem(theme.fontSize.md)};

  ${({ theme }) => theme.media.lg} {
    font-size: ${rem(32)};
    margin-bottom: ${rem(60)};
  }

  span {
    color: ${({ theme }) => theme.palette.grey};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`

const StyledPagination = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledPaginationItem = styled.span<{ isActive: boolean }>`
  font-size: ${({ theme }) => rem(theme.fontSize.xl)};
  margin: 0 ${rem(8)};
  cursor: pointer;
  color: ${({ theme }) => theme.palette.grey};

  ${({ isActive }) =>
    isActive &&
    css`
      color: #000;
      font-weight: 700;
    `}
`

const iconStyles = css`
  ${size(32)};
  cursor: pointer;
`

const StyledCaretLeft = styled(CaretLeft)`
  ${iconStyles}
`

const StyledCaretRight = styled(CaretRight)`
  ${iconStyles}
`

// TODO add filtering
const StyledFilter = styled(Col)`
  @media (max-width: 992px) {
    display: none;
  }
`

export default ProductList
