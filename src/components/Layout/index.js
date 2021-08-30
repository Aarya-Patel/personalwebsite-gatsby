import React from "react"
import Navbar from "../Navbar"
import Seo from "../SEO"
import * as styles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <Seo />
      <Navbar />
      <main className={styles.contentContainer}>{children}</main>
    </div>
  )
}
