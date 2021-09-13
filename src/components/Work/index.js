import React from "react"
import ProjectCard from "./ProjectCard"
import * as styles from "./work.module.css"

const projectInfo = {
  rapstrack: {
    imageBase: "rapstrack",
    projectName: "RapsTrack",
    projectInfo:
      "RapsTrack is a web application that allows Toronto Raptors fans to keep up with the team. I created a webscraper using Python & BeautifulSoup to scrape relevant data and stored it as JSON which allowed for features like searching and filtering. I developed the front-end and server-side using Node.js and Express.js.",
    ghLink: "https://github.com/Aarya-Patel/RapsTrack",
  },
  covid19: {
    imageBase: "covid19tracker",
    projectName: "Covid-19 Tracker",
    projectInfo:
      "Built a Covid-19 Tracker web application that displays data fetched from third party APIs. Created an informative dashboard to better interpret different data using Chart.js and Material UI.",
    siteLink: "https://aarya-patel.github.io/Covid19Tracker/",
    ghLink: "https://github.com/Aarya-Patel/Covid19Tracker",
  },
  twitter: {
    imageBase: "twitter",
    projectName: "Twitter Clone",
    projectInfo:
      "Replicated the Twitter application using the PERN stack. Users can tweet, like, reply and retweet others' tweets. Built an API with Express.js to query Postgres to get user and tweet info. Front-end was made with React and MUI.",
    siteLink: "https://ap06-twitter.herokuapp.com/",
  },

  calender: {
    imageBase: "calender",
    projectName: "Calender",
    projectInfo:
      "My team worked on a calender application created using Java. Focused on writing sustainable code by implementing various software design patterns. Incoporated MySQL to store user information to allow for continued use after exiting the app. Implemented multithreading to alert notifications synonymously.",
    ghLink: "https://github.com/Aarya-Patel/Calender",
  },
  nasa: {
    imageBase: "nasaApod",
    projectName: "Nasa APOD",
    projectInfo:
      "Incorporated NASA's Astronomy Picture of the Day (APOD) API to create a web application that allows user to learn more about the universe. Used React to build the application and optimized it for desktop and mobile views. Facilitated user API requests using the fetch API and using that data to update specific components.",
    ghLink: "https://github.com/Aarya-Patel/NasaAPOD",
    siteLink: "https://aarya-patel.github.io/NasaAPOD/",
  },
  reminder: {
    imageBase: "reminder",
    projectName: "Reminder",
    projectInfo:
      "Built a Reminder App from scratch entirely with React and optimized for desktop and mobile views. Added functionality such as: completing tasks, starring, deleting and filtering through the use of state. Also utilized local storage to store tasks to allow for continued use after closing the browser.",
    ghLink: "https://github.com/Aarya-Patel/Reminder",
    siteLink: "https://aarya-patel.github.io/Reminder/",
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
        <div className={styles.item}>
          <ProjectCard {...projectInfo["nasa"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["reminder"]} />
        </div>
      </div>
    </section>
  )
}

export default Project
