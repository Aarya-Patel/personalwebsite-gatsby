import React from "react"
import * as styles from "./projectcard.module.css"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCardComponent = ({ data, imageBase, projectName, link }) => {
  const image = getImage(data[imageBase].childImageSharp)

  return (
    <div className={styles.card}>
      <GatsbyImage image={image} className={styles.image} />
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        <div className={styles.projectTitleWrapper}>
          <h3>{projectName}</h3>
        </div>
      </a>
    </div>
  )
}

export default function ProjectCard(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          rapstrack: file(base: { eq: "rapstrack.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }

          covid19tracker: file(base: { eq: "covid19tracker.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }

          twitter: file(base: { eq: "twitter.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }

          calender: file(base: { eq: "calender.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
        }
      `}
      render={data => <ProjectCardComponent data={data} {...props} />}
    />
  )
}
