import React from "react"
import * as styles from "../separator.module.css"

export default function SeparatorTop() {
  return (
    <div className={styles.svgWrapper}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(245, 245, 245)"
          fill-opacity="1"
          d="M0,160L720,256L1440,32L1440,320L720,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}
