import React from "react"
import PropTypes from "prop-types"
import * as styles from "./experiencecard.module.css"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ExperienceCardComponent = ({
  data,
  image,
  title,
  positionDate,
  location,
  text,
}) => {
  const gatsbyImage = getImage(data[image].childImageSharp)

  return (
    <div className={styles.experienceWrapper}>
      <GatsbyImage
        image={gatsbyImage}
        alt={image}
        className={styles.experiencePic}
      />
      <div className={styles.experienceText}>
        <h3 className={styles.experienceTitle}>{title}</h3>
        <h4 className={styles.experiencePosition}>{positionDate}</h4>
        <p className={styles.experienceLocation}>{location}</p>
        <p className={styles.experienceText}>{text}</p>
      </div>
    </div>
  )
}

function ExperienceCard(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          baps: file(base: { eq: "baps.jpg" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
          icube: file(base: { eq: "icube.jpg" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
          wonderland: file(base: { eq: "wonderland.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
          toronto: file(base: { eq: "toronto.jpg" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
          uoft: file(base: { eq: "uoft.jpg" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
        }
      `}
      render={data => <ExperienceCardComponent data={data} {...props} />}
    />
  )
}

ExperienceCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  positionDate: PropTypes.string,
  location: PropTypes.string,
  text: PropTypes.string,
}

export default ExperienceCard
