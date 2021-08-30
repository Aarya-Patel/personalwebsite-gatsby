import React from "react"
import * as styles from "./contact.module.css"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ContactComponent = ({ data }) => {
  const linkedinImg = getImage(data.linkedin.childImageSharp)
  const githubImg = getImage(data.github.childImageSharp)

  return (
    <section id="#contact" className={styles.contact}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.contactGreet}>
        Let's connect. If you wish to grab a hold of me, I prefer messaging me
        on LinkedIn.
        <br /> You can also email me at{" "}
        <span className={styles.accent}>aarya.patel06@gmail.com</span> or give
        me a call at <span className={styles.accent}>647-569-5400</span>.
      </p>
      <ul className={styles.linkFlexbox}>
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/aarya-patel-50b12614a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              image={linkedinImg}
              alt="LinkedIn"
              className={styles.linkImg}
            />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://github.com/Aarya-Patel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              image={githubImg}
              alt="Github"
              className={styles.linkImg}
            />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default function Contact(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          linkedin: file(base: { eq: "linkedin.jpg" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
          github: file(base: { eq: "github.png" }) {
            base
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
        }
      `}
      render={data => <ContactComponent data={data} {...props} />}
    />
  )
}
