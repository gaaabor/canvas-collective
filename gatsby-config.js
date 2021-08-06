require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    site: `Canvas Collective`,
    title: `Canvas Collective`,
    titleTemplate: `%s - Canvas Collective`,
    description: `Gabor Bencsik recruitment task with Gatsby + Typescript + Styled Components`,
    siteUrl: `https://url.com`,
    language: `en`,
    color: `#F7D708`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/src/routes.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Canvas Collective`,
        short_name: `CC`,
        start_url: `/`,
        background_color: `#E5E5E5`,
        theme_color: `#F7D708`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-source-faunadb`,
      options: {
        secret: process.env.FAUNADB_SECRET_KEY,
        index: `allProducts`,
        type: 'product',
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
  flags: {
    DEV_SSR: false,
  },
}
