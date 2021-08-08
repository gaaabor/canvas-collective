import { useStaticQuery, graphql } from 'gatsby'

const useFeaturedProduct = () => {
  const { products } = useStaticQuery(
    graphql`
      query FeaturedProduct {
        products: allProduct(filter: { featured: { eq: true } }) {
          nodes {
            _id
            name
            category
            price
            currency
            image {
              alt
            }
            details {
              dimmentions {
                width
                height
              }
              size
              description
              recommendations {
                src
                alt
              }
            }
            optimizedImage {
              childImageSharp {
                fluid(maxWidth: 1300, maxHeight: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            optimizedRecommendations {
              childImageSharp {
                fluid(maxWidth: 120, maxHeight: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  return products
}

export default useFeaturedProduct
