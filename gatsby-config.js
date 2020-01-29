module.exports = {
  siteMetadata: {
    title: `Cleberson Jr. Blog`,
    description: `Meu lugar na internet para compartilhar experiências e conhecimentos`,
    author: `@clebersondev`,
    contact: {
      github: `https://github.com/cleberson-dev`,
      twitter: `https://twitter.com/jrcleb`,
      email: `cleberson.dev@gmail.com`,
      linkedin: `#`
    }
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ClebersonBlog`,
        short_name: `CJBlog`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#011627`,
        display: `minimal-ui`,
        icon: `src/images/blog-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`
  ],
}
