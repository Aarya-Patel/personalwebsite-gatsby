import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

export default function SEO({ data }) {
  return (
    <Helmet>
      <meta name="author" content="Aarya Patel" />
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="Aarya Patel, Software Developer, University of Toronto, React, Node.js, AWS, Gatsby, Next.js"
      />
      <title>Aarya Patel</title>
    </Helmet>
  )
}

export const query = graphql`
  query MySiteMetadata {
    site {
      siteMetadata {
        author
        siteUrl
        description
        title
        titleTemplate
      }
    }
  }
`
