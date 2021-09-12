import React, { useState } from "react"
import { Link } from "gatsby"
import * as styles from "./navbar.module.css"
import MenuIcon from "@material-ui/icons/Menu"
import Sidebar from "../Sidebar"
import { useMediaQueries } from "../../hooks/useMediaQueries"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const smBreakpoint = useMediaQueries("sm")

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const renderNavlinks = matches => {
    return matches ? (
      <>
        <MenuIcon className={styles.menuIcon} onClick={toggleSidebar} />
        <Sidebar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </>
    ) : (
      <>
        <AnchorLink to="/#profile" className={styles.navlink}>
          Profile
        </AnchorLink>
        <AnchorLink to="/#experience" className={styles.navlink}>
          Experience
        </AnchorLink>
        <AnchorLink to="/#work" className={styles.navlink}>
          Work
        </AnchorLink>
        <AnchorLink to="/#contact" className={styles.navlink}>
          Contact
        </AnchorLink>
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
