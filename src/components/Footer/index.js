import React from "react"
import * as styles from "./footer.module.css"
import logo from "../../images/gatsbyLogo.svg"

export default function Footer() {
  return (
    <section className={styles.footer}>
      <p>designed & developed by Aarya Patel with </p>
      <img src={logo} alt="" href="Gatsby Logo" />
    </section>
  )
}
