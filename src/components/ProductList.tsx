import React from 'react'
import styled from 'styled-components'

import { ProductType, CartActionAddType } from '@types'

import Row from '@grid/Row'
import Col from '@grid/Col'
import Product from '@components/Product'

import useProducts from '../hooks/useProducts'

interface Props {
  handleAddToCart: CartActionAddType
}

const ProductList = ({ handleAddToCart }: Props) => {
  const { nodes: products } = useProducts()

  return (
    <StyledProductList>
      <Col md={3}>
        <h1>Filtering</h1>
      </Col>
      <Col md={9}>
        <Row equalHeight>
          {products.map((product: ProductType) => (
            <Col md={4} key={product._id}>
              <Product product={product} handleAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      </Col>
    </StyledProductList>
  )
}

const StyledProductList = styled(Row)``

export default ProductList
