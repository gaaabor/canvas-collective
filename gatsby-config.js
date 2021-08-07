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
        path: `${__dirname}/static/assets/images/`,
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
        icon: `static/assets/images/icon.png`,
        include_favicon: true,
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'product',
        imagePath: 'image.src',
        name: 'optimizedImage',
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'product',
        imagePath: 'details.recommendations[].src',
        name: 'optimizedRecommendations',
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
