import React from 'react'

import Layout from '@src/layout'
import FeaturedProduct from '@components/FeaturedProduct'
import ProductList from '@components/ProductList'

interface Props {
  location: {
    pathname: string
  }
}

export default ({ location }: Props) => (
  <Layout location={location}>
    <FeaturedProduct />
    <ProductList />
  </Layout>
)
