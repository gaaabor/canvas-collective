import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { rem, size } from 'polished'

import { ProductType, CartActionAddType, SVGType } from '@types'

import Row from '@grid/Row'
import Col from '@grid/Col'
import Product from '@components/Product'

import useProducts from '../hooks/useProducts'
import usePagination from '../hooks/usePagination'

import { PRODUCTS_PER_PAGE } from '../constants/'

const CaretLeft = require('@assets/svg/caret-left.svg') as SVGType
const CaretRight = require('@assets/svg/caret-right.svg') as SVGType
const ReverseIcon = require('@assets/svg/reverse.svg') as SVGType

interface Props {
  handleAddToCart: CartActionAddType
}

const ProductList = ({ handleAddToCart }: Props) => {
  const { nodes: data } = useProducts()

  const [products, setProducts] = useState(data)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortType, setSortType] = useState('')
  const [productsToRender, setProductsToRender] = useState(products)

  const { pages, showLeftArrow, showRightArrow, renderFrom } = usePagination({
    count: products.length,
    page: currentPage,
    productsPerPage: PRODUCTS_PER_PAGE,
  })

  useEffect(() => {
    const sortArray = (type: string) => {
      if (type === 'name') {
        const sortedByName = [...products].sort((a, b) =>
          a.name.localeCompare(b.name)
        )
        setProducts(sortedByName)
      } else {
        const sortedByPrice = [...products].sort((a, b) => a.price - b.price)
        setProducts(sortedByPrice)
      }
    }

    sortArray(sortType)
  }, [sortType])

  useEffect(() => {
    setProductsToRender(products.slice(renderFrom, renderFrom + 6))
  }, [products, renderFrom])

  const handleProductOrderChange = (): void => {
    setProducts((prev: ProductType[]) => {
      const revertedArray = [...prev].reverse()
      return [...revertedArray]
    })
  }

  return (
    <StyledProductList>
      <Col md={12}>
        <StyledSectionHeading>
          <h1>
            Photography / <span>Premium Photos</span>
          </h1>
          <StyledSorting>
            <ReverseIcon onClick={() => handleProductOrderChange()} />
            <p>Sort By</p>
            <select
              defaultValue="price"
              onChange={e => setSortType(e.target.value)}
            >
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </StyledSorting>
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

const StyledSectionHeading = styled.div`
  display: flex;
  margin-bottom: ${rem(30)};
  flex-direction: column;

  ${({ theme }) => theme.media.lg} {
    margin-bottom: ${rem(60)};
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  h1 {
    font-size: ${({ theme }) => rem(theme.fontSize.md)};
    margin-bottom: ${rem(20)};

    ${({ theme }) => theme.media.lg} {
      font-size: ${rem(32)};
      margin-bottom: 0;
    }

    span {
      color: ${({ theme }) => theme.palette.lightGrey};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
    }
  }
`

const StyledSorting = styled.div`
  display: flex;
  align-items: center;

  svg {
    ${size(18)};
    cursor: pointer;
    margin-right: ${rem(8)};
  }

  p,
  select {
    font-size: ${({ theme }) => rem(theme.fontSize.xl)};
  }

  p {
    color: ${({ theme }) => theme.palette.lightGrey};
    margin-right: ${rem(8)};
  }

  select {
    border: none;
    font-size: ${({ theme }) => rem(theme.fontSize.xl)};
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
