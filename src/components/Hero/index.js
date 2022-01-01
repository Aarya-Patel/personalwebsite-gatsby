import React from "react"
import * as styles from "./hero.module.css"
import CanvasAnimation from "../Canvas"

export default function Hero() {
  return (
    <section className={styles.heroBox}>
      <div className={styles.heroContent}>
        <p className={styles.intro}>👋 Hey, I'm</p>
        <h1 className={styles.name}>Aarya Patel</h1>
        <p className={styles.caption}>
          Software engineer experienced in
          <br />
          full stack web applications and curious about cloud computing.
        </p>
      </div>
      <p className={styles.downArrow}>&darr;</p>
      <CanvasAnimation className={styles.canvas} />
    </section>
  )
}
