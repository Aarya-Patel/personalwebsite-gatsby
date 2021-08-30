import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../separator.module.css"

export default function SeparatorBottom() {
  return (
    <div className={styles.svgWrapper}>
      <StaticImage
        width={100}
        src={"../../../images/svgbottom.svg"}
        className={`${styles.bottomPolygon} ${styles.center}`}
      />
    </div>
  )
}
