import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImageFluidProps } from 'gatsby-image'

import Layout from '@src/layout'
import Image from '@components/Image'

interface Props {
  location: {
    pathname: string
  }
  data: {
    image: {
      childImageSharp: GatsbyImageFluidProps
    }
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

export default ({ data, location }: Props) => {
  const { image } = data
  return (
    <Layout location={location}>
      <Image img={image.childImageSharp} />
    </Layout>
  )
}

export const NotFoundQuery = graphql`
  query NotFoundPageQuery {
    image: file(relativePath: { eq: "icon.png" }) {
      ...fluidImage
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
