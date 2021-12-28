import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

export default function SEO({ title, description, pathname, article = false }) {
  const { site } = useStaticQuery(query)

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    pathname: pathname || site.siteMetadata.pathname,
    url: `${site.siteMetadata.siteUrl}${pathname || ""}`,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={article ? site.siteMetadata.titleTemplate : "%s"}
    >
      <meta name="author" content={site.siteMetadata.author} />
      <meta charSet="utf-8" />
      <meta name="keywords" content={site.siteMetadata.keywords.join(",")} />
      <meta name="description" content={seo.description} />
      <meta property="og:link" content={seo.url} />
    </Helmet>
  )
}

const query = graphql`
  query MySiteMetadata {
    site {
      siteMetadata {
        title
        author
        siteUrl
        defaultDescription: description
        defaultTitle: title
        titleTemplate
        keywords
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}
