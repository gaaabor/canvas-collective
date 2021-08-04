import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImageFluidProps } from 'gatsby-image'

import Layout from '@src/layout'
import { Row, Col } from '@grid/index'
import { Image, Button } from '@components/index'

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
      <Row>
        <Col lg={8}>Col 8 on lg</Col>
        <Col lg={4}>
          <Button href="/404">My button</Button>
        </Col>
      </Row>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
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
