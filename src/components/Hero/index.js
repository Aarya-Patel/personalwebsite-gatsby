import React from "react"
import * as styles from "./hero.module.css"
import { KeyboardArrowDown } from "@material-ui/icons"
import Canvas from "../Canvas"

export default function Hero() {
  return (
    <section className={styles.heroBox}>
      <div className={styles.heroContent}>
        <p className={styles.intro}>👋 Hey, I'm</p>
        <h1 className={styles.name}>Aarya Patel</h1>
        <p className={styles.caption}>
          Software engineer experienced
          <br />
          full stack web applications and curious about cloud computing.
        </p>
      </div>
      <KeyboardArrowDown className={styles.downArrow} />
      <Canvas className={styles.canvas} />
    </section>
  )
}
