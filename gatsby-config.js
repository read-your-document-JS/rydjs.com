module.exports = {
  siteMetadata: {
    title: `read_your_document.JS`,
    description: `read_your_document.JSのウェブサイト`,
    author: `read_your_document.JS office`,
    siteUrl: 'https://ryd-js.com',
    imageUrl: 'https://ryd-js.com/ogimage.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backnumbers`,
        path: `${__dirname}/backnumbers`,
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
