import React from "react"
import Navbar from "../Navbar"
import Seo from "../SEO"
import * as styles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Seo />
      <Navbar className={styles.navbar} />
      <main className={styles.contentContainer}>{children}</main>
    </div>
  )
}
