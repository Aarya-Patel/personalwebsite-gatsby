import React from "react"
import Navbar from "../Navbar"
import Seo from "../SEO"

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Navbar />
      <main>{children}</main>
    </>
  )
}
