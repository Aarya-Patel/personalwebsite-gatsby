import React from "react"
import * as styles from "../separator.module.css"

export default function SeparatorBottom() {
  return (
    <div className={styles.svgWrapper}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(245, 245, 245)"
          fill-opacity="1"
          d="M0,96L720,224L1440,160L1440,0L720,0L0,0Z"
        ></path>
      </svg>
    </div>
  )
}
