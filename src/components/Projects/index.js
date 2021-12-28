import React from "react"
import ProjectCard from "./ProjectCard"
import * as styles from "./projects.module.css"

const projectInfo = {
  rapstrack: {
    imageBase: "rapstrack",
    projectName: "RapsTrack 🦖🏀 ",
    projectInfo:
      "RapsTrack is a web application that allows Toronto Raptors fans to keep up with the team. I created a webscraper using Python & BeautifulSoup to scrape relevant data and stored it as JSON which allowed for features like searching and filtering. I developed the front-end and server-side using Node.js and Express.js.",
    ghLink: "https://github.com/Aarya-Patel/RapsTrack",
  },
  covid19: {
    imageBase: "covid19tracker",
    projectName: "Covid-19 Tracker 📊",
    projectInfo:
      "Built a Covid-19 Tracker web application that displays data fetched from third party APIs. Created an informative dashboard to better interpret different data using Chart.js and Material UI.",
    siteLink: "https://aarya-patel.github.io/Covid19Tracker/",
    ghLink: "https://github.com/Aarya-Patel/Covid19Tracker",
  },
  twitter: {
    imageBase: "twitter",
    projectName: "Twitter Clone ",
    projectInfo:
      "Replicated the Twitter application using the PERN stack. Users can tweet, like, reply and retweet others' tweets. Built an API with Express.js to query Postgres to get user and tweet info. Front-end was made with React and MUI.",
    siteLink: "https://ap06-twitter.herokuapp.com/",
  },

  calender: {
    imageBase: "calender",
    projectName: "Calender 🗓",
    projectInfo:
      "My team worked on a calender application created using Java. Focused on writing sustainable code by implementing various software design patterns. Incoporated MySQL to store user information to allow for continued use after exiting the app. Implemented multithreading to alert notifications synonymously.",
    ghLink: "https://github.com/Aarya-Patel/Calender",
  },
  nasa: {
    imageBase: "nasaApod",
    projectName: "Nasa APOD ✨",
    projectInfo:
      "Incorporated NASA's Astronomy Picture of the Day (APOD) API to create a web application that allows user to learn more about the universe. Used React to build the application and optimized it for desktop and mobile views. Facilitated user API requests using the fetch API and using that data to update specific components.",
    ghLink: "https://github.com/Aarya-Patel/NasaAPOD",
    siteLink: "https://aarya-patel.github.io/NasaAPOD/",
  },
  reminder: {
    imageBase: "reminder",
    projectName: "Reminder 📝",
    projectInfo:
      "Built a Reminder App from scratch entirely with React and optimized for desktop and mobile views. Added functionality such as: completing tasks, starring, deleting and filtering through the use of state. Also utilized local storage to store tasks to allow for continued use after closing the browser.",
    ghLink: "https://github.com/Aarya-Patel/Reminder",
    siteLink: "https://aarya-patel.github.io/Reminder/",
  },
  synduce: {
    imageBase: "synduce",
    projectName: "Synduce 💻",
    projectInfo:
      "Worked alongside a group to create a web application that utilizes the Software Engineering Lab at Uoft's Synduce code completion AI to allow users to easily use their software. I aided in the design and development of submitting jobs to the backend. Utilized AWS Lambdas to facilitate our serverless API endpoints and DynamoDB to save user jobs. Course project for CSC301 (Software Engineering).",
    ghLink:
      "https://github.com/Aarya-Patel/team-project-16-software-engineering-lab-uoft",
    siteLink: "https://synduce.herokuapp.com/",
  },
  checkoutStore: {
    imageBase: "store",
    projectName: "Store Checkout 🏪",
    projectInfo:
      "Created a simple full-stack online store checkout using React, Node.js (Express.js) and PostgreSQL. Also used Github Actions for automating tests. Users can checkout items and the new quantities will be persisted in the database. Assignment 1 from CSC301 (Software Engineering).",
    ghLink:
      "https://github.com/Aarya-Patel/assignment-1-36-win07xp-aarya-patel",
    siteLink: "https://csc301-a1-g36.herokuapp.com/",
  },
  covidapi: {
    imageBase: "covidapi",
    projectName: "Covid-19 API 🦠",
    projectInfo:
      "Built a Covid-19 API based on the JHU CSSE COVID-19 Dataset. Users can query the dataset to get relevant information and can upload new datasets. I utilized AWS S3 to store the uploaded the dataset files as well as read data from queries. Assignment 2 from CSC301 (Software Engineering). Note: The deploy will not work since I have deleted the S3 bucket to avoid incurring charge!",
    ghLink:
      "https://github.com/Aarya-Patel/assignment-2-37-win07xp-aarya-patel",
  },
  brackets: {
    imageBase: "brackets",
    projectName: "[Brackets] 🏟",
    projectInfo:
      "As part of the course project for CSC309 (Web Developement), my team and I developed an online tournament orginzation web application. Users can create/join tournaments and invite/kick users. Admins can manage those tournaments, ban users, view logs and see platform stats. I aided in the developement of most of the admin functionality and worked on the frontend auth hooks. Utilized Express.js and MongoDB on the backend and React on the frontend.",
    ghLink: "https://github.com/csc309-fall-2021/team05",
    siteLink: "https://csc309-brackets.herokuapp.com/",
  },
}

function Project(props) {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.title}>This is my work</h1>
      <div className={styles.container}>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["synduce"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["brackets"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["twitter"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["covidapi"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["checkoutStore"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["covid19"]} />
        </div>
        {/* <div className={styles.item}>
          <ProjectCard {...projectInfo["rapstrack"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["calender"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["nasa"]} />
        </div>
        <div className={styles.item}>
          <ProjectCard {...projectInfo["reminder"]} />
        </div> */}
      </div>
    </section>
  )
}

export default Project
