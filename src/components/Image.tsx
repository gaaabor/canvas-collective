import React from 'react'
import { graphql } from 'gatsby'
import Img, { GatsbyImageFluidProps } from 'gatsby-image'

interface Props {
  img: GatsbyImageFluidProps
}

const Image = ({ img }: Props) => (
  <Img fluid={img.fluid} style={{ width: '200px' }} />
)

export default Image

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
