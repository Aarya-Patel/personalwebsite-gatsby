import React from "react"
import { Link } from "gatsby"
import * as styles from "./navbar.module.css"
import MenuIcon from "@material-ui/icons/Menu"
import { useMediaQueries } from "../../hooks/useMediaQueries"

export default function Navbar() {
  const smBreakpoint = useMediaQueries("sm")

  const renderNavlinks = matches => {
    return matches ? (
      <MenuIcon className={styles.menuIcon} />
    ) : (
      <>
        <Link to="#profile" className={styles.navlink}>
          Profile
        </Link>
        <Link to="#experiences" className={styles.navlink}>
          Experience
        </Link>
        <Link to="#work" className={styles.navlink}>
          Work
        </Link>
        <Link to="#contact" className={styles.navlink}>
          Contact
        </Link>
      </>
    )
  }

  return (
    <nav className={styles.navbar}>
      <span className={styles.logoName}>AP</span>
      <div className={styles.navlinksContainer}>
        {renderNavlinks(smBreakpoint)}
      </div>
    </nav>
  )
}
