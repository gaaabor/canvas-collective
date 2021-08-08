import React, { useState } from 'react'

import { ProductType } from '@types'

import Layout from '@src/layout'
import Header from '@components/Header'
import FeaturedProduct from '@components/FeaturedProduct'
import ProductList from '@components/ProductList'

interface Props {
  location: {
    pathname: string
  }
}

export default ({ location }: Props) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as ProductType[])

  const handleAddToCart = (clickedItem: ProductType): void => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item._id === clickedItem._id)

      if (isItemInCart) {
        alert('The item is alreadt in your cart')
        return [...prev]
      }

      setCartOpen(true)

      return [...prev, { ...clickedItem }]
    })
  }

  const handleRemoveFromCart = (id: string): void => {
    setCartItems(prev => {
      const filteredItems = prev.filter(item => item._id !== id)

      if (!filteredItems?.length) {
        setCartOpen(false)
      }

      return [...filteredItems]
    })
  }

  const handleClearCart = (): void => {
    setCartItems([])
    setCartOpen(false)
  }

  const toggleCartOpen = (): void => {
    setCartOpen(!cartOpen)
  }

  return (
    <Layout location={location}>
      <Header
        cartItems={cartItems}
        cartOpen={cartOpen}
        handleClearCart={handleClearCart}
        handleRemoveFromCart={handleRemoveFromCart}
        toggleCartOpen={toggleCartOpen}
      />
      <FeaturedProduct handleAddToCart={handleAddToCart} />
      <ProductList handleAddToCart={handleAddToCart} />
    </Layout>
  )
}
