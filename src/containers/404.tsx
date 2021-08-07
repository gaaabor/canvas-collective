import React from 'react'

import Layout from '@src/layout'

interface Props {
  location: {
    pathname: string
  }
}

export default ({ location }: Props) => (
  <Layout location={location}>
    <h1>The page you are looking for does not exist... :(</h1>
  </Layout>
)
