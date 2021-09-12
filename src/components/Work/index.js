import React from "react"
import ProjectCard from "./ProjectCard"
import * as styles from "./work.module.css"

const projectInfo = {
  rapstrack: {
    imageBase: "rapstrack",
    projectName: "RapsTrack",
    link: "https://github.com/Aarya-Patel/RapsTrack",
  },
  covid19: {
    imageBase: "covid19tracker",
    projectName: "Covid-19 Tracker",
    link: "https://aarya-patel.github.io/Covid19Tracker/",
  },
  twitter: {
    imageBase: "twitter",
    projectName: "Twitter Clone",
    link: "https://ap06-twitter.herokuapp.com/",
  },

  calender: {
    imageBase: "calender",
    projectName: "Calender",
    link: "https://github.com/Aarya-Patel/Calender",
  },
}

function Project(props) {
  return (
    <section id="work" className={styles.work}>
      <h1 className={styles.title}>This is my work</h1>
      <div className={styles.gridContainer}>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["twitter"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["rapstrack"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["calender"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["covid19"]} />
        </div>
      </div>
    </section>
  )
}

export default Project
