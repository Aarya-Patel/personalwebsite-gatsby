import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Profile from "../components/Profile"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Profile />
    <Experience />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
