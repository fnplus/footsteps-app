/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  pathPrefix: "/",
  siteMetadata: {
    title: `Footsteps`,
    titleAlt: `Footsteps App`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    titleTemplate: `%s | Crowdsourced 🧑‍🤝‍🧑learning paths`,
    description: `Every expert was a beginner once. They tried and learnt things their own way. Join footsteps to learn from the journey of experts.`,
    shortName: `Footsteps`,
    url: `https://www.footsteps.dev`, // No trailing slash allowed!
    siteUrl: `https://www.footsteps.dev`,
    logo: `/images/img_share.png`,
    image: `/images/img_share.png`, // Path to your image you placed in the 'static' folder
    favicon: `/favicon.ico`,
    author: `@fnplusofficial`,
    twitter: `@fnplusofficial`,
    facebook: `fnplusofficial`,
    twitterUsername: `@fnplusofficial`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_TRACKING_ID,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/user/*`, `/editPath/*`] },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Footsteps: Your Personal Learning Path`,
        short_name: `Footsteps`,
        start_url: `/`,
        icon: `src/images/icon.png`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
