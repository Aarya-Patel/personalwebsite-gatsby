import React from "react"
import { Helmet } from "react-helmet"

export default function SEO() {
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
