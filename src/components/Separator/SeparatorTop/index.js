import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../separator.module.css"

export default function SeparatorTop() {
  return (
    <div className={styles.svgWrapper}>
      <StaticImage
        src={"../../../images/svgleft.svg"}
        className={`${styles.topPolygon} ${styles.left}`}
      />
      <StaticImage
        src={"../../../images/svgright.svg"}
        className={`${styles.topPolygon} ${styles.right}`}
      />
    </div>
  )
}
