module.exports = {
  siteMetadata: {
    title: `read_your_document.JS`,
    description: `read_your_document.JSのウェブサイト`,
    author: `read_your_document.JS office`,
    siteUrl: 'https://ryd-js.com',
    image: 'https://https://ryd-js.com/images/ogimage.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `read_your_document.JS`,
        short_name: `ryd.JS`,
        start_url: `/`,
        background_color: `#ffe867`,
        theme_color: `#ffe867`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    'gatsby-plugin-offline',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
