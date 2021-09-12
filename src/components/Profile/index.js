import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./profile.module.css"

const ProfileComponent = ({ data }) => {
  const profilePic = getImage(data.profilepic.childImageSharp)

  return (
    <section id="profile" className={styles.profile}>
      <h1 className={styles.title}>Hello there!</h1>
      <div className={styles.profileFlexbox}>
        <div className={styles.profilePictureWrapper}>
          <GatsbyImage
            image={profilePic}
            alt="Profile Picture"
            className={styles.profilePicture}
          />
        </div>
        <div className={styles.profileText}>
          <p>
            I am currently a Computer Science Specialist student at the
            University of Toronto with a passion for web-development and DevOps.
            My curiousity is the driving factor that pushes me to explore the
            vast fields of web-development and cloud-computing. On a weekly
            basis, you can find me: working on personal projects, cooking meals,
            preparing presentations or playing video games.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Profile(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          profilepic: file(base: { eq: "profilepic.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
        }
      `}
      render={data => <ProfileComponent data={data} {...props} />}
    />
  )
}
