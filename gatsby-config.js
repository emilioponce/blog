module.exports = {
  siteMetadata: {
    title: `Emilio Ponce`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quattrocento Sans`, `Work Sans`]
      }
    }
  ]
};
