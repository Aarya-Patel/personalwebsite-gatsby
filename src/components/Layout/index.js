import React from "react"
import Navbar from "../Navbar"
import SEO from "../SEO"

export default function Layout({ children }) {
  return (
    <div>
      <SEO />
      <Navbar />
      <main className="content-container">{children}</main>
    </div>
  )
}
