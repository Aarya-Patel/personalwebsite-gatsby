module.exports = {
  siteMetadata: {
    title: `Aarya Patel`,
    titleTemplate: `%s | Aarya Patel`,
    description: `Hey, I'm Aarya Patel. Software engineer experienced in
    full stack web applications and curious about cloud computing.`,
    author: `Aarya Patel`,
    siteUrl: `https://aarya-patel.netlify.app`,
    keywords: [
      "Software Devloper",
      "University of Toronto",
      "React",
      "Node.js",
      "AWS",
      "Gatsby",
      "MongoDB",
      "PostgreSQL",
      "Python",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-material-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -64,
      },
    },
  ],
}
