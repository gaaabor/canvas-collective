import { useStaticQuery, graphql } from 'gatsby'

const useProducts = () => {
  const { products } = useStaticQuery(
    graphql`
      query Products {
        products: allProduct(
          filter: { featured: { ne: true } }
          sort: { fields: [price], order: ASC }
        ) {
          nodes {
            _id
            name
            category
            price
            currency
            bestseller
            featured
            image {
              alt
            }
            optimizedImage {
              childImageSharp {
                fluid(maxWidth: 280, maxHeight: 390) {
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

export default useProducts
