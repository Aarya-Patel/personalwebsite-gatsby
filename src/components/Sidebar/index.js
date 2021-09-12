import React from "react"
import { Drawer, List, ListItem, makeStyles, Divider } from "@material-ui/core"
import { Close as CloseIcon } from "@material-ui/icons"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const useStyles = makeStyles({
  sidebar: {
    width: "250px",
  },

  listItem: {
    padding: "1.5em 1em",
  },

  navlink: {
    color: "black",
    textDecoration: "none",
  },
})

const Sidebar = ({ open, toggleSidebar }) => {
  const classes = useStyles()

  return (
    <Drawer anchor="right" open={open} onClose={toggleSidebar}>
      <List className={classes.sidebar}>
        <ListItem className={classes.listItem}>
          <CloseIcon onClick={toggleSidebar} />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} onClick={toggleSidebar}>
          <AnchorLink to="/#profile" className={classes.navlink}>
            Profile
          </AnchorLink>
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} onClick={toggleSidebar}>
          <AnchorLink to="/#experience" className={classes.navlink}>
            Experience
          </AnchorLink>
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} onClick={toggleSidebar}>
          <AnchorLink to="/#work" className={classes.navlink}>
            Work
          </AnchorLink>
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} onClick={toggleSidebar}>
          <AnchorLink to="/#contact" className={classes.navlink}>
            Contact
          </AnchorLink>
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  )
}

export default Sidebar
