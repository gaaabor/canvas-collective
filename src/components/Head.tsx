import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface Props {
  title?: string
  description?: string
  thumbnail?: string
  article?: boolean
  pathname: string
}

const Head = ({ title, description, thumbnail, pathname, article }: Props) => (
  <StaticQuery
    query={QueryHead}
    render={({
      site: {
        siteMetadata: {
          site,
          defaultTitle,
          titleTemplate,
          defaultDescription,
          language,
          siteUrl,
          color,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: thumbnail || `${siteUrl}/src/images/icon.png`,
        url: `${siteUrl}${pathname}`,
      }
      return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
          <html lang={language} />

          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          <meta name="theme-color" content={color} />
          <meta name="application-name" content={site} />
          <link rel="canonical" href={seo.url} />

          <meta property="og:url" content={seo.url} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          {article && <meta property="og:type" content="article" />}

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content={site} />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
        </Helmet>
      )
    }}
  />
)

const QueryHead = graphql`
  query QueryHead {
    site {
      siteMetadata {
        site
        siteUrl
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        language
        color
      }
    }
  }
`

export default Head
