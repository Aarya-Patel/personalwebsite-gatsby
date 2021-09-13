import React, { useState } from "react"
import * as styles from "./navbar.module.css"
import MenuIcon from "@material-ui/icons/Menu"
import Sidebar from "../Sidebar"
import { useMediaQueries } from "../../hooks/useMediaQueries"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const smBreakpoint = useMediaQueries("md")

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const renderNavlinks = matches => {
    return matches ? (
      <>
        <MenuIcon onClick={toggleSidebar} />
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
        <AnchorLink to="/#projects" className={styles.navlink}>
          Projects
        </AnchorLink>
        <AnchorLink to="/#contact" className={styles.navlink}>
          Contact
        </AnchorLink>
      </>
    )
  }

  return (
    <nav className={styles.navbar}>
      <span className={styles.logoName}>aarya patel</span>
      <div className={styles.navlinksContainer}>
        {renderNavlinks(smBreakpoint)}
      </div>
    </nav>
  )
}
