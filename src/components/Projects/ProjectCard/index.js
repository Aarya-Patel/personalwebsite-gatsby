import React from "react"
import * as styles from "./projectcard.module.css"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCardComponent = ({
  data,
  imageBase,
  projectName,
  projectInfo,
  ghLink,
  siteLink,
}) => {
  const image = getImage(data[imageBase].childImageSharp)

  return (
    <div className={styles.card}>
      <GatsbyImage
        image={image}
        className={styles.image}
        alt={data[imageBase].base}
      />
      <div className={styles.projectContent}>
        <h3>{projectName}</h3>
        <p className={styles.projectInfoText}>{projectInfo}</p>
        <div>
          {ghLink ? (
            <a
              className={styles.workButton}
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          ) : (
            ""
          )}
          {siteLink ? (
            <a
              className={styles.workButton}
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
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
          nasaApod: file(base: { eq: "nasaApod.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
          reminder: file(base: { eq: "reminder.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
          synduce: file(base: { eq: "synduce.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
          store: file(base: { eq: "store.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
          covidapi: file(base: { eq: "covidapi.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
          brackets: file(base: { eq: "brackets.png" }) {
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
